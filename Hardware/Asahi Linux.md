---
title: Asahi Linux
description: Linux on Apple Silicon Macs — what the reverse-engineered port supports, which chips work, and how to install Fedora Asahi Remix.
created: 2026-09-18
updated: 2026-09-18
---

[Asahi Linux](https://asahilinux.org/) is a reverse-engineering effort that brings Linux to Apple Silicon Macs. Apple publishes no documentation for these SoCs, so the project writes drivers from scratch and upstreams them into the mainline kernel; each feature's progress is tracked per chip generation in the [feature support tables](https://asahilinux.org/docs/platform/feature-support/overview/).

## Fedora Asahi Remix

The supported distribution is [Fedora Asahi Remix](https://asahilinux.org/fedora/), a joint effort with the Fedora project. It ships KDE Plasma as the flagship desktop, with GNOME, Minimal and Server images as alternatives. Installation runs from macOS and sets up a dual boot — macOS stays on the machine:

```bash
curl https://alx.sh | sh
```

## Graphics

The GPU driver is conformant and certified for OpenGL 4.6, OpenGL ES 3.2, OpenCL 3.0 and Vulkan 1.4 — a notable result given the hardware is undocumented and the same APIs are not all exposed by macOS itself.

## What works and what does not

Supported chips are M1, M2 and M3, including Pro and Max variants. M3 Ultra is not supported, and M4 machines are not covered by the Remix device list — work on that generation is tracked in the docs but has not landed.

Across all machines these are still missing:

- **USB-C / DisplayPort external displays** — HDMI works on the machines that have a port (14" and 16" MacBook Pro, Mac mini, Mac Studio, Mac Pro)
- **Thunderbolt / USB4**
- **Touch ID** on laptops

Otherwise the coverage is broad: internal display (including local dimming on 14" and 16" MacBook Pro), backlit keyboard, trackpad, Touch Bar on 13" models, speakers, microphone, camera, headset jack, MagSafe, SD card, Wi-Fi, Bluetooth, Ethernet, and on the Mac Pro also AHCI/SATA and internal PCIe — though not GPU cards.

:::caution
Displays are the sharpest limitation. On a MacBook you get the internal panel and HDMI where present; docks and USB-C monitors do not work. VRR/ProMotion and HDR are not supported either.
:::

The iMac is the weakest target — its speakers and microphone do not work — and the Mac Pro has no working speaker.
