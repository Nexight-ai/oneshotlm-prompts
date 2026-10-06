---
title: Tetris
category: games
tags: [canvas, game, interactive, arcade, puzzle]
---
Build a playable falling-block Tetris game on a canvas with a 10-column, 20-row visible board.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Include all seven tetrominoes with legal spawn positions. Use Left/Right to move, Up to rotate clockwise, Down to soft-drop, and Space to hard-drop. Show the controls.
- Reject moves and rotations that overlap occupied cells or leave the board. Wall kicks are optional; if unsupported, reject the blocked rotation without changing the piece.
- Lock landed pieces, clear complete rows, move rows above downward, and spawn the next piece. Display score, cleared-line count, level, and a next-piece preview.
- Award 100, 300, 500, or 800 points for clearing one, two, three, or four rows with one piece, multiplied by the current level. Start at level 1 and increase gravity speed every ten cleared lines.
- If a new piece cannot spawn, show Game Over. Provide Pause/Resume and Restart, with restart resetting the board, score, level, and piece sequence state. Hold and ghost pieces are optional.

Verify: Move and rotate the first piece, then hard-drop it. Check that it locks into the board, a new piece spawns, and the next-piece preview advances. Pause and resume, then use Restart and check the cleared board, score, and level.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
