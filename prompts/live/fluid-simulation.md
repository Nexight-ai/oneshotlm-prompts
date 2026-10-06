---
title: Fluid simulation
category: physics
tags: [webgl, simulation, fluid, interactive, generative]
---
Build an interactive 2D fluid-and-dye simulation on a full-screen canvas.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Maintain a velocity field and a colored dye field. Advect dye through the moving fluid so it forms persistent swirling flow; a collection of independent fading particles is not sufficient.
- Dragging injects dye and momentum in the drag direction. Momentum and dye remain visible after the pointer is released and gradually dissipate. Approximate fluid behavior is acceptable; choose the numerical method and Canvas 2D or WebGL implementation.
- Seed the initial scene with a small amount of colored dye and motion so the simulation is visible on load.
- Provide a color selector, Pause/Resume, and Clear. Clear removes dye and resets velocity; the next drag can start a new flow.
- Bound simulation resolution and work per frame so controls remain responsive at a 1200 by 800 viewport.

Verify: drag in several directions, inspect the flow after release, change color, pause/resume, and clear. Confirm the effect is driven by the evolving field rather than a prerecorded animation.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
