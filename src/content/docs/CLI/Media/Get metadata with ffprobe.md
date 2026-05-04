---
title: Get metadata with ffprobe
description: Jak číst metadata z audio a video souborů pomocí ffprobe a jq.
created: 2026-04-08
updated: 2026-04-08
---

To extract metadata from a media file using `ffprobe`, you can use the following command:

```shell
ffprobe -v quiet -print_format json -show_format file.mp3 | jq -r '.format.tags'
```

Replace `file.mp3` with the path to your media file. This command will output the metadata in JSON format, which can be
easily parsed or read.

Make sure you have `jq` installed to format the JSON output. If you don't have it installed, you can remove the
`| jq -r '.format.tags'` part to get the raw JSON output from `ffprobe`.