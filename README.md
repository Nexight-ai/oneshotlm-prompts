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
verification checklist. Keep visual choices open unless they are part of the
task. Do not imply requirements through the title or tags alone. Agents should
report what they verified and any limitations of their tools.

Prompt bodies complement the harness instructions; they do not replace its
runtime budget or browser tools. The verification checklist asks the building
agent to test its work; it does not add a separate evaluator or rating step.

Preserve prompt IDs and frontmatter when revising an existing task. The current
pipeline generates added model/prompt pairs, so editing prompt text alone does
not regenerate historical outputs. Future additions use the revised text from
their pinned source commit. Compare runs using their actual prompt and source
revision; results from different specifications are not directly equivalent.


## Layout

```
prompts/live/      # actively run
prompts/backlog/   # requested, not yet run
models/live.csv    # actively run
models/backlog.csv # requested, not yet run
```
