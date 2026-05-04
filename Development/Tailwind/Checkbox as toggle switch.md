---
title: Checkbox as toggle switch
description: How to style a checkbox input as an on/off toggle switch using Tailwind CSS.
created: 2022-03-31
updated: 2026-04-06
---

Learn how to create toggle switch (on/off button) from `<input type="checkbox">`.
Lets starts with a simple HTML code:

```html
<label>
  <input type="checkbox" />
  This is on/off checkbox
</label>
```

Then you have to add follow code to your `tailwind.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  label {
    @apply h-6 relative inline-block;
  }

  [type="checkbox"] {
    @apply w-11 h-0 cursor-pointer inline-block;
    @apply focus:outline-0 dark:focus:outline-0;
    @apply border-0 dark:border-0;
    @apply focus:ring-offset-transparent dark:focus:ring-offset-transparent;
    @apply focus:ring-transparent dark:focus:ring-transparent;
    @apply focus-within:ring-0 dark:focus-within:ring-0;
    @apply focus:shadow-none dark:focus:shadow-none;

    @apply after:absolute before:absolute;
    @apply after:top-0 before:top-0;
    @apply after:block before:inline-block;
    @apply before:rounded-full after:rounded-full;

    @apply after:content-[''] after:w-5 after:h-5 after:mt-0.5 after:ml-0.5;
    @apply after:shadow-md after:duration-100;

    @apply before:content-[''] before:w-10 before:h-full;
    @apply before:shadow-[inset_0_0_#000];

    @apply after:bg-white dark:after:bg-gray-50;
    @apply before:bg-gray-300 dark:before:bg-gray-600;
    @apply checked:before:bg-lime-500 dark:checked:before:bg-lime-500;
    @apply checked:after:duration-300 checked:after:translate-x-4;

    @apply disabled:after:bg-opacity-75 disabled:cursor-not-allowed;
    @apply disabled:checked:before:bg-opacity-40;
  }
}
```

https://play.tailwindcss.com/gNadhDPsbj
