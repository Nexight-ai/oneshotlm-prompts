---
title: Contact manager
category: interfaces
tags: [form, validation, storage, interactive]
---
Build a small local contact manager with an editable form and a contact list.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- A contact has a name, email, and optional note. Name is required after trimming and is at most 80 characters; email is required after trimming and must be a valid address under the browser's email-input validation rules; note is at most 200 characters. Show understandable field errors and retain entered values on invalid submission. Do not add or modify a contact on invalid submission.
- Add valid contacts to a visible list. Prevent duplicate emails case-insensitively after trimming, including while editing; a contact can keep its own unchanged email. Render names, emails, and notes as text, never as executable HTML.
- Give every contact Edit and Delete controls. Edit loads that contact into the form and Save updates the same contact without creating a duplicate. Cancel edit leaves the saved contact unchanged and returns to an empty add form. Deleting a contact that is being edited also resets the form safely.
- Persist contacts in localStorage so refreshing the same page keeps them. Preserve notes and each contact's identity when editing or reloading. Start empty when no saved data exists. If saved data is malformed or storage is unavailable, show a clear message and keep the page usable in memory rather than crashing.
- Provide a case-insensitive search across name and email and a visible-contact count. Search updates after add, edit, and delete; clearing it restores the full list. Show an empty state when appropriate.
- Associate each form field with a visible label, support keyboard submission, and make the current add/edit mode clear. No network or backend is needed.

Verify: Try an invalid submission, add a valid contact, edit and save it, cancel another edit, search, and delete. Refresh the same page to check persistence if your browser tools allow it. Report what you checked and what remains unverified.
