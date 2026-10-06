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

Verify: Sample several moments to inspect the object orientation, camera movement, and colored lighting. Pause and check that both motions freeze, then reset and compare the object and camera with their initial poses.
