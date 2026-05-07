---
title: Photo and video
description: Image viewers, photo editors, video players, and screen recorders for macOS.
created: 2026-04-01
updated: 2026-05-06
---

Apps for viewing, editing, and recording photos and video on macOS.

## Image viewers

- **[FlowVision](https://flowvision.app/)** — image viewer and organizer with a grid layout and folder navigation
- **[qView](https://interversehq.com/qview/)** — minimalist open-source image viewer with no sidebars or toolbars

## Image editing

- **[Affinity](https://affinity.serif.com/)** — free professional creative app from Canva combining vector design, photo editing, and page layout tools
- **[Pixelmator Pro](https://www.pixelmator.com/pro/)** — Apple image editor for Mac and iPad with AI-assisted tools, layer-based editing, and Apple Creator Studio integration
- **[Procreate](https://procreate.art/)** — professional digital illustration app for iPad (not macOS)

## Video players

- **[IINA](https://iina.io/)** — open-source video player for macOS built on mpv; supports modern media formats with a native interface
- **[Elmedia Player](https://www.elmedia-video-player.com/)** — video player for Mac supporting AirPlay streaming and a wide range of formats

## Video editing

- **[DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve/)** — professional video editor with color grading, audio post, and VFX tools; free version available
- **[LumaFusion](https://luma-touch.com/)** — touch-first multi-track video editor for iPad, iPhone, Apple Silicon Macs, Android, and Chromebook
- **[Final Cut Pro](https://www.apple.com/final-cut-pro/)** — Apple's professional video editor for Mac with a magnetic timeline
- **[iMovie](https://www.apple.com/imovie/)** — Apple's free video editor for Mac with basic trimming, titles, and transitions

## Screen recorders

- **[Kap](https://getkap.co/)** — older open-source screen recorder that exports to GIF, MP4, WebM, and APNG; check current macOS compatibility before relying on it
- **[Screen Studio](https://www.screen.studio/)** — screen recording app with automatic zoom, cursor effects, and background styling
- **[MacShot](https://macshot.io/)** — free, open-source screenshot and recording tool with annotation, OCR, scroll capture, and cloud upload; GPLv3

## FFmpeg and Apple format compatibility

To export H.264 video compatible with iMovie and Apple devices, add `-pix_fmt yuv420p`:

```shell
ffmpeg -i input.avi -pix_fmt yuv420p output.mp4
```

For ProRes output (supported in iMovie 10+):

```shell
ffmpeg -i input.avi -c:v prores -c:a pcm_s16le output.mov
```

For Apple-native workflows, prefer common MP4/MOV exports with H.264, HEVC, or Apple ProRes. Older or specialized codecs may require conversion or a third-party player.

See [Apple's media compatibility guide](https://support.apple.com/en-is/102644) for current troubleshooting guidance.
