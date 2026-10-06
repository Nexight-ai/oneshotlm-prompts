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

Verify: Sample the animation at several moments to inspect independently moving columns, brighter leading glyphs, and fading trails. Pause and resume to check that the image freezes and continues, then use Restart and check that old trails are cleared.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
