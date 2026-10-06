---
title: Asteroids
category: games
tags: [canvas, game, shooter, arcade, vector]
---
Build a playable Asteroids-style game on a canvas using procedural vector graphics.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Use Left/Right to rotate the ship, Up to thrust, and Space to fire. Show the controls. The ship retains momentum and wraps around every screen edge; asteroids also wrap.
- Spawn moving large asteroids. A bullet hit splits a large asteroid into smaller pieces; hitting a smallest piece removes it. Hits increase the score.
- Start with three lives. A ship-asteroid collision removes one life, respawns the ship, and briefly protects it from immediate repeated damage.
- Clearing all asteroids starts another wave. Losing all lives shows Game Over and a Restart control that resets score, lives, and the arena.
- Keep projectile lifetime bounded and prevent gameplay keys from scrolling the page.

Verify: rotate, thrust, fire, observe asteroid splitting and score changes, and exercise life loss and restart.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
