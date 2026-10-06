---
title: Maze generator & solver
category: data-algo
tags: [canvas, algorithm, maze, animation, visualization]
---
Build a maze generator and solver visualization on a canvas.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Generate a 25 by 15 cell rectangular maze using randomized recursive backtracking. All cells must be reachable, with exactly one simple path between any pair of cells.
- Use the upper-left cell as Start and lower-right as Finish. Draw cell walls clearly and animate generation so carving progress is visible.
- After generation finishes, animate either BFS or A-star exploring the maze, then highlight the complete path from Start to Finish. The path must cross only open passages.
- Provide New Maze and Replay Solver. New Maze cancels the previous animation and generates a fresh maze; Replay Solver uses the existing maze without changing its walls.
- Mark start, finish, exploration, and solution with distinguishable styles and a short legend.

Verify: Inspect maze-carving progress and request New Maze while animation is active. Check that the new generation replaces the previous view cleanly. If the solver starts during inspection, check that its visible steps follow open passages.
