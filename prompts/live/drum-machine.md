---
title: Drum machine
category: audio
tags: [audio, web-audio, interactive, music, ui]
---
Build a 16-step drum sequencer using the Web Audio API.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Show four labeled rows for kick, snare, hi-hat, and clap, each with 16 independently toggleable steps. Start with a simple audible pattern.
- Treat the 16 steps as one bar of sixteenth notes in 4/4 time. Provide Play, Stop, Clear, and a BPM control from 60 to 180.
- During playback, highlight the current step and synthesize the enabled drum voices. Editing steps or BPM must affect playback without creating duplicate sequences.
- Stop cancels future hits and resets the playhead to the first step. Clear disables all steps. Starting again uses the currently displayed pattern.
- Unlock audio through a user gesture and synthesize distinct percussion sounds from oscillators/noise and envelopes; do not load audio files.

Verify: toggle steps, play, change BPM, clear the pattern, stop, and restart. Check scheduling and playhead behavior; report any sound properties your tools cannot verify.

Use the available browser tools to inspect the running application and console, exercise the checks above, and fix problems you find. Save the final file, then briefly report what you verified and any limitations you could not verify. Prioritize the required behavior; visual styling and implementation details not specified above are your choice.
