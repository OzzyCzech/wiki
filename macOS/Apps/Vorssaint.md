---
title: Vorssaint
description: Free open-source macOS menu bar app that bundles audio mixing, system monitoring, window management, clipboard history and more.
created: 2026-09-18
updated: 2026-09-18
---

[Vorssaint](https://vorssaint.com) is a single menu bar app that replaces a stack of paid Mac utilities — per-app volume mixing, hardware monitoring, window snapping, clipboard history, text expansion and screen capture all live behind one icon. Written in Swift, GPL-3.0-or-later, and everything runs locally with no account or telemetry.

```bash
brew install --cask vorssaint
```

Features are modular — each one can be installed or removed individually, and settings export/import carries a setup across Macs.

## Audio

- Per-app volume control and mixing, with separate output routing so different apps can play to different destinations
- Output switcher with automatic per-device volume
- Microphone input management and a universal mute
- Blocks Music from auto-playing when headphones connect

## Monitoring and energy

- CPU, GPU, memory and temperature graphs with history, plus battery health and cycle counts
- Optional manual fan control
- Network activity monitor with a built-in speed test
- Configurable alerts on resource thresholds
- Keep Awake timer, per-monitor brightness, XDR panel boost on MacBook Pro, Bluetooth auto-disable during sleep

## Windows and input

- App switcher with live window previews, Dock previews with drag-and-drop
- Snapping to halves, thirds and corners; maximize without creating a new Space
- Quit/close protection for chosen apps
- Text snippet expansion with variables, smooth scrolling, focus-follows-mouse
- Mouse button remapping, keyboard debouncing, key remapping and a Super key on Caps Lock

## Clipboard and files

- Local clipboard history covering text, images and files, with optional automatic clearing
- Shelf for parking files mid-workflow, plus Finder keyboard file moving
- URL cleaner that strips tracking parameters
- Disk image auto-installer

## Productivity tools

- **Dynamic Island** — configurable home bar with music, system stats, timer, calendar, shortcuts, a Markdown scratchpad and gestures
- **Command Bar** — universal launcher for apps, files, snippets and calculations
- **Quick Panel**, **Quick Toggles** and a **Radial Menu** for frequently used tools and one-click system actions
- **Screen capture suite** — screenshots, recordings, text extraction and a color picker
- **Scratchpad** — floating Markdown notes in tabs
- **Camera Mirror** for a pre-call appearance check
- **App Updates**, **Cleaner** and **Uninstaller** for centralized updates and complete app removal
- **Media tools** — local video/image conversion, compression and GIF creation
- **Homebrew Manager** — package management without the terminal

## Privacy and permissions

Permissions are requested only for features actually enabled; unused ones get a notification with a revocation shortcut, and core pieces like the shelf and quick toggles need none. Network access is limited to update checks, the speed test, optional lyric lookup and explicit user actions. Builds are signed with an Apple Developer ID and notarized.

## Requirements

Apple Silicon only, macOS 14 Sonoma or newer (per the [Homebrew cask](https://formulae.brew.sh/cask/vorssaint)). Source and releases live in [vorssaint/vorssaint-utils](https://github.com/vorssaint/vorssaint-utils); `./build.sh --install` builds from a clone, and `./Tools/uninstall.sh` removes everything including settings. Localized into 12+ languages.
