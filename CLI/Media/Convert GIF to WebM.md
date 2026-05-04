---
title: Convert GIF to WebM
description: Jak převést animovaný GIF na WebM video pomocí ffmpeg a vložit ho do HTML.
created: 2026-04-08
updated: 2026-04-08
---

```shell
ffmpeg -i my-animation.gif -c vp9 -b:v 0 -crf 41 my-animation.webm
```

```html
<video autoplay loop muted playsinline>
  <source src="my-animation.webm" type="video/webm" />
</video>
```
