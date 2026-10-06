---
title: L-system tree
category: generative
tags: [creative-coding, p5.js, generative, fractal, animation]
libs: [p5.min.js]
---
Build an animated L-system tree using the provided p5.js library.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. Use the provided `p5.min.js` (global `p5`) through a plain local script tag; the runner will inline it into the final artifact.

Required behavior:

- Define an axiom, explicit production rules, and an angle for a branching L-system. Expand the grammar and interpret it to draw a connected trunk and branches; an unrelated random-line drawing is not sufficient.
- Show progressive growth from the trunk toward branch tips. Once grown, the tree sways gently in the wind while child branches remain attached to their parents.
- Provide a generation control from 1 to 5 and Regrow. Changing generation or pressing Regrow restarts growth using the same chosen grammar.
- Bound grammar expansion and keep the whole tree visible at every supported generation.
- Use procedural graphics. Choose branch styling, leaves, colors, and the particular branching grammar freely.

Verify: compare at least two generation levels, replay growth, and inspect the completed tree at multiple times to confirm connected branches and visible wind motion.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
