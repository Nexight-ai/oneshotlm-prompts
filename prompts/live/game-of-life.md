---
title: Conway's Game of Life
category: physics
tags: [canvas, cellular-automata, simulation, interactive, generative]
---
Build Conway's Game of Life on a canvas with a 60 by 40 grid and finite, non-wrapping boundaries.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Apply the standard rules simultaneously: a live cell survives with two or three live neighbors, and a dead cell becomes live with exactly three. Treat cells outside the grid as dead.
- Start paused with a visible blinker pattern. Provide Play/Pause, Step, Randomize, and Clear, plus a generation counter.
- While paused, clicking toggles a cell. On a drag, choose painting alive or dead from the first cell and apply that same state to each visited cell, without repeatedly toggling it.
- Step advances exactly one generation while paused. Randomize and Clear leave the simulation paused and reset the generation counter; Clear removes all live cells.
- Fit the grid and controls within the viewport while keeping cells distinguishable.

Verify: Step the initial blinker twice and compare its alternating arrangements. Paint a short stroke while paused and check consistent cell painting, then use Clear and confirm the grid and generation counter reset.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
