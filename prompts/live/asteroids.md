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

Verify: Test rotation, thrust, and firing near the initial spawn. Check that the ship changes heading, gains momentum, and emits moving projectiles. Sample the scene to inspect screen wrapping when an object crosses an edge.
