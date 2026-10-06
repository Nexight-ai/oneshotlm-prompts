---
title: Rubik's Cube
category: 3d
tags: [3d, webgl, three.js, game, interactive]
libs: [three.min.js]
---
Build an interactive 3D 3 by 3 Rubik's Cube using the provided Three.js library.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. Use the provided `three.min.js` (global `THREE`) through a plain local script tag; the runner will inline it into the final artifact.

Required behavior:

- Start solved, with six distinct face colors and visible cubie boundaries. Preserve cubie and sticker state through moves; recoloring a static cube is not sufficient.
- Provide visible buttons for U, D, L, R, F, B quarter turns and their inverses. Animate each move and queue or disable further moves until it completes so state is not corrupted.
- Dragging the background orbits the camera without turning a face. Keep the cube fully visible initially and support bounded wheel zoom.
- Provide Scramble, applying a sequence of legal turns, and Reset to restore the solved cube and initial camera.
- Only core global THREE is provided; implement camera controls without importing unavailable addons. A solver is not required.

Verify: Turn one face and apply its inverse, checking that the visible stickers return to their starting arrangement. Orbit the camera to inspect the cube from another angle, then use Reset and check the solved appearance and initial framing.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
