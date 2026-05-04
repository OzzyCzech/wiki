---
title: YouTube downloader
description: Download YouTube videos and extract audio using yt-dlp.
created: 2022-11-01
updated: 2026-04-06
---

First intall [yt-dlp](https://github.com/yt-dlp/yt-dlp) (that's [youtube-dl](https://github.com/ytdl-org/youtube-dl) fork based on the inactive [youtube-dlc](https://github.com/blackjack4494/yt-dlc))

```shell
brew install yt-dlp
```

## Download video

Download the **best video quality** with the **best extension** - for video, `mp4` > `webm` > `flv` or for audio, `m4a` > `aac` > `mp3` :

```shell
yt-dlp -S "ext" -o "~/Download/%(title)s.%(ext)s" [URL]
```

## Extract MP3 audio from YouTube video

Get the best audio quality into `mp3` file:

```shell
yt-dlp -f "ba" -x --audio-format mp3 [URL]
```

## Download other formats

First you need to list all available formats with:

```shell
yt-dlp --list-formats [URL]
```

then download them using `--format` or `-f` parameter:

```shell
yt-dlp --format mp4 [URL]
```

## Other useful commands

If you will need to update `yt-dlp` use:

```shell
yt-dlp -U
```
