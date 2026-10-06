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

Verify: Toggle a step and start playback. Check that the playhead advances across the grid and responds to a BPM change. Stop and start again, checking that the displayed pattern is retained and the playhead restarts from the first step.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
