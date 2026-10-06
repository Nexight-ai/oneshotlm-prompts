---
title: Space Invaders
category: games
tags: [canvas, game, shooter, arcade, retro]
---
Build a playable Space Invaders-style game on a canvas using procedural graphics.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Use Left/Right or A/D to move a cannon along the bottom and Space to fire upward. Display the controls and keep the cannon within the playfield.
- Start with a grid of aliens that moves horizontally, reverses and descends at the edges, and fires toward the player. Player shots remove hit aliens and increase score once.
- Place destructible bunkers between the cannon and aliens. Hits from either side remove bunker material persistently; shots can subsequently pass through the resulting gaps.
- Start with three lives. Enemy shots cost a life with brief protection from repeated damage. Aliens reaching the player zone or zero lives causes Game Over; clearing the aliens shows a win state.
- Provide Restart to restore aliens, bunkers, score, lives, and player position. Bound projectile lifetime and fire rate.

Verify: move and fire, kill an alien, damage a bunker, take a hit, and restart. Check score/lives and the win and loss conditions.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
