---
title: Bouncing balls in a heptagon
category: physics
tags: [canvas, physics, simulation, collision, animation]
featured: 2
---
Build a 2D physics simulation of numbered balls inside a rotating heptagon on a canvas.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Show exactly 20 balls numbered 1 through 20. Initially place them in a compact, non-overlapping arrangement near the enclosure center and let them fall under gravity.
- Rotate the heptagon at a constant rate of one revolution every five seconds. Keep it fully visible.
- Implement ball-ball and ball-wall collision detection yourself, without a physics library. Account for moving-wall velocity in bounce response, and include damping or friction.
- Give each ball angular motion and rotate its number with the ball so spin is visible.
- Choose reasonable sizes and physical constants that keep the simulation stable: balls remain contained and do not persistently overlap or gain unbounded speed.
- Provide Pause/Resume and Reset. Reset restores the initial ball arrangement and wall orientation.

Verify: observe at least ten seconds of motion, including collisions with moving walls. Check that all 20 balls remain contained, their numbers rotate, and pause/resume and reset work.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
