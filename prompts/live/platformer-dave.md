---
title: Dangerous Dave platformer
category: games
tags: [canvas, game, platformer, interactive, retro]
---
Build a playable tile-based platformer on a canvas in a Dangerous Dave-inspired style.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Provide one completable level with solid platforms, a trophy, an exit, fire and water hazards, and at least one patrolling enemy. Draw everything procedurally.
- Use Left/Right or A/D to move and Space to jump. Display the controls. Apply gravity, landing, and solid-wall collision; jumping is allowed only while grounded.
- The player must collect the trophy before the exit completes the level. Reaching the exit without it gives visible feedback and keeps the level active.
- Touching a hazard or enemy causes a loss state. Reaching the exit with the trophy causes a win state.
- Provide Restart after either outcome and during play. Restart restores the level, trophy, enemies, and player position. Keep the level's route physically reachable.

Verify: Test movement and a jump near the starting area. Check that the player lands on a nearby solid surface and that the trophy and exit are visibly identifiable. Use Restart and check that the initial player and collectible state return.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
