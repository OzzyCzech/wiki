---
title: Webcam Timelapse with fswebcam and ffmpeg
description: Jak zachytávat snímky webkamerou pomocí fswebcam a cronu a složit je do timelapse videa přes ffmpeg.
created: 2026-04-08
updated: 2026-04-08
---

Automatické zachytávání snímků z webkamery pomocí `fswebcam` a `cron`, následné složení do timelapse videa přes `ffmpeg`.

## Instalace

```bash
sudo apt-get install fswebcam
```

## Cron — zachytávání snímků

Snímky každou minutu od 5:00 do 19:00:

```bash
crontab -e
```

Přidej řádek (uprav cestu `/home/pi/images/` podle svého):

```
*  5-19 * * * fswebcam --jpeg 95 -r 1024x768 -S 100 --no-banner /home/pi/images/$(date +\%Y\%m\%d\%H\%M\%S).jpg
```

- `--jpeg 95` — kvalita JPEG 95 %
- `-r 1024x768` — rozlišení
- `-S 100` — přeskočí prvních 100 snímků (zahřívání kamery)
- `--no-banner` — odstraní timestamp banner

## Složení timelapse videa

```bash
ffmpeg -framerate 30 -pattern_type glob -i 'images/*.jpg' -vcodec libx264 video.mp4
```
