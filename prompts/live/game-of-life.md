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

Verify: a three-cell blinker returns to its starting arrangement after two steps, a 2 by 2 block stays unchanged, Clear empties the grid, and dragging paints consistently.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
