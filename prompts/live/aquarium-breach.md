---
title: Aquarium breach
category: physics
tags: [physics, simulation, fluid, interactive, canvas]
---
Build an interactive 2D aquarium-breach simulation on a canvas.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Initially show an intact glass tank containing water, fish, rocks, plants, and a floating toy. Let the user drag a visible crack vertically on one side below the initial waterline, then press Breach. Provide Reset to restore the same initial scene.
- On Breach, show the panel breaking around the selected opening. Water exits in a gravity-curved jet, and the waterline falls continuously. Outflow weakens as the water level approaches the opening and stops when water no longer reaches it.
- Escaped water forms a spreading puddle constrained by the floor and room walls.
- Model distinct responses to buoyancy, drag, and current: rocks sink, the toy floats, plants bend or drift, and fish initially swim against the current before some are swept through the breach. Movable objects that fit the opening can be carried out by the flow.
- Objects leaving the water transition to gravity-driven motion and collide with the floor. Glass fragments rotate, collide, and experience resistance in water.
- Simplified, internally consistent physics is sufficient; a full computational-fluid-dynamics solver is not required.

Verify: compare low and high cracks from the same reset state; the lower crack must initially produce a stronger jet. Observe the falling waterline and an object leaving the tank, then verify Reset.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
