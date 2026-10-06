---
title: Top-down alien shooter
category: games
tags: [game, phaser, shooter, interactive, arcade]
libs: [phaser.min.js]
---
Build a playable top-down alien shooter using the provided Phaser library.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. Use the provided `phaser.min.js` (global `Phaser`) through a plain local script tag; the runner will inline it into the final artifact.

Required behavior:

- Move the player with WASD, aim toward the mouse pointer, and fire with the left mouse button. Display the controls on screen.
- Start with a playable arena, a living player, and a first wave of aliens that advance toward the player. Player shots damage aliens; contact with aliens damages the player.
- Display health, score, and wave number. Award points for kills. After a wave is cleared, start a harder wave by increasing enemy count or speed.
- At zero health, stop gameplay and show a game-over state with Restart. Restart restores health, score, and the first wave.
- Generate all graphics procedurally with Phaser Graphics or generated textures. Do not use external image or audio assets.

Verify: Test movement, aiming, and firing in the opening encounter. Check that shots travel toward the pointer, aliens advance toward the player, and a projectile hit produces visible feedback. Reload and check the initial health, score, and wave.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
