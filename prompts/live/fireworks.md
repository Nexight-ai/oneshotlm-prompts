---
title: Fireworks
category: generative
tags: [canvas, particles, animation, interactive, generative]
---
Build an interactive fireworks display on a full-screen canvas.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Clicking the sky launches a visible shell upward from the bottom of the scene toward the clicked location. The shell then explodes into a radial burst of colored particles.
- Burst particles fall under gravity, fade over time, and are removed after their lifetime. Support several overlapping shells and bursts.
- Launch one demonstration shell automatically on initial load so the effect is visible before interaction; subsequent shells respond to clicks.
- Provide Clear to remove active shells, particles, and trails. Keep controls usable after resizing.
- Use procedural drawing only. Choose the visual design, palette, and trails freely while keeping the launch-to-burst sequence visible.

Verify: inspect the initial launch and burst across multiple moments, click several different locations, wait for particles to fade, and use Clear. Confirm that repeated launches do not accumulate expired particles.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
