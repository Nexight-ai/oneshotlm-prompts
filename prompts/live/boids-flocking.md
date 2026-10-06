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

Verify: observe flocking over several moments, move the cursor through a group, pause and resume, and reset. Confirm the boid count remains 150.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
