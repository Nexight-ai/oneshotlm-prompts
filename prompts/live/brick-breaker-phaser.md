---
title: Brick breaker
category: games
tags: [game, phaser, interactive, canvas, arcade]
libs: [phaser.min.js]
---
Build a playable brick-breaker game using the provided Phaser library.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. Use the provided `phaser.min.js` (global `Phaser`) through a plain local script tag; the runner will inline it into the final artifact.

Required behavior:

- Show a paddle, a ball, and a wall of breakable bricks. Move the paddle with Left/Right or the mouse, keeping it inside the playfield.
- Initially rest the ball on the paddle; Space or a visible Launch control starts it. Bounce off the paddle and playfield walls. Hitting a brick removes it and increases the score once.
- Start with three lives. A ball falling below the paddle costs one life and returns to the launch state if lives remain.
- Clearing all bricks shows a win state; losing all lives shows Game Over. Restart restores all bricks, score, and lives.
- Show the controls and generate all graphics using Phaser Graphics or generated textures. Do not load image or audio assets.

Verify: launch, move the paddle, break bricks, lose a ball, and restart. Confirm that score and lives change only for the corresponding events.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
