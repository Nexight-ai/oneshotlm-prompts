import { pathToFileURL } from "node:url";

// Four kinds of dispatch, matching the Worker's admission (fields in the order it hashes them):
// - additions: before != after, nothing else (also what a push sends)
// - full refresh: refresh_model + attempt_id; the model runs every live prompt and is published
// - recovery: retry_of + the parent batch's own inputs; reruns only the parent's recorded external
//   failures and publishes only those
// - diagnostic: diagnostic=true + refresh_model + attempt_id (+ optional prompt_id); saved by the
//   pipeline, never published. A prompt selection is accepted only here.
export function buildAdmission(env) {
  const { BEFORE: before, AFTER: after, REFRESH_MODEL: model, PROMPT_ID: prompt, ATTEMPT_ID: attempt, ANNOUNCE: announce, RETRY_OF: retryOf, DIAGNOSTIC: diagnostic } = env;
  if (![before, after].every(value => /^[a-f0-9]{40}$/.test(value || "") && !/^0+$/.test(value))) throw Error("Invalid source revisions");
  // Only an explicit "false" opts out of the What's New post; blank keeps the default.
  if (announce && announce !== "false") throw Error("announce may only be false or blank");
  if (diagnostic && diagnostic !== "true") throw Error("diagnostic may only be true or blank");
  if (retryOf && !/^[a-f0-9]{40}$/.test(retryOf)) throw Error("retry_of must be a 40-character batch ID");
  if (prompt && !diagnostic) throw Error("prompt_id is only for diagnostic runs; a published refresh covers every live prompt");
  if (diagnostic && (!model || retryOf || announce)) throw Error("A diagnostic run needs refresh_model and cannot set retry_of or announce");
  if (model && !/^[\w.-]+\/[\w.:-]+$/.test(model)) throw Error("Invalid model ID");
  if (prompt && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(prompt)) throw Error("Invalid prompt ID");
  if (model && !/^[a-f0-9]{32}$/.test(attempt || "")) throw Error("A refresh requires a 32-character hex attempt ID");
  if (!model && attempt) throw Error("attempt_id requires refresh_model");
  if (model && before !== after) throw Error("A refresh requires identical before/after source revisions");
  if (!model && before === after) throw Error("Additions require different source revisions");
  return { before, after, ...(model ? { refresh: [model] } : {}), ...(retryOf ? { retryOf } : {}), ...(attempt ? { attempt } : {}),
    ...(prompt ? { prompts: { [model]: [prompt] } } : {}), ...(announce === "false" ? { announce: false } : {}), ...(diagnostic ? { diagnostic: true } : {}) };
}

export async function run(env, { request = fetch, sleep = ms => new Promise(resolve => setTimeout(resolve, ms)), log = console.log } = {}) {
  const { PIPELINE_URL, TRIGGER_SECRET } = env;
  if (!PIPELINE_URL || !TRIGGER_SECRET) throw Error("Missing pipeline configuration");
  const input = buildAdmission(env);
  const base = new URL(PIPELINE_URL);
  if (base.protocol !== "https:" || base.username || base.password || base.search || base.hash) throw Error("Expected HTTPS pipeline URL without credentials, query or fragment");
  const url = base.href.replace(/\/$/, "");
  const headers = { authorization: `Bearer ${TRIGGER_SECRET}`, "content-type": "application/json" };
  const body = JSON.stringify(input);
  // Keep the body/attempt identical across redelivery; never create a fresh paid attempt here.
  async function call(path, method = "GET") {
    for (let attempt = 0; attempt < 4; attempt++) {
      let response;
      try {
        response = await request(`${url}${path}`, { method, headers, redirect: "error", signal: AbortSignal.timeout(30000), ...(method === "POST" ? { body } : {}) });
      } catch (error) {
        if (attempt === 3) throw error;
      }
      if (response?.ok) return response.json();
      if (response && ((response.status < 500 && response.status !== 429) || attempt === 3)) {
        throw Error(`Pipeline ${method} ${path}: HTTP ${response.status}`);
      }
      await sleep(5000 * (attempt + 1));
    }
  }
  const admission = await call("/run", "POST");
  if (!/^[a-f0-9]{40}$/.test(admission?.id || "")) throw Error("Invalid admission response");
  log(`Accepted workflow: ${admission.id}`);
  if (!input.refresh && !input.retryOf) return admission;
  for (let poll = 0; poll < 90; poll++) {
    const status = await call(`/runs/${admission.id}`);
    log(`Workflow ${admission.id}: ${status.status}`);
    if (status.status === "complete") { log(JSON.stringify(status)); return status; }
    if (["errored", "terminated"].includes(status.status)) {
      log(JSON.stringify(status));
      throw Error(`Workflow ${status.status}; inspect the existing execution before retrying`);
    }
    await sleep(30000);
  }
  throw Error(`Observation timed out; workflow ${admission.id} may still be running. Do not create a new attempt.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await run(process.env);
