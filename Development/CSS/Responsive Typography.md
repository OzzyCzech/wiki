---
title: Responsive Typography
description: CSS technique for responsive typography using custom properties and media queries.
created: 2020-09-29
updated: 2026-04-06
---

```css
h1 {
  font-size: calc(2em * var(--text-multiplier, 1));
}

p {
  font-size: calc(1em * var(--text-multiplier, 1));
}

@media (min-width: 48rem) {
  :root {
    --text-multiplier: 1.25;
  }
}
```
