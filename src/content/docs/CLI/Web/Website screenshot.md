---
title: Taking website screenshots from the command line
description: Capture website with Google Chrome and save it as a screenshot or PDF.
created: 2024-05-24
updated: 2026-04-06
sidebar:
  label: Website screenshot
---

### Taking website screenshots with Firefox

Following command will take a screenshot of the website and save it as a file (`screenshot.png`):

```shell
/Applications/Firefox.app/Contents/MacOS/firefox \
  --screenshot https://www.apple.com
```

You can also change the window size and save the screenshot to a specific file:

```shell
/Applications/Firefox.app/Contents/MacOS/firefox \
  --window-size=1920,1080 \
  --screenshot "~/Downloads/ozana.png" https://www.ozana.cz
```

### Taking website screenshots with Google Chrome

You can capture a website with Google Chrome using the following command:

```shell
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless --disable-gpu \
  --screenshot --hide-scrollbars --virtual-time-budget=2000 \
  --window-size=1920,1428 \
  https://www.apple.com
```

or you can print whole page to PDF:

```shell
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless --disable-gpu \
  --no-pdf-header-footer --no-margins \
  --virtual-time-budget=2000 \
  --run-all-compositor-stages-before-draw
  --print-to-pdf="~/Downloads/apple.pdf" \
  https://www.apple.com
```

Ger more information about [Chrome Headless](https://developer.chrome.com/blog/headless-chrome/) mode
