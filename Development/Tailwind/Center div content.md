---
title: Center div content
description: How to center a div vertically and horizontally using Tailwind CSS Flexbox and Grid.
created: 2023-02-13
updated: 2026-04-06
---

## Flexbox

Center `<div>` vertically and horizontally with [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) layout using [Tailwind](https://play.tailwindcss.com/C1ZhLc4jle)

```html
<div class="flex justify-center items-center w-full h-screen">
  <p>center</p>
</div>
```

or CSS

```css
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Grid

Center `<div>` vertically and horizontally with [Grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids) layout using [Tailwind](https://play.tailwindcss.com/YleaVnoPIN)

```html
<div class="grid place-content-center w-full h-screen">
  <p>center</p>
</div>
```

or CSS

```css
div {
  display: grid;
  place-items: center;
}
```

## Absolute/relative position

Center `<div>` content with relative and absolute positioning using [Tailwind](https://play.tailwindcss.com/93dDkcY82t)

```html
<div class="relative w-full h-screen">
  <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    center
  </p>
</div>
```

or CSS

```css
div {
  position: relative;
}

p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
