# oneshotlm-prompts

Source of truth for the **prompts** and **models** behind [oneshotlm.com](https://oneshotlm.com) —
where models build the same applications in autonomous sessions with browser tools.

Want a prompt or a model added? Open a pull request. No code required.

## Add a model

Append a row to [`models/backlog.csv`](models/backlog.csv):

```csv
openrouter_id,vendor
mistralai/mistral-large-3,Mistral AI
```

- **`openrouter_id`** (required) — the exact model id on [OpenRouter](https://openrouter.ai/models). This is the only thing that drives a run.
- **`vendor`** (optional) — display group label (e.g. `Mistral AI`). Leave blank to derive it from the id prefix.

Maintainers move rows from `backlog.csv` to `live.csv` once a model is queued to run.

## Add a prompt

Create a file in [`prompts/backlog/`](prompts/backlog/) named `<your-id>.md` (the filename becomes the prompt id, so use `lowercase-with-hyphens`):

```markdown
---
title: Rotating icosahedron
category: 3d
tags: [3d, webgl, three.js, animation, generative]
libs: [three.min.js]
---
Build a full-screen Three.js scene with a rotating icosahedron.

Write `index.html` in the current working directory. Inline your own CSS and
JavaScript. Use the provided `three.min.js` (global THREE) through a local
script tag; do not fetch external resources.

Required behavior:

- Light the object with two differently colored point lights.
- Animate object rotation and camera orbit against a procedural starfield.
- Provide Pause/Resume and Reset controls.

Verify the animation and controls in the browser, inspect the console, and
fix any problems before saving the final file.
```

Frontmatter:

| field | required | notes |
|---|---|---|
| `title` | ✅ | human-readable name shown on the site |
| `category` | ✅ | one of: `games`, `physics`, `generative`, `3d`, `audio`, `interfaces`, `data-algo` |
| `tags` | ✅ | freeform list, used by the tag filter |
| `libs` | – | pre-provided sandbox libraries; omit if none. Allowed: `three.min.js`, `p5.min.js`, `tone.min.js`, `d3.min.js`, `gsap.min.js`, `phaser.min.js` |
| `featured` | – | integer rank — if set, the prompt appears on the homepage at that position |

Everything **below** the frontmatter is the prompt sent verbatim to every model. Keep it self-contained: the model outputs a single HTML file that runs in a sandboxed iframe with no network access, so no external assets, CDNs, or API calls — only the `libs` listed above are available.

Maintainers move prompts from `prompts/backlog/` to `prompts/live/` once they're queued to run.

## Writing and revising prompts

Each live prompt is a standalone build specification: name the application,
require `index.html` in the working directory, identify available libraries,
and list observable behavior, controls, initial/reset states, and a short
verification checklist. Use positive instructions for representative checks
that fit a brief browser pass and the remaining runtime budget. Focus on
accessible interactions and their visible effects. Keep visual choices open
unless they are part of the task. Do not imply requirements through the title
or tags alone.

Keep task-specific verification checks in each prompt. The common browser
inspection, repair, budget, and verification-reporting instructions live in
[`shared/agent.js`](https://github.com/Nexight-ai/oneshotlm.com/blob/main/shared/agent.js)
as part of the harness system prompt. The verification checklist asks the
building agent to test its work; it does not add a separate evaluator or rating
step.

Preserve prompt IDs and frontmatter when revising an existing task. The current
pipeline generates added model/prompt pairs, so editing prompt text alone does
not regenerate historical outputs. Future additions use the revised text from
their pinned source commit. Compare runs using their actual prompt and source
revision; results from different specifications are not directly equivalent.


## Run the pipeline manually

The `trigger-generation` GitHub Action dispatches four kinds of runs. Every kind
except additions requires `before` and `after` to be the same exact source
commit. None of them selects prompts by how earlier results turned out. Every
kind except diagnostic performs paid generation with the deployed Worker's
OpenRouter key and opens an artifact PR; the Action never merges it.

- **Additions** (also what a push sends): `before` and `after` only. Runs the
  pairs the source change added, and nothing else.
- **Full refresh of a model:** `refresh_model` plus an explicit 32-character
  lowercase hex `attempt_id`. The model runs every live prompt. Every result is
  published as recorded, failures included, except sessions stopped by an
  external failure, which are withheld for recovery.
- **Recovery of external failures:** `retry_of` set to the parent batch ID (the
  Workflow ID of the run being recovered), plus that run's own inputs repeated
  exactly (`before`, `after`, and `refresh_model`, `attempt_id` and `announce`
  when it had them). Reruns only the pairs the parent recorded as stopped by
  credits, rate limits, a provider or a harness limit, and publishes only those.
  A parent is recovered once; recover later external failures from that
  recovery's batch ID. Batches created before oneshotlm.com PR #136 lack the records this
  needs and are refused.
- **Diagnostic:** `diagnostic` = `true` with `refresh_model` and `attempt_id`,
  optionally `prompt_id` for a single prompt. The pipeline saves the outcome
  and opens no PR; nothing is published. `prompt_id` is accepted only here.
  `announce` and `retry_of` cannot be combined with it.

Set `announce` to `false` for a published run that should not get a What's New
post; leave it blank otherwise. Any other value is rejected. A diagnostic is
not the same as `announce: false`: that only skips the post.

The Action uses the existing `PIPELINE_URL` variable and `ORCH_TRIGGER_SECRET`
secret. It observes refreshes, recoveries and diagnostics through authenticated
`GET /runs/<id>` and reports terminal failures. Reuse all inputs, including the
same attempt ID, for delivery retries. A new attempt ID authorizes another paid
generation. If observation times out or the Action is cancelled, the Cloudflare
execution may continue; inspect that execution before deciding to retry.

## Layout

```
prompts/live/      # actively run
prompts/backlog/   # requested, not yet run
models/live.csv    # actively run
models/backlog.csv # requested, not yet run
```
