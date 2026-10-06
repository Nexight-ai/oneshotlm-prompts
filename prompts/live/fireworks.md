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

Verify: Trigger a shell at a chosen location and sample its ascent, burst, and early particle fall. Check that the click affects the launch target and that particles visibly spread and fade. Use Clear and confirm the scene is emptied.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
