import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { buildAdmission, run } from "./trigger-generation.ts";

const source = "1597d8edc0da73343d59f435bd7c6852a9fb35fc";
const env = { PIPELINE_URL: "https://pipeline.example", TRIGGER_SECRET: "test-only", BEFORE: source, AFTER: source,
  REFRESH_MODEL: "openai/gpt-4.1-mini", PROMPT_ID: "matrix-rain", ATTEMPT_ID: "442dd8a26944b68a1dba2de1d6b392b3" };
const id = "7ef4d506587ef6b828329db9d7d4aa9efee8527c";
const ok = value => Response.json(value);

const refresh = { ...env, PROMPT_ID: "" };
const hashOf = body => createHash("sha256").update(JSON.stringify(body)).digest("hex").slice(0, 40);

test("a refresh covers every live prompt; a prompt selection is accepted only for a diagnostic run", () => {
  assert.deepEqual(buildAdmission(refresh), { before: source, after: source, refresh: ["openai/gpt-4.1-mini"], attempt: env.ATTEMPT_ID });
  assert.throws(() => buildAdmission(env), /only for diagnostic runs/);
  for (const field of ["ATTEMPT_ID"]) assert.throws(() => buildAdmission({ ...refresh, [field]: "" }), /attempt ID/);
  assert.throws(() => buildAdmission({ ...refresh, AFTER: "b".repeat(40) }), /identical/);
  assert.throws(() => buildAdmission({ ...refresh, ATTEMPT_ID: "new" }));
  assert.throws(() => buildAdmission({ ...refresh, REFRESH_MODEL: "", BEFORE: source, AFTER: "b".repeat(40) }), /attempt_id requires refresh_model/);
});

test("a diagnostic run keeps the earlier single-pair body plus diagnostic: true, and never announces or retries", () => {
  const body = buildAdmission({ ...env, DIAGNOSTIC: "true" });
  assert.deepEqual(body, { before: source, after: source, refresh: ["openai/gpt-4.1-mini"], attempt: env.ATTEMPT_ID, prompts: { "openai/gpt-4.1-mini": ["matrix-rain"] }, diagnostic: true });
  // The Worker rebuilds its input in this order before hashing the admission ID.
  assert.deepEqual(Object.keys(body), ["before", "after", "refresh", "attempt", "prompts", "diagnostic"]);
  assert.notEqual(hashOf(body), id, "a diagnostic is a different admission from the old published single-pair run");
  assert.deepEqual(buildAdmission({ ...refresh, DIAGNOSTIC: "true" }).diagnostic, true);
  for (const extra of [{ ANNOUNCE: "false" }, { RETRY_OF: "c".repeat(40) }, { REFRESH_MODEL: "", ATTEMPT_ID: "" }]) assert.throws(() => buildAdmission({ ...env, DIAGNOSTIC: "true", ...extra }));
  for (const value of ["false", "True", "1"]) assert.throws(() => buildAdmission({ ...env, DIAGNOSTIC: value }), /diagnostic/);
});

test("a recovery repeats the parent's inputs and adds retry_of", () => {
  const parent = buildAdmission({ ...refresh, ANNOUNCE: "false" });
  const recovery = buildAdmission({ ...refresh, ANNOUNCE: "false", RETRY_OF: "c".repeat(40) });
  assert.deepEqual(recovery, { ...parent, retryOf: "c".repeat(40) });
  assert.deepEqual(Object.keys(recovery), ["before", "after", "refresh", "retryOf", "attempt", "announce"]);
  // an additions parent (a push) is recovered with its own before/after
  assert.deepEqual(buildAdmission({ BEFORE: source, AFTER: "b".repeat(40), RETRY_OF: "c".repeat(40) }), { before: source, after: "b".repeat(40), retryOf: "c".repeat(40) });
  assert.throws(() => buildAdmission({ ...refresh, RETRY_OF: "short" }), /retry_of/);
});

