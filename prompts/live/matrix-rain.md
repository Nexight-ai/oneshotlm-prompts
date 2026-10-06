---
title: Matrix digital rain
category: generative
tags: [canvas, animation, retro, generative, aesthetic]
featured: 4
---
Build an animated Matrix-style digital rain effect on a full-screen black canvas.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Draw multiple independently moving columns of green katakana glyphs, each with a brighter leading character and a fading trail.
- Vary column speed and start position. Recycle columns after they leave the bottom so the effect continues without accumulating off-screen state.
- Provide Pause/Resume and Restart. Pause freezes the animation; Restart resets the columns and clears previous trails.
- Resize the canvas and column layout to fit the viewport without stretching an old screenshot or leaving an uncovered strip.
- Use locally available fonts and procedural drawing; no external fonts or images. Choose glyphs, brightness, and timing freely.

Verify: observe column motion and trailing fade at multiple moments, pause/resume, restart, and check the canvas layout after resizing if the available tools permit it.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
