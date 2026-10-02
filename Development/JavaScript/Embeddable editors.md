---
title: Embeddable editors
description: JavaScript code editors, block editors, WYSIWYG editors and canvas editors for the web.
created: 2023-02-13
updated: 2026-10-02
---

Embeddable **code editors**, **block-style editors**, **rich text (WYSIWYG)** editors and **canvas editors** you can use in web apps.

## Code editors

Embeddable code editors with syntax highlighting, often used in docs, playgrounds, or admin tools.

- **[Monaco Editor](https://microsoft.github.io/monaco-editor/)** — The same editor that powers [VS Code](https://github.com/microsoft/vscode). Full-featured, heavy.
- **[CodeMirror](https://codemirror.net/)** — Versatile code editor for the web. Modular and widely used.
- **[ACE Editor](https://ace.c9.io/)** — High-performance code editor. Mature and customizable.
- **[CodeFlask.js](https://kazzkiq.github.io/CodeFlask/)** — Lightweight code editor for simple embeds.
- **[CodeJar](https://medv.io/codejar/)** — Minimal, dependency-free code editor (~1 KB).

## Block editors

Block-based editors (blocks like paragraph, heading, list, image). Good for structured content and modern CMS UIs.

- **[Editor.js](https://editorjs.io/)** — Block-styled editor with clean JSON output. Free and open source.
- **[MediumEditor](https://yabwe.github.io/medium-editor/)** — Inline editor with a simple toolbar. No blocks, minimal setup.

## Rich text (WYSIWYG) editors

What-you-see-is-what-you-get editors for formatted text and HTML.

- **[TinyMCE](https://www.tiny.cloud/)** — Trusted WYSIWYG editor. Free tier and commercial options.
- **[Quill](https://quilljs.com/)** — Powerful rich text editor with a modular API.
- **[Slate](https://www.slatejs.org/)** — Framework for building custom rich text editors (React).
- **[Draft.js](https://draftjs.org/)** — Rich text editor framework for React by Meta.
- **[CKEditor 5](https://ckeditor.com/ckeditor-5/)** — Modern WYSIWYG editing (open source and commercial).
- **[Froala](https://www.froala.com/wysiwyg-editor)** — Commercial WYSIWYG editor with many features.
- **[Summernote](https://summernote.org/)** — Simple WYSIWYG editor built on Bootstrap.

## Markdown editors

Editors for Markdown with preview, often used in comment forms or docs.

- **[EasyMDE](https://github.com/Ionaru/easy-markdown-editor)** — Simple, embeddable Markdown editor (maintained fork of SimpleMDE).
- **[SimpleMDE](https://simplemde.com/)** — Original embeddable Markdown editor; consider EasyMDE for updates.
- **[Editor (lepture)](https://github.com/lepture/editor)** — Markdown editor with live preview ([demo](https://lab.lepture.com/editor/)).

## Canvas editors

Infinite-canvas editors for whiteboards, diagrams and spatial interfaces.

- **[tldraw](https://tldraw.dev/)** — React SDK for infinite canvas apps, built around an `Editor` class over a reactive record store with signals; custom shapes and tools, multiplayer sync, persistence, cross-tab sync, undo/redo and image export to SVG and PNG. Installs as the `tldraw` npm package, scaffolded with `npm create tldraw`. The free collaborative whiteboard at [tldraw.com](https://www.tldraw.com/) is the same SDK in product form.

  Note the licensing: tldraw is source-available under its [own license](https://github.com/tldraw/tldraw/blob/main/LICENSE.md), not open source. Development environments are free, but production use requires a license key — free for non-commercial hobby projects, paid otherwise — and the SDK ships technical enforcement that validates the key, detects the deployment environment, controls watermark display and may transmit usage data back to tldraw.
