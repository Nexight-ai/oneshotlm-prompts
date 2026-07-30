# oneshotlm-prompts

Source of truth for the **prompts** and **models** behind [oneshotlm.com](https://oneshotlm.com) —
where many LLMs each get one shot at building the same thing.

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
Using the pre-provided three.min.js (global THREE), render a full-screen scene
with a rotating icosahedron lit by two colored point lights, orbit-style
auto-rotation, and a subtle starfield background.
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

## Layout

```
prompts/live/      # actively run
prompts/backlog/   # requested, not yet run
models/live.csv    # actively run
models/backlog.csv # requested, not yet run
```
