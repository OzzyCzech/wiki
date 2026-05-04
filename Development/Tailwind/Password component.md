---
title: Show/hide password with Tailwind and Vanilla JavaScript
description: How to build a show/hide password toggle button using Tailwind CSS and Vanilla JavaScript.
created: 2022-06-06
updated: 2026-04-06
sidebar:
  label: Password component
---

I will show you a simple way in Vanilla JavaScript how to made show/hide password button. Let's start with Tailwind first:

```html
<script src="https://cdn.tailwindcss.com?plugins=forms"></script>
```

Then add following HTML code:

```html
<div class="mx-auto max-w-md my-12">
  <label for="password" class="font-bold mb-2">Password</label>
  <div class="flex justify-center w-full">
    <input
      id="password"
      type="password"
      name="password"
      autocompletetype="password"
      x-autocompletetype="password"
      class="block w-full border-gray-200 rounded-l border-t border-l border-b p-2 shadow-xs"
      placeholder="Your password"
      required
    />
    <label
      class="cursor-pointer border shadow-xs px-3 border-y border-r m-0 pt-2 rounded-r-md hover:bg-gray-100"
    >
      <input
        type="checkbox"
        class="sr-only peer"
        onclick="(function(el) { el.parentNode.previousElementSibling.type = el.checked ? 'text' : 'password';})(this)"
      />
      <span class="block peer-checked:hidden">show</span>
      <span class="hidden peer-checked:block">hidde</span>
    </label>
  </div>
</div>
```

<script async src="//jsfiddle.net/OzzyCzech/q35p9s7b/114/embed/result,html/dark/"></script>
