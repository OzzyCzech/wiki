---
title: Desktop frameworks
description: JavaScript and TypeScript frameworks for building cross-platform native applications.
created: 2024-05-27
updated: 2026-10-11
---

JavaScript frameworks for building cross-platform desktop applications using web technologies.

- **[Tauri](https://tauri.app/)** — Lightweight, secure desktop apps with a Rust backend and any frontend framework; produces small binaries without bundling a browser engine.
- **[Electron](https://www.electronjs.org/)** — Desktop apps built with HTML, CSS, and JavaScript on top of Chromium and Node.js; powers VS Code, Slack, and Discord.
- **[Perry](https://perryts.com/)** — TypeScript-to-native compiler producing standalone executables (typically 2–5 MB) with no runtime dependencies; targets macOS, iOS, iPadOS, Android, Linux, Windows, watchOS, tvOS, WebAssembly, and Web with 25+ native UI widgets; built with Rust, SWC, and LLVM.
- **[tinyjs](https://tinyjs.app/)** — Pairs a [txiki.js](https://txikijs.org/) JavaScript backend with the system webview (WebKit, WebView2, WebKitGTK), so an app ships around 6 MB with no bundled Chromium, no Node, and no Rust toolchain; the backend you write is plain JavaScript with files, sockets, processes, FFI, and built-in SQLite, and it talks to the page over a Unix domain socket in a private temp directory rather than a local port. Hot reload in dev, `build` produces signed `.app` bundles, `publish` produces signed auto-updates that roll back on failure, and per-origin capability gating in `tinyjs.json` makes wrapping a third-party site shippable. [MIT](https://github.com/tarwin/tinyjsapp); macOS 15+ is stable, Windows and Linux are beta. Ships a `SKILL.md` so coding agents can work against its API.
