---
title: Create image slideshow with ffmpeg
description: Jak vytvořit MP4 slideshow z JPG obrázků pomocí ffmpeg — s volitelnou hudbou na pozadí.
created: 2026-04-08
updated: 2026-04-08
---

Following will take all `*.jpg` images from current folder and create mp4 image
slideshow. Images can have different sizes,
[ffmpeg](https://www.ffmpeg.org/ffmpeg.html) will rescale or pad them.

```shell
ffmpeg -framerate 1/3 \
       -pattern_type glob -i '*.jpg' \
       -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1" \
       -c:v libx264 -crf 14 -r 25 -pix_fmt yuv422p \
       output.mp4
```

- `-framerate 1/3` image will be change each 3 sec
- `-pattern_type glob -i '*.jpg'` will use all \*.jpg images from current folder
- `-vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1"`
  rescale or pad image to 1280x720
- `-c:v libx264 ` use H.264 codec
- `-crf 14` CFR (Constant Rate Factor) is betweemn 0–51, where 0 is lossless, 23
  is the default, and 51 is worst quality possible.
- `-r 25` set frame rate.
- `-pix_fmt` pixel output format

With background music:

```shell
ffmpeg -framerate 1/3 \
       -pattern_type glob -i '*.jpg' \
       -i audiofile.mp3 \
       -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1" \
       -c:v libx264 -crf 14 -r 25 -pix_fmt yuv422p \
       -shortest \
       output.mp4
```

- `-shortest` will take shorten source images or mp3 as length limit for video
