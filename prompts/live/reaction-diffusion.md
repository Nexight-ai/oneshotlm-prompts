---
title: Reaction-diffusion
category: physics
tags: [webgl, simulation, generative, reaction-diffusion, aesthetic]
---
Build a Gray-Scott reaction-diffusion simulation on a canvas.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Maintain two chemical concentration fields, U and V, with diffusion and the Gray-Scott reaction, feed, and removal terms. Evolve these fields rather than displaying a prerecorded pattern.
- Use a square simulation grid with wrapping boundaries. Choose stable time and spatial steps with parameters Du = 0.16, Dv = 0.08, feed = 0.035, and kill = 0.062 in simulation units.
- Initially fill the field with U = 1 and V = 0, then seed a small central region with V and reduced U. Map concentrations to contrasting colors so evolving organic patterns are visible.
- Clicking or dragging adds V and reduces U near the pointer. Provide Pause/Resume and Reset; Reset restores the initial fields and seed.
- Choose Canvas 2D or WebGL, and bound grid resolution and work per frame to keep interaction responsive.

Verify: Sample early field evolution, then seed a separate region with the pointer. Check that the added region affects the following frames. Pause and resume, then reset and compare the restored central seed with the initial scene.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
