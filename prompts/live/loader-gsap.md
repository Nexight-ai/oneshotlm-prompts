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

Verify: watch at least two complete loops, then pause, resume, and restart. Check the loop boundary for abrupt changes and confirm both shapes and dots follow the controls.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
