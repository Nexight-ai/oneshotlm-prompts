---
title: Lorenz attractor
category: 3d
tags: [3d, webgl, three.js, math, generative]
libs: [three.min.js]
---
Build a 3D Lorenz-attractor visualization using the provided Three.js library.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. Use the provided `three.min.js` (global `THREE`) through a plain local script tag; the runner will inline it into the final artifact.

Required behavior:

- Integrate the Lorenz system with sigma = 10, rho = 28, beta = 8/3, and initial state (0.1, 0, 0). Use a stable numerical time step.
- Draw a luminous-looking, colored trajectory progressively as the system evolves, revealing its two-lobed butterfly shape. Keep trajectory storage bounded; actual bloom postprocessing is optional.
- Frame the full attractor initially. Dragging orbits the camera around it, and the mouse wheel changes camera distance without entering the geometry.
- Provide Pause/Resume and Reset. Pause freezes trajectory growth while camera controls remain usable; Reset clears the trail and restores the initial simulation state.
- Only the core global THREE library is provided. Implement camera interaction without importing unavailable addons.

Verify: Sample trajectory growth, orbit the camera, and check that the existing trail remains connected and visible from the new angle. Pause growth while moving the camera, then reset and check that the trail starts again from the initial state.
