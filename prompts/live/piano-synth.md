---
title: Piano synth
category: audio
tags: [audio, tone.js, music, interactive, ui]
libs: [tone.min.js]
---
Build a playable piano keyboard using the provided Tone.js library.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. Use the provided `tone.min.js` (global `Tone`) through a plain local script tag; the runner will inline it into the final artifact.

Required behavior:

- Display one chromatic octave from C4 through C5, with correctly placed black and white keys and visible note labels.
- Map computer keys A W S E D F T G Y H U J K in order to those 13 notes. Pressing a screen key or its computer key starts the note; releasing it starts the envelope's release phase.
- Use a synthesized voice with an ADSR envelope and support at least three simultaneous notes. Highlight keys while held. Prevent keyboard auto-repeat from creating duplicate sustained voices.
- Release held voices when the pointer is released outside a key or the window loses focus, so notes cannot remain stuck.
- Activate audio through a user gesture and synthesize all sound without audio files. Display the computer-key mapping.

Verify: Play a few notes using the available mouse and keyboard actions. Check note/key labeling, any observable press-and-release highlighting, and the console after audio activation. Briefly inspect the input handlers for matching note-start and note-release behavior.
