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

Verify: move and jump, land on platforms, approach the exit without the trophy, collect it and complete the level, and check loss and restart.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