test("a recovery may opt in to rounds: all three policy inputs, with retry_of, within the Worker's limits; the policy is hashed last", () => {
  const recovery = { ...refresh, ANNOUNCE: "false", RETRY_OF: "c".repeat(40) };
  const policy = { RECOVERY_ROUNDS: "3", RECOVERY_MAX_USD: "1.5", RECOVERY_SESSION_USD: "0.1" };
  const body = buildAdmission({ ...recovery, ...policy });
  assert.deepEqual(body, { ...buildAdmission(recovery), recoveryPolicy: { rounds: 3, maxUsd: 1.5, sessionUsd: 0.1 } });
  assert.deepEqual(Object.keys(body), ["before", "after", "refresh", "retryOf", "attempt", "announce", "recoveryPolicy"]);
  assert.deepEqual(Object.keys(body.recoveryPolicy), ["rounds", "maxUsd", "sessionUsd"]);
  assert.notEqual(hashOf(body), hashOf(buildAdmission(recovery)), "a policy recovery is its own admission");
  assert.throws(() => buildAdmission({ ...refresh, ...policy }), /needs retry_of/);
  for (const partial of [{ RECOVERY_ROUNDS: "2" }, { RECOVERY_MAX_USD: "1", RECOVERY_SESSION_USD: "0.1" }]) assert.throws(() => buildAdmission({ ...recovery, ...partial }), /go together/);
  for (const bad of [{ RECOVERY_ROUNDS: "4" }, { RECOVERY_ROUNDS: "0" }, { RECOVERY_ROUNDS: "1.5" }, { RECOVERY_MAX_USD: "6" }, { RECOVERY_MAX_USD: "0" }, { RECOVERY_MAX_USD: "1e1" },
    { RECOVERY_SESSION_USD: "2" }, { RECOVERY_SESSION_USD: "-0.1" }, { RECOVERY_SESSION_USD: " 0.1" }]) assert.throws(() => buildAdmission({ ...recovery, ...policy, ...bad }), /recovery_/);
});

test("normal push still submits only before/after", () => {
  assert.deepEqual(buildAdmission({ BEFORE: source, AFTER: "b".repeat(40) }), { before: source, after: "b".repeat(40) });
});

test("only an explicit false opts out of the What's New post", () => {
  const quiet = buildAdmission({ ...refresh, ANNOUNCE: "false" });
  assert.deepEqual(quiet, { ...buildAdmission(refresh), announce: false });
  assert.deepEqual(Object.keys(quiet), ["before", "after", "refresh", "attempt", "announce"]);
  assert.equal("announce" in buildAdmission({ ...refresh, ANNOUNCE: "" }), false);
  for (const value of ["true", "False", "0", "no", " false"]) assert.throws(() => buildAdmission({ ...refresh, ANNOUNCE: value }), /announce/);
  assert.deepEqual(buildAdmission({ BEFORE: source, AFTER: "b".repeat(40), ANNOUNCE: "false" }), { before: source, after: "b".repeat(40), announce: false });
});

test("a quiet dispatch sends announce: false on every delivery", async () => {
  const calls = [];
  await run({ ...refresh, ANNOUNCE: "false" }, { sleep: async () => {}, log: () => {}, request: async (url, options) => {
    calls.push(options);
    return ok(options.method === "POST" ? { id } : { status: "complete" });
  } });
  assert.equal(JSON.parse(calls[0].body).announce, false);
});

test("lost admission response redelivers identical input then observes completion without another POST", async () => {
  const calls = [], logs = [];
  const result = await run(refresh, { sleep: async () => {}, log: value => logs.push(value), request: async (url, options) => {
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
  await assert.rejects(run(refresh, { request: async () => { calls++; return new Response("Unauthorized", { status: 401 }); } }), /HTTP 401/);
  assert.equal(calls, 1);
});

test("workflow failure reports failure without starting another generation", async () => {
  let calls = 0;
  await assert.rejects(run(refresh, { log: () => {}, request: async () => ++calls === 1 ? ok({ id }) : ok({ status: "errored" }) }), /Workflow errored/);
  assert.equal(calls, 2);
});

test("a recovery of an additions batch is observed to completion like a refresh", async () => {
  const calls = [];
  await run({ PIPELINE_URL: env.PIPELINE_URL, TRIGGER_SECRET: env.TRIGGER_SECRET, BEFORE: source, AFTER: "b".repeat(40), RETRY_OF: "c".repeat(40) }, { sleep: async () => {}, log: () => {},
    request: async (url, options) => { calls.push(url); return ok(options.method === "POST" ? { id } : { status: "complete" }); } });
  assert.deepEqual(calls, ["https://pipeline.example/run", `https://pipeline.example/runs/${id}`]);
});
