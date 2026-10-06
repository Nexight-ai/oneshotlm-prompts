---
title: Double pendulum
category: physics
tags: [canvas, physics, simulation, chaos, animation]
---
Build a planar double-pendulum simulation on a canvas with a colorful fading trail at the lower bob.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Model two point masses connected by massless rigid rods under gravity, without damping or external driving. Use the coupled equations of motion rather than independent sine-wave animations.
- Use equal masses and rod lengths, gravity of 9.81 in consistent simulation units, initial angles of 120 and -10 degrees measured from downward vertical, and zero initial angular velocities.
- Draw a fixed pivot, both rods and bobs, and a bounded fading trail of the lower bob. Keep both rod lengths constant and the pendulum visible.
- Provide Pause/Resume and Reset. Reset restores the stated initial conditions and clears the trail.
- Use a numerically stable integration scheme and time step so ordinary playback does not explode or freeze.

Verify: Sample the pendulum at several moments to inspect coupled motion, connected rods, and the lower-bob trail. Pause and resume to check the motion control, then reset and confirm that the starting pose and cleared trail return.
