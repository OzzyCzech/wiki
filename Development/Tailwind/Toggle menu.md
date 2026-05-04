---
title: Toggle menu
description: How to create an accessible toggle button with Tailwind CSS and inline JavaScript.
created: 2023-07-07
updated: 2026-04-06
---

Following example shows how to create toggle button with Tailwind CSS and Javascript inlined in HTML:

```html
<nav>
  <ul>
    <li>
      <button
        type="button"
        aria-expanded="false"
        class="group peer flex w-full justify-between rounded-sm px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-950/50"
        onclick="(function toggle(button) { button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'true' ? 'false' : 'true')})(this)"
      >
        <span>Toggle button</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="24px"
          width="24px"
          class="fill-natural-500 transition ease-in-out group-aria-expanded:rotate-90 dark:fill-gray-400"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
      <ul class="hidden peer-aria-expanded:block">
        <li>
          <a
            href="#"
            class="flex w-full rounded-sm px-2.5 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-950/50"
            >Link one</a
          >
        </li>
        <li>
          <a
            href="#"
            class="flex w-full rounded-sm px-2.5 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-950/50"
            >Link two</a
          >
        </li>
      </ul>
    </li>
  </ul>
</nav>
```

https://play.tailwindcss.com/HxHvapkYPw

or you can extract toggle button javascript to separate file:

```js
document.querySelectorAll("button[aria-expanded]").forEach((button) => {
  button.addEventListener("click", () => {
    button.setAttribute(
      "aria-expanded",
      button.getAttribute("aria-expanded") === "true" ? "false" : "true",
    );
  });
});
```
