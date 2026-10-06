---
title: Rotating icosahedron
category: 3d
tags: [3d, webgl, three.js, animation, generative]
libs: [three.min.js]
---
Build a full-screen 3D scene featuring a rotating icosahedron using the provided Three.js library.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. Use the provided `three.min.js` (global `THREE`) through a plain local script tag; the runner will inline it into the final artifact.

Required behavior:

- Show an icosahedron centered in view, with a material that visibly responds to two point lights of different colors.
- Rotate the object continuously about at least two axes. Independently move the camera slowly around the object while keeping it in view.
- Add a subtle procedural starfield behind the object. Keep lights, object, and stars distinguishable without external textures.
- Provide Pause/Resume and Reset. Pause freezes both object and camera animation; Reset restores their initial transforms.
- Resize the renderer and camera aspect ratio to the viewport. Use only the provided core global THREE library, without additional controls or postprocessing addons.

Verify: observe the object's changing orientation, camera motion, and colored lighting at multiple times. Check pause/resume, reset, and viewport fit.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
