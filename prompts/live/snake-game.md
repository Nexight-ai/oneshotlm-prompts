---
title: Snake
category: games
tags: [canvas, game, interactive, arcade, retro]
---
Build a playable Snake game on a canvas with a 20 by 20 cell board.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Use arrow keys to turn a snake that advances one cell at a time. Ignore a direction that would immediately reverse into its own neck, including rapid inputs before the next movement step.
- Place one food item in an unoccupied cell. Eating it grows the snake by one segment, increases the score, and spawns new food in another unoccupied cell.
- Use solid board boundaries: hitting a wall or the snake's body ends the game. Moving into a tail cell that vacates on that same non-growing step is allowed.
- Provide Start, Pause/Resume, and Restart. Restart resets snake length, direction, score, food, and game state. Filling the board shows a win state instead of trying to place impossible food.
- Display the controls and score. Prevent arrow keys from scrolling the page.

Verify: start, turn, eat food, attempt an immediate reversal, pause/resume, collide, and restart. Check that food never appears inside the snake.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
