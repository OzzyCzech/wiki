---
title: Radio select switch
description: Radio input-based multiple select switch component built with Tailwind CSS.
created: 2024-06-26
updated: 2026-04-06
---

This code snippet is a `radio` input based multiple select switch using Tailwind CSS.

```html
<div class="flex h-screen w-full items-center justify-center">
  <form class="w-full max-w-(--breakpoint-sm)">
    <div class="mb-3">
      <span class="mb-0.5 inline-flex font-medium"
        >Please chose one option:</span
      >
      <div
        class="grid grid-flow-col gap-0.5 rounded-lg border-2 border-gray-200 bg-gray-200 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-500"
      >
        <label class="m-0">
          <input
            type="radio"
            name="option"
            checked
            value="1"
            class="peer sr-only"
          />
          <span
            class="block cursor-pointer rounded-lg px-2 py-2 hover:bg-white/60 peer-checked:bg-white peer-checked:text-gray-950 dark:hover:bg-gray-900/50 dark:peer-checked:bg-gray-900 dark:peer-checked:text-gray-200"
          >
            First option</span
          >
        </label>

        <label class="m-0">
          <input type="radio" name="option" value="2" class="peer sr-only" />
          <span
            class="block cursor-pointer rounded-lg px-2 py-2 hover:bg-white/60 peer-checked:bg-white peer-checked:text-gray-950 dark:hover:bg-gray-900/50 dark:peer-checked:bg-gray-900 dark:peer-checked:text-gray-200"
          >
            Another option
          </span>
        </label>

        <label class="m-0">
          <input type="radio" name="option" value="3" class="peer sr-only" />
          <span
            class="block cursor-pointer rounded-lg px-2 py-2 hover:bg-white/60 peer-checked:bg-white peer-checked:text-gray-950 dark:hover:bg-gray-900/50 dark:peer-checked:bg-gray-900 dark:peer-checked:text-gray-200"
          >
            Last option</span
          >
        </label>
      </div>
    </div>
  </form>
</div>
```

Check https://play.tailwindcss.com/NylmqdUa5s for a live example.
