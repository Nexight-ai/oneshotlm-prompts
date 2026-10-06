---
title: Mandelbrot explorer
category: generative
tags: [canvas, fractal, interactive, visualization, math]
featured: 3
---
Build an interactive Mandelbrot-set explorer on a full-screen canvas.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Compute the Mandelbrot set from complex coordinates and use a smooth escape-time color gradient, with a distinct color for points treated as inside the set.
- Initially show the complete main cardioid and surrounding lobes. Dragging pans the image with the pointer. Mouse-wheel zoom is centered on the complex point under the cursor.
- Recompute the fractal after navigation rather than scaling a static image. Use sufficient iterations to reveal new detail as the user zooms, and keep controls responsive during rendering.
- Provide Reset view to restore the initial bounds. Prevent wheel navigation from scrolling the surrounding page.
- Use Canvas 2D or WebGL and procedural colors; do not load a fractal image.

Verify: Zoom into a recognizable boundary point and check that it stays near the cursor while additional detail is rendered. Pan the view, then use Reset view and compare with the initial framing.
