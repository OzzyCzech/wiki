---
title: Utilities
description: macOS utility apps for system optimization, file automation, app management, and text input.
created: 2026-04-01
updated: 2026-11-25
---

Miscellaneous macOS utilities for managing apps, files, and system behavior, plus text-input helpers like dictation and OCR.

- **[Applite](https://aerolite.dev/applite/index.html)** — GUI front-end for Homebrew Cask; browse, install, and update third-party apps
- **[PureMac](https://github.com/momenbasel/PureMac)** — free, open-source (MIT) app manager and system cleaner; heuristic file matching for complete app removal, cache cleanup, Xcode artifact removal; SwiftUI, macOS 13+
- **[Mole](https://github.com/tw93/mole)** — open-source (MIT) shell-based CLI that bundles CleanMyMac/AppCleaner/DaisyDisk/iStat-style features in one binary (`mo` command): deep cache cleanup, smart app uninstaller with leftover removal, disk analyzer with TUI, live CPU/GPU/memory dashboard, project build-artifact purge; `--dry-run` previews destructive actions
- **[Sensei](https://cindori.com/sensei)** — Mac performance and maintenance tool with disk cleaner, app uninstaller, and hardware monitor
- **[ImageOptim](https://imageoptim.com/mac)** — open-source image compression tool that strips metadata and reduces file size losslessly
- **[Clop](https://lowtechguys.com/clop/)** — on-device optimizer for images, videos, PDFs and audio (macOS 14+); automatically compresses clipboard images and screen recordings, with drag-and-drop optimization, format conversion, resizing, cropping and target file-size limits; pipelines automate actions for the clipboard, watched folders and drop zones. Integrates with Dropshare and file shelf apps, with a CLI for automation; batch mode and an MCP server for AI agents are Pro features (accessed 2026-11-24).
- **[Ejectify](https://ejectify.app/)** — automatically ejects external drives when your Mac sleeps to prevent "disk not ejected properly" errors
- **[Hazel](https://www.noodlesoft.com/)** — rule-based file organization automation; watches folders and applies actions on matching files
- **[Forel](https://forel-app.github.io/)** — open-source Hazel alternative for macOS 14+; watches folders and applies rules to move, copy, rename, tag, label, trash or unpack files, with document/PDF text matching, custom scripts, Apple Shortcuts, dry-run previews, history and undo. Processing stays on-device; Free allows 2 watched folders and 300 processed files per month with unlimited rules, while Pro removes those limits and adds local OCR and imports into Photos, Music and TV (accessed 2026-11-24).
- **[Open Screen](https://openscreen.vercel.app/)** — share your Mac screen to a phone or tablet over the local network via a browser
- **[Wispr Flow](https://wisprflow.ai/)** — AI voice dictation that transcribes speech into edited text in any app; works from intent rather than word-for-word, so it drops filler, resolves mid-sentence corrections and punctuates on its own; learns personal vocabulary and snippets, supports 100+ languages with auto-detection, and runs on macOS, Windows, iOS and Android
- **[Willow Voice](https://willowvoice.com/)** — AI dictation for macOS, Windows, and iPhone; inserts speech as text into the active app, removes filler words and adds punctuation, learns personal vocabulary, and offers Willow Scribe for turning spoken instructions into polished writing (accessed 2026-10-06)
- **[Handy](https://handy.computer/)** — free, open-source speech-to-text app that transcribes locally without sending audio to the cloud; press a configurable keyboard shortcut, speak, and have the transcription pasted into the active text field. Supports both hold-to-talk and press-to-start/press-to-stop modes (accessed 2026-11-24).
- **[Uttero](https://danielgamrot.cz/nastroje/uttero/)** — free dictation utility for macOS 14+ from Czech developer [Daniel Gamrot](https://danielgamrot.cz/); hold a key, speak, and the text lands straight in the active app; transcribes locally via WhisperKit or streams in real time through Soniox, then has Claude or GPT fix punctuation and adjust the wording to context
- **[Field Theory](https://www.fieldtheory.dev/)** — clipboard-based context capture for AI workflows on Apple Silicon; offline voice transcription via Parakeet, screenshot annotation, stacking of images and markdown, and portable commands that work across Claude, ChatGPT, and Cursor
- **[mac-ocr](https://github.com/privatenumber/mac-ocr)** — CLI that reads text from images and PDFs and builds searchable PDFs using Apple's Vision framework; runs fully on-device (nothing uploaded), installs via npm, and ships an agent skill so AI agents can OCR locally instead of spending vision tokens

## System monitoring

- **[Stats](https://github.com/exelban/stats)** — menu bar system monitor for CPU, memory, disks, network activity, and sensors
- **[eul](https://github.com/gao-sun/eul)** — lightweight system status monitor written in SwiftUI
- **[Sloth](https://sveinbjorn.org/sloth)** — shows open files and sockets by process to identify which apps are using them

## Displays and audio

- **[MonitorControl](https://github.com/MonitorControl/MonitorControl)** — controls external display brightness and volume with keyboard keys or custom shortcuts
- **[Lunar](https://github.com/alin23/Lunar)** — adaptive brightness control for external monitors
- **[Background Music](https://github.com/kyleneideck/BackgroundMusic)** — per-app volume control, automatic music pausing, and system audio recording

## Automation and input

- **[Hammerspoon](https://github.com/Hammerspoon/hammerspoon)** — automates the macOS desktop through Lua scripts and system APIs
- **[Karabiner-Elements](https://github.com/pqrs-org/Karabiner-Elements)** — customizes keyboard mappings and complex key combinations
- **[LinearMouse](https://github.com/linearmouse/linearmouse)** — adjusts mouse and trackpad pointer speed, acceleration, and scrolling
- **[Vimac](https://github.com/nchudleigh/vimac)** — keyboard-driven navigation of macOS interface elements; predecessor to Homerow
- **[Easydict](https://github.com/tisfeng/Easydict)** — dictionary and translation app with screenshot OCR and multiple translation services

## Virtualization and iOS apps

- **[UTM](https://github.com/utmapp/UTM)** — runs virtual machines on macOS using QEMU and Apple virtualization technologies
- **[VirtualBuddy](https://github.com/insidegui/VirtualBuddy)** — graphical app for running macOS virtual machines on Apple Silicon
- **[PlayCover](https://github.com/PlayCover/PlayCover)** — runs iOS apps and games on Apple Silicon Macs with keyboard, mouse, and controller support

## macOS installers and developer videos

- **[Mist](https://github.com/ninxsoft/Mist)** — downloads macOS installers and firmware images
- **[WWDC](https://github.com/insidegui/WWDC)** — unofficial macOS app for browsing and watching Apple developer conference videos

## Notes and to-dos

- **[Cue](https://www.usecue.today/)** — free, [open-source](https://github.com/zlwaterfield/cue) (MIT) daily notes and to-dos for Mac (Apple silicon) and iPhone; organizes text, nested bullets and tasks by day, with keyboard shortcuts and moving unfinished items to tomorrow; works offline without an account, offers optional free sync, Markdown/JSON export and MCP access for assistants when sync is enabled (accessed 2026-11-19)

## Curated app lists

- **[my-mac-os by nikitavoloboev](https://github.com/nikitavoloboev/my-mac-os)** — personal macOS setup with apps, tools, and Alfred workflows
- **[my-mac-os by obahareth](https://github.com/obahareth/my-mac-os)** — another curated macOS setup with annotated app picks
- **[awesome-mac](https://github.com/jaywcjlove/awesome-mac)** — community-curated list of macOS apps and tools organized by category
