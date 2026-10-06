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

Verify: observe both lobes forming, orbit and zoom, pause trajectory growth, and reset. Check that simulated coordinates remain finite and the trail does not grow without bound.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
