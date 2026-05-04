---
title: Tailwind tooltip (CSS Only)
description: How to add CSS-only tooltips to HTML elements using Tailwind CSS without JavaScript.
created: 2022-03-18
updated: 2026-04-06
---

There's a plenty of libraries (mostly JavaScript) to enable the classic tooltip design pattern. You can easily add tooltips to your elements without JavaScript and in just a few lines of [Tailwind](https://tailwindcss.com/) code and HTML.

Lets starts with HTML code:

```html
<div class="mx-auto my-20 max-w-prose divide-y rounded-2xl border shadow-sm">
  <div class="py-20 text-center">
    <span aria-label="Content extra long">Hover this</span>
  </div>

  <div class="dark">
    <div class="py-20 text-center dark:bg-gray-800 dark:text-white">
      <a aria-label="Tooltip content">Hover this</a>
    </div>
  </div>

  <div class="py-20 text-center">
    <a aria-label="Multi lines tooltip&#xa;are also possible">Hover this</a>
  </div>

  <div class="py-20 text-center">
    <a
      aria-label="Extra ultra giga wide comments are posssible"
      class="after:max-w-[120px]"
      >Hover this</a
    >
  </div>

  <div class="py-20 text-center">
    <a aria-label="Sky blue variant" class="before:bg-sky-500 after:bg-sky-500"
      >Hover blue</a
    >
  </div>
</div>
```

Then you have to add follow code to your `tailwind.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  /* after is label */

  [aria-label] {
    @apply relative;
    @apply after:font-semibold;
    @apply after:content-[attr(aria-label)];
    @apply after:pointer-events-none after:absolute after:z-50;
    @apply after:opacity-0 hover:after:opacity-100;
    @apply after:rounded-md after:text-center after:text-xs;
    @apply after:bg-black after:text-white;
    @apply dark:after:bg-white dark:after:text-gray-900;
    @apply after:py-2 after:px-3;
    @apply after:w-max after:min-w-fit after:whitespace-pre-wrap;
    @apply after:bottom-full after:left-1/2 after:-translate-x-1/2;
    @apply after:-translate-y-2;
  }

  /* before is arrow*/

  [aria-label] {
    @apply before:pointer-events-none before:absolute before:z-40;
    @apply before:opacity-0 hover:before:opacity-100;
    @apply before:bottom-full before:left-1/2 before:-translate-x-1/2;
    @apply before:h-2 before:w-4;
    @apply before:transition-opacity after:transition-opacity;
    @apply before:bg-black dark:before:bg-white;
  }

  [aria-label]::before {
    mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 500 250"><polygon points="0,0 250,250 500,0"/></svg>');
  }
}
```

You can easily change tooltip color from default black to something else like follow:

```html
<a aria-label="Sky blue variant" class="before:bg-sky-500 after:bg-sky-500"
  >Hover blue</a
>
```

Width of the tooltip can be limited with `after:max-w-[120px]` class.

```html
<a
  aria-label="Extra ultra giga wide comments are posssible"
  class="after:max-w-[120px]"
  >Hover this</a
>
```

You can decide where will be break by including `&#xa;` HTML Encoded **Line Feed character** - new line to the `aria-label` .

```html
<a aria-label="Multi lines tooltip&#xa;are also possible">Hover this</a>
```

https://play.tailwindcss.com/ulaNoCcYwu
