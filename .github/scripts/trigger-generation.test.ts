import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { buildAdmission, run } from "./trigger-generation.ts";

const source = "1597d8edc0da73343d59f435bd7c6852a9fb35fc";
const env = { PIPELINE_URL: "https://pipeline.example", TRIGGER_SECRET: "test-only", BEFORE: source, AFTER: source,
  REFRESH_MODEL: "openai/gpt-4.1-mini", PROMPT_ID: "matrix-rain", ATTEMPT_ID: "442dd8a26944b68a1dba2de1d6b392b3" };
const id = "7ef4d506587ef6b828329db9d7d4aa9efee8527c";
const ok = value => Response.json(value);

test("single-pair request preserves the authorized instance ID and cannot expand to all prompts", () => {
  const body = buildAdmission(env);
  assert.deepEqual(body.prompts, { "openai/gpt-4.1-mini": ["matrix-rain"] });
  assert.deepEqual(body.refresh, ["openai/gpt-4.1-mini"]);
  assert.equal(createHash("sha256").update(JSON.stringify(body)).digest("hex").slice(0, 40), id);
  for (const field of ["REFRESH_MODEL", "PROMPT_ID", "ATTEMPT_ID"]) assert.throws(() => buildAdmission({ ...env, [field]: "" }));
  assert.throws(() => buildAdmission({ ...env, AFTER: "b".repeat(40) }));
  assert.throws(() => buildAdmission({ ...env, ATTEMPT_ID: "new" }));
});

test("normal push still submits only before/after", () => {
  assert.deepEqual(buildAdmission({ BEFORE: source, AFTER: "b".repeat(40) }), { before: source, after: "b".repeat(40) });
});

test("lost admission response redelivers identical input then observes completion without another POST", async () => {
  const calls = [], logs = [];
  const result = await run(env, { sleep: async () => {}, log: value => logs.push(value), request: async (url, options) => {
    calls.push({ url, ...options });
    if (calls.length === 1) throw Error("lost response");
    if (calls.length === 2) return ok({ id });
    return ok({ status: calls.length === 3 ? "running" : "complete", output: { jobs: 1 } });
  } });
  assert.equal(result.status, "complete");
  assert.equal(calls.filter(call => call.method === "POST").length, 2);
  assert.equal(calls[0].body, calls[1].body);
  assert.equal(calls[2].url, `https://pipeline.example/runs/${id}`);
  assert.equal(calls[0].headers.authorization, "Bearer test-only");
  assert.ok(logs.every(line => !line.includes("test-only")));
});

test("authentication failure stops without retries or polling", async () => {
  let calls = 0;
  await assert.rejects(run(env, { request: async () => { calls++; return new Response("Unauthorized", { status: 401 }); } }), /HTTP 401/);
  assert.equal(calls, 1);
});

test("workflow failure reports failure without starting another generation", async () => {
  let calls = 0;
  await assert.rejects(run(env, { log: () => {}, request: async () => ++calls === 1 ? ok({ id }) : ok({ status: "errored" }) }), /Workflow errored/);
  assert.equal(calls, 2);
});
