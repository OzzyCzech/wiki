---
title: Photo and video
description: Image viewers, photo editors, video players, and screen recorders for macOS.
created: 2026-04-01
updated: 2026-04-14
---

Apps for viewing, editing, and recording photos and video on macOS.

## Image viewers

- **[FlowVision](https://flowvision.app/)** — image viewer and organizer with a grid layout and folder navigation
- **[qView](https://interversehq.com/qview/)** — minimalist open-source image viewer with no sidebars or toolbars

## Image editing

- **[Affinity Suite](https://www.affinity.studio)** — vector design (Designer), photo editing (Photo), and desktop publishing (Publisher) tools
- **[Pixelmator Pro](https://www.pixelmator.com/pro/)** — native macOS image editor with ML-powered tools and a layer-based workflow
- **[Procreate](https://procreate.art/)** — professional digital illustration app for iPad (not macOS)

## Video players

- **[IINA](https://iina.io/)** — open-source video player for macOS built on mpv; supports modern media formats with a native interface
- **[Elmedia Player](https://www.elmedia-video-player.com/)** — video player for Mac supporting AirPlay streaming and a wide range of formats

## Video editing

- **[DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve/)** — professional video editor with color grading, audio post, and VFX tools; free version available
- **[LumaFusion](https://luma-touch.com/)** — professional multi-track video editor for iPad and iPhone
- **[Final Cut Pro](https://www.apple.com/final-cut-pro/)** — Apple's professional video editor for Mac with a magnetic timeline
- **[iMovie](https://www.apple.com/imovie/)** — Apple's free video editor for Mac with basic trimming, titles, and transitions

## Screen recorders

- **[Kap](https://getkap.co/)** — open-source screen recorder that exports to GIF, MP4, WebM, and APNG
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

macOS Catalina and later support these video codecs: Apple ProRes, AVCHD, DV/DVCPRO, H.264, HEVC, HDV, iFrame, Motion JPEG (OpenDML), MPEG-4 SP, Photo JPEG, XAVC-S.

Container formats: 3GP, AVI, M4V, MOV, MP4. Audio formats: AAC, AIFF, BWF, CAF, MP3, MP4, RF64, WAV.

See [Apple's incompatible media guide](https://support.apple.com/en-us/HT209029) for details.
