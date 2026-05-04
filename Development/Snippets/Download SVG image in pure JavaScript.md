---
title: Download SVG image in pure Javascript
description: Pure JavaScript function to generate and download a placeholder SVG image as PNG.
created: 2020-12-08
updated: 2026-04-06
---

```js
function downloadPlaceholder(width, height, name, type = "png") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="150" viewBox="0 0 ${width} ${height}"><rect fill="#ddd" width="${width}" height="${height}"/><text fill="rgba(0,0,0,0.5)" font-family="sans-serif" font-size="30" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">${width}×${height}</text></svg>`;

  let blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  let url = URL.createObjectURL(blob);

  let image = new Image();
  image.onload = () => {
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    let context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, width, height);

    let a = document.createElement("a");
    a.download = name;
    a.style.opacity = "0";

    switch (type) {
      case "jpg":
        a.href = canvas.toDataURL("image/jpg");
        break;
      case "webp":
        a.href = canvas.toDataURL("image/webp");
        break;
      default:
        a.href = canvas.toDataURL();
        break;
    }

    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  image.src = url;
}
```

Bonus:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="300"
  height="150"
  viewBox="0 0 300 150"
>
  <rect fill="#ddd" width="300" height="150" />
  <text
    fill="rgba(0,0,0,0.5)"
    font-family="sans-serif"
    font-size="30"
    dy="10.5"
    font-weight="bold"
    x="50%"
    y="50%"
    text-anchor="middle"
  >
    300×150
  </text>
</svg>
```
