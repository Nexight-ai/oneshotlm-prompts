---
title: Flow-field particles
category: generative
tags: [creative-coding, p5.js, generative, particles, animation]
libs: [p5.min.js]
---
Build a full-screen flow-field particle animation using the provided p5.js library in global or instance mode.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. Use the provided `p5.min.js` (global `p5`) through a plain local script tag; the runner will inline it into the final artifact.

Required behavior:

- Animate at least 2,000 particles, with motion guided by a smoothly varying Perlin-noise vector field. Nearby particles should follow locally coherent directions.
- Leave fading trails and vary particle colors over time. Evolve the field gradually so the pattern changes instead of repeating a short recorded sequence.
- Recycle particles at the canvas boundaries and keep the population bounded. Avoid allocating an ever-growing trail history.
- Provide Pause/Resume and Restart. Restart clears trails and initializes a new particle arrangement.
- Fit the viewport and keep controls responsive at 1200 by 800. Choose the palette, field scale, and particle speed freely.

Verify: Sample the animation at several moments to inspect coherent nearby particle motion, fading trails, and changing colors. Pause and resume, then use Restart and check that the trails clear and a new arrangement appears.
