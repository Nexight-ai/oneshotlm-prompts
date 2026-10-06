---
title: Boids flocking
category: physics
tags: [canvas, simulation, generative, interactive, animation]
---
Build a full-screen canvas flocking simulation with 150 boids drawn as oriented triangles.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Combine separation, alignment, and cohesion so nearby boids avoid crowding, align their headings, and form moving groups. Triangles point in their direction of travel.
- Use bounded speed and steering so motion changes smoothly instead of teleporting. Wrap boids across screen edges.
- Boids within a visible or documented cursor-influence radius steer away from the pointer. They resume flocking after the pointer moves away.
- Provide Pause/Resume and Reset. Pause freezes simulation state; Reset restores a fresh population of 150 boids.
- Fit the canvas to the viewport and keep the population and controls usable after resizing.

Verify: Sample the flock at several moments to check coordinated movement and triangles pointing along their travel direction. Try the cursor interaction with available pointer actions, then pause and resume to check that the flock freezes and continues.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
