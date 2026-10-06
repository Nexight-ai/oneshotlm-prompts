---
title: Animated loader
category: interfaces
tags: [animation, gsap, ui, motion, loader]
libs: [gsap.min.js]
---
Build a looping loading animation using the provided GSAP library.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. Use the provided `gsap.min.js` (global `gsap`) through a plain local script tag; the runner will inline it into the final artifact.

Required behavior:

- On a dark background, show a group of rounded geometric shapes that smoothly change scale, position, and corner radius, plus a row of five dots with staggered motion or opacity.
- Coordinate both elements using a GSAP timeline with smooth easing. The full sequence lasts 3 to 6 seconds and repeats without an abrupt jump or a growing number of animation instances.
- Provide Pause/Resume and Restart controls. Pause freezes the current timeline position; Resume continues from it; Restart returns to the beginning.
- Center the composition and keep it visible at the supplied viewport. Use HTML/CSS or inline SVG; no external assets or paid GSAP plugins are available.
- Choose the palette and detailed choreography freely. No backend loading operation is required.

Verify: Sample the timeline at several moments to inspect shape changes, staggered dot motion, and smooth transitions. Pause and resume to check that animation continues from the paused state, then use Restart and check the starting composition.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
