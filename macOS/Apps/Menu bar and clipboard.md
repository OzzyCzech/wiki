---
title: Menu bar and clipboard
description: macOS menu bar management tools, window managers, clipboard history managers, and text selection action bars.
created: 2026-04-01
updated: 2026-11-11
---

Apps for managing the macOS menu bar, controlling window layout, tracking clipboard history, and running quick actions on selected text.

## Menu bar and windows

- **[Supercharge](https://sindresorhus.com/supercharge)** — collection of macOS menu bar enhancements and productivity tweaks by Sindre Sorhus
- **[Vanilla](https://matthewpalmer.net/vanilla/)** — hides menu bar icons to reduce clutter
- **[Ice](https://icemenubar.app/)** — open-source menu bar manager with hiding, section grouping, and custom icon support
- **[KeepingYouAwake](https://keepingyouawake.app/)** — menu bar app that prevents macOS from sleeping on demand
- **[Rectangle](https://rectangleapp.com/)** — window snapping and resizing via keyboard shortcuts or drag-to-edge
- **[LeaderKey](https://github.com/mikker/LeaderKey.app)** — open-source launcher that chains keyboard shortcuts for launching apps and running scripts
- **[Vorssaint](../vorssaint)** — free open-source menu bar app bundling audio mixing, system monitoring, window snapping, clipboard history and text expansion in one icon (Apple Silicon, macOS 14+)

## Clipboard managers

- **[Maccy](https://maccy.app/)** — lightweight open-source clipboard history manager with search
- **[ClipBook](https://clipbook.app/)** — plain-text-only clipboard history with a clean interface
- **[PasteBar](https://www.pastebar.app/)** — clipboard manager with pinned items, collections, and history search
- **[Paste](https://pasteapp.me/)** — clipboard history manager with iCloud sync and visual layout
- **[Supaste](https://www.supaste.com/)** — local-first clipboard and screenshot history manager (macOS Sonoma+); search by app or content type, automatic grouping, sensitive content detection, drag-and-drop from notch shelf; supports text, links, images, files, code, colors, SVG and screenshots; one-time payment, no cloud sync

## Text selection actions

PopClip-style tools that show an action bar for selected text in any app — copy, transform, translate, search, run scripts or send to AI. All of them need the macOS Accessibility permission.

- **[PopClip](https://www.popclip.app/)** — the original selection action bar, developed since 2011 by Pilotmoon Software (macOS 13.5+); appears automatically on text selection; large extension directory with actions in JavaScript/TypeScript, AppleScript or shell, plus no-code URL, key press, Service and Shortcut actions; simple extensions install by selecting a `#popclip` text snippet
- **[OpenClip](https://www.getopenclip.app/)** — free [open-source](https://github.com/ganeshmshetty/openclip) PopClip alternative (AGPL-3.0, macOS 14+, `brew install openclip`); extension store and custom extensions in JavaScript, shell, AppleScript or URL schemes; a shortcut opens a searchable list of actions; optional AI via local Ollama, Apple Intelligence or OpenAI/Anthropic keys; no account or telemetry
- **[ActionClip](https://actionclip.app/)** — native Swift menu-bar app bringing the iPhone text selection menu to the Mac (macOS 15+); built-in actions with pinning, grouping and context-based suggestions; custom actions as JavaScript transforms, AI prompts, shell, AppleScript, URLs or multi-step workflows, generated from a plain-language description by an AI action builder; AI via on-device Apple Intelligence, Ollama or own API keys (OpenAI, Claude, Gemini, OpenRouter, Perplexity)
- **[SwiftBiu](https://www.swiftbiu.com/)** — floating toolbar for text and files (macOS 12+, Windows preview); JavaScript plugins and HTML/CSS/JS web extensions, local OCR, file conversion, clipboard history, gestures and per-app rules; the Mac App Store build limits shell and AppleScript actions due to sandboxing
- **[Selected](https://github.com/sakeven/Selected)** — open-source (GPL-3.0) menu bar toolbar for selected text (macOS 15+); search, translate, speak, open links and addresses, inline calculator; quick input panel when nothing is selected, optional clipboard history; YAML-defined plugins with URL, AI prompt and command actions; AI through an OpenAI key or custom model identifier
- **[TextGO](https://textgo.xylitol.top/)** — [open-source](https://github.com/C5H12O5/TextGO) (GPL-3.0) cross-platform text tool for macOS and Windows built with Tauri; recognizes the type of selected text and runs matching actions; separate rules for hotkey, double-click and drag-select triggers; toolbar or instant execution mode; extensible with regex, ML models, scripts and local or cloud AI; unsigned on macOS, so Accessibility permission must be re-granted after updates
- **[OnText](https://ontext.dev/)** — keyboard-first alternative (macOS 13+); no automatic popup — select text, press the trigger shortcut (F2 by default), then hit the action's assigned key; URL, shell, AppleScript and Shortcuts actions with regex context rules; AI via ChatGPT, Claude or Gemini keys, or local Ollama models
- **[Glyphlow](https://github.com/blindFS/Glyphlow)** — open-source (MIT), purely keyboard-driven take on PopClip; selects text via hint keys from UI elements or VisionKit OCR, including text that cannot be selected with a mouse (buttons, games); can edit text fields in an external editor and sync the result back

:::note
On Windows, the closest counterpart is **[SnipDo](https://snipdo-app.com/)** — a free text menu that appears on mouse selection, inspired by PopClip, with its own extension store.
:::
