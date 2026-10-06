---
title: Mario-style platformer
category: games
tags: [game, phaser, platformer, interactive, retro]
libs: [phaser.min.js]
---
Build a playable side-scrolling platformer using the provided Phaser library, with a classic Mario-inspired visual style.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. Use the provided `phaser.min.js` (global `Phaser`) through a plain local script tag; the runner will inline it into the final artifact.

Required behavior:

- Provide one completable scrolling level with solid platforms, gaps, collectible coins, patrolling enemies, and a goal flag.
- Use Left/Right or A/D to run and Space to jump. Display the controls. Apply gravity and platform collision; prevent repeated mid-air jumping.
- Landing on an enemy from above defeats it and bounces the player upward. Side contact or falling into a gap causes a loss state.
- Collecting a coin removes it and increases the displayed count once. Reaching the goal flag shows a win state.
- Keep the camera following the player within level bounds. Provide Restart that resets coins, enemies, player, and camera.
- Generate all graphics using Phaser Graphics or generated textures. Do not load image or audio assets.

Verify: Test running and jumping near the starting area. Check landing on a nearby platform and camera following as the player moves. Use Restart and check that the initial player position, visible coins, and camera position return.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
