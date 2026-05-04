---
title: System tips
description: macOS system tips — screenshots, keyboard shortcuts, and command line utilities.
created: 2026-04-01
updated: 2026-04-01
---

## Screenshots

### Keyboard shortcuts

You can capture the entire screen, a window, or just a portion of the screen.

- `⌘ + ⇧ + 3` Capture the whole screen.
- `⌘ + ⇧ + 4` Capture a selection.
- `⌘ + ⇧ + 4 + Space` Capture a window.
- `⌘ + ⇧ + 5` Capture the whole screen, a selection or a window.

See more information in [Take a screenshot on your Mac](https://support.apple.com/en-us/HT201361).

### Command line

Command line tool that capture an image of the whole, or part of the screen.

```shell
screencapture -ioW ~/Desktop/screenshot.png
```

- `-i` Capture screen interactively, by selection or window.
- `-W` Start interaction in window selection mode.
- `-o` In window capture mode, do not capture the shadow of the window.

More information in [screencapture manual page](https://ss64.com/osx/screencapture.html).

### Change default settings of screen capture

```shell
defaults write com.apple.screencapture name "Screenshot"
```

Disable shadow in screenshots:

```shell
defaults write com.apple.screencapture disable-shadow -bool true
```

Save screenshots to the `~/Downloads`

```shell
defaults write com.apple.screencapture location -string "${HOME}/Downloads"
```

Save screenshots in PNG format (other options: BMP, GIF, JPG, PDF, TIFF)

```shell
defaults write com.apple.screencapture type -string "png"
```

Disable datetime in screenshots filename

```shell
defaults write com.apple.screencapture include-date -bool false
```

To apply the changes, you need to restart the **SystemUIServer**:

```shell
killall SystemUIServer
```

## Toggle hidden files in Finder

Run [Automator](http://en.wikipedia.org/wiki/Automator_(software)) and create new Application. Add task **Run Shell script** and paste follow code:

```shell
STATUS=`defaults read com.apple.finder AppleShowAllFiles`
if [ $STATUS == YES ];
then
    defaults write com.apple.finder AppleShowAllFiles NO
else
    defaults write com.apple.finder AppleShowAllFiles YES
fi
killall Finder
```

Save application. From now you can toggle hidden files with one click.

## Useful commands

### Network speed quality

Since macOS Monterey is there a command to test your network quality:

```shell
networkQuality -v
```

Output will looks like follow:

```
==== SUMMARY ====
Upload capacity: 16.239 Mbps
Download capacity: 475.129 Mbps
Upload flows: 20
Download flows: 12
Responsiveness: Low (154 RPM)
Base RTT: 26
Start: 19.04.2022 13:56:47
End: 19.04.2022 13:57:04
OS Version: Version 12.3.1 (Build 21E258)
```

If you're curious, networkQuality uses Apple's CDN at https://mensura.cdn-apple.com/api/v1/gm/config as the target for its testing.

### List all mounted drives on Mac

```shell
df -h
```

### Open any source

```shell
open # [url|filename|directory...]
```

## IP address of an AirPrint printer

You can use [ippfind](https://manpages.debian.org/testing/cups-ipp-utils/ippfind.1.en.html) command that finds services
registered with a DNS server or available through local devices. Its primary purpose is to find IPP printers
and show their URIs, show their current status, or run commands.

```shell
ippfind
```

Then you get local address of printer (Internet Printing Protocol (IPP, [RFC 2911](https://tools.ietf.org/html/rfc2911))):

```
ipp://3036B5000000.local:XXX/ipp/print
```

then ping local address

```shell
ping 3036B5000000.local
```

and here we go

```text
PING 3036B5000000.local (192.168.0.108): 56 data bytes
64 bytes from 192.168.0.108: icmp_seq=0 ttl=64 time=262.342 ms
64 bytes from 192.168.0.108: icmp_seq=1 ttl=64 time=285.290 ms
```

our printer has `192.168.0.108`
