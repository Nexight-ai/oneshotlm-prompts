import { pathToFileURL } from "node:url";

export function buildAdmission(env) {
  const { BEFORE: before, AFTER: after, REFRESH_MODEL: model, PROMPT_ID: prompt, ATTEMPT_ID: attempt, ANNOUNCE: announce } = env;
  if (![before, after].every(value => /^[a-f0-9]{40}$/.test(value || "") && !/^0+$/.test(value))) throw Error("Invalid source revisions");
  // Only an explicit "false" opts out of the What's New post; blank keeps the default. It is the last
  // field, matching the order the Worker hashes into the admission ID.
  if (announce && announce !== "false") throw Error("announce may only be false or blank");
  const quiet = announce === "false" ? { announce: false } : {};
  if (model || prompt || attempt) {
    if (!model || !prompt || !/^[a-f0-9]{32}$/.test(attempt || "")) throw Error("Single-pair refresh requires model, prompt and a 32-character hex attempt ID");
    if (!/^[\w.-]+\/[\w.:-]+$/.test(model) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(prompt)) throw Error("Invalid model or prompt ID");
    if (before !== after) throw Error("Single-pair refresh requires identical before/after source revisions");
    return { before, after, refresh: [model], attempt, prompts: { [model]: [prompt] }, ...quiet };
  }
  if (before === after) throw Error("Additions require different source revisions");
  return { before, after, ...quiet };
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
  if (!input.refresh) return admission;
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
