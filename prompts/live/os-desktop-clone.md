---
title: Windows 95 desktop
category: interfaces
tags: [css, ui, dom, retro, interactive]
---
Build a Windows 95-style desktop interface using HTML, CSS, and JavaScript.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Show desktop icons for Notepad and About, a taskbar, a Start button/menu, and a clock that updates to the local time.
- Double-clicking an icon or selecting its Start-menu item opens the corresponding window. Notepad contains an editable text area; About contains a short information panel.
- Windows can be dragged by their title bars, focused by clicking, and closed. The focused window appears in front. Closing and reopening an application must work; retaining Notepad text during the session is optional.
- Each open application appears in the taskbar. Clicking its taskbar entry brings its window to the front. The Start menu opens and closes and dismisses after launching an application.
- Keep title bars reachable within the desktop. Use CSS and inline drawings for the retro chrome and icons; no external assets.

Verify: Open Notepad through the Start menu, enter text, and drag its title bar. Open About and switch focus using a taskbar entry. Check that the selected window comes to the front and that closing a window removes its taskbar entry.

Run the application in the browser and inspect the initial output and console. Use the available browser tools for a brief pass through the representative checks above, focused on readily accessible behavior and the remaining time budget. Fix clear problems you discover and recheck the affected behavior. Save the final file, then briefly report what you actually checked and which behaviors remain unverified. Prioritize the required functionality; visual styling and unspecified implementation details are your choice.
