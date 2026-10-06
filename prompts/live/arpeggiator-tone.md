---
title: Arpeggiator pad
category: audio
tags: [audio, tone.js, music, interactive, generative]
libs: [tone.min.js]
---
Build a pentatonic synthesizer pad grid and arpeggiator using the provided Tone.js library.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. Use the provided `tone.min.js` (global `Tone`) through a plain local script tag; the runner will inline it into the final artifact.

Required behavior:

- Show ten labeled pads for two octaves of a C-major pentatonic scale. Clicking a pad plays its note through a synthesized voice with reverb and visibly marks the active pad.
- Provide a separate sequence-selection toggle for each pad. Start with a nonempty selection. The arpeggiator repeatedly plays selected notes in ascending pitch order, one note per eighth-note step.
- Provide Play, Stop, and a tempo control from 60 to 180 BPM. Tempo and selection changes take effect during playback. An empty selection produces no new notes.
- Activate audio through a user gesture. Stop prevents new arpeggiator notes, allowing existing release and reverb tails to decay. Repeated Play must not create overlapping schedulers.
- Synthesize every sound; do not load audio files.

Verify: Click a pad and check its active feedback. Start the arpeggiator, change one selected note and the tempo, and check that the visible sequence responds. Stop playback and inspect the console for audio-initialization or scheduling errors.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
