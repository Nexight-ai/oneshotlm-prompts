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

Verify: Drag through the canvas and sample the flow after release. Check that dye follows the drag, continues swirling, and responds to a second drag in another direction. Use Clear, then drag again to check that a fresh flow can start.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
