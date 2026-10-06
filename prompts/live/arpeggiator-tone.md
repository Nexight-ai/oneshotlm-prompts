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

Verify: click several pads, change the selected notes and tempo during playback, stop, and start again. Check active-pad feedback and audio scheduling; report any audio behavior your tools cannot verify.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
