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

Verify: identify all eight planets, observe their motion at multiple times, orbit and zoom, pause motion, and reset the view. Distinguish actual planetary orbit from camera movement.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
