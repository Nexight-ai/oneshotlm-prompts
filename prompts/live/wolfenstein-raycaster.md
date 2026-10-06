---
title: Wolfenstein raycaster
category: games
tags: [canvas, raycasting, game, 3d, fps]
---
Build a playable first-person raycasting maze shooter on a canvas in a Wolfenstein-inspired style.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Render a textured grid maze through a raycaster, with perspective wall heights and visible enemies. Generate textures procedurally; do not load external assets.
- Use W/S to move forward/backward, A/D to strafe, Left/Right arrows to turn, and Space to shoot. Display the controls. Mouse turning is optional and must not be required.
- Use solid wall collision and a small level with a reachable exit and at least three enemies. Enemies must be occluded by walls; shots cannot damage an enemy through a wall.
- Give the player health. Enemies can damage the player under a clear attack rule. Show health and remaining enemy count; zero health causes Game Over.
- Defeating all enemies unlocks the exit; reaching it shows a win state. Provide Restart to restore the level, player, enemies, and health.

Verify: Test movement and turning near the starting area, check collision against a nearby wall, and fire to inspect weapon feedback. Sample the scene for stable wall rendering, then use Restart and check the initial viewpoint and health.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
