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

Verify: Launch the ball, move the paddle, and inspect the opening bounces. Check that contact changes the ball direction and that a brick hit removes the brick and increases the score. Confirm the paddle stays inside the playfield.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
