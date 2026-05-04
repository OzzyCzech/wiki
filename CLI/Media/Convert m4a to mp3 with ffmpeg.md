---
title: Convert m4a to mp3 with ffmpeg
description: Hromadný převod M4A souborů na MP3 pomocí ffmpeg a libmp3lame.
created: 2026-04-08
updated: 2026-04-08
---

Convert all `m4a` files in the current directory to `mp3` files.

```shell
for i in *.m4a; do ffmpeg -i "$i" -c:v copy -c:a libmp3lame -q:a 4 "${i%.m4a}.mp3"; done
```
