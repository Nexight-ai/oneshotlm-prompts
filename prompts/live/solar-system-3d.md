---
title: 3D solar system
category: 3d
tags: [3d, webgl, three.js, simulation, animation]
libs: [three.min.js]
---
Build a 3D solar-system visualization using the provided Three.js library.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. Use the provided `three.min.js` (global `THREE`) through a plain local script tag; the runner will inline it into the final artifact.

Required behavior:

- Show the Sun and all eight planets, with distinguishable colors, readable labels, and orbital paths against a procedural starfield.
- Animate planets orbiting the Sun at different speeds. Use schematic sizes and distances for visibility; scientific scale accuracy is not required. Inner planets should generally orbit faster than outer planets.
- Initially frame the complete system. Dragging orbits the camera around the Sun, and the mouse wheel changes camera distance within usable bounds.
- Provide Pause/Resume and Reset view. Pause freezes planetary motion while leaving camera controls usable; Reset view restores the initial camera framing.
- Generate materials and geometry procedurally. Only core global THREE is available; do not import additional controls or texture files.

Verify: Inspect the initial planet labels and sample orbital motion. Orbit the camera and check that the system stays visible. Pause the simulation while adjusting the camera, then use Reset view and compare the initial framing.
