---
title: Form validation with Tailwind
description: How to use Tailwind CSS pseudo-class utilities for form input validation states.
created: 2022-03-23
updated: 2026-04-06
---

Tailwind have multiple utilities for different inputs states like `required`, `invalid`, and `disabled`. See the [pseudo-class reference](https://tailwindcss.com/docs/hover-focus-and-other-states) for a complete list of available pseudo-class modifiers.

But what if user just loaded website and there are `required` inputs with default (empty) value? They will be immediately red and `invalid` - that's not what you expect!

```html
<input type="url" class="invalid:bg-red-500" value="" required />
```

You should wait with input validation to user. That's why the [CSS pseud-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid)
`:user-invalid` exists. This class represents any validated form element whose value isn't valid based on their validation constraints, after the user has interacted with it. Right now `:user-invalid` pseudo-class isn't very well
supported - [works only in Firefox](https://caniuse.com/?search=user-invalid).

Let's crate following Javascript (sort of polyfill):

```js
/**
 * Form validation for older browsers
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid
 * @see https://caniuse.com/?search=user-invalid
 */
try {
  if (typeof window !== "undefined") {
    document.querySelector(":user-invalid");
  }
} catch {
  document.addEventListener("DOMContentLoaded", () => {
    for (const input of document.querySelectorAll("input")) {
      input.addEventListener("change", (event) =>
        event.target.classList.add("dirty"),
      );
    }
  });
}
```

This code adds a `dirty` class to all changed input fields, which helps us to _simulate_ the `:user-invalid` pseudo-class and clearly mark all inputs that have been changed by the user. Then you can easily distinguish between changed and unchanged inputs that are invalid.
Following [Tailwind code](https://tailwindcss.com/docs/hover-focus-and-other-states#invalid) requires [tailwindcss-forms](https://github.com/tailwindlabs/tailwindcss-forms) plugin:

```css
/* invalid and dirty or :user*/
:is(input:user-invalid, input.dirty) {
  @apply invalid:focus:ring-red-100 dark:invalid:focus:ring-red-500 dark:invalid:focus:ring-opacity-30;
  @apply dark:invalid:bg-red-800/20 dark:invalid:border-red-900;
  @apply invalid:bg-red-50 invalid:border-red-300;
}
```

and full CSS example:

```css
@tailwind base;

@layer base {
  [type="text"],
  [type="email"],
  [type="url"],
  [type="password"],
  [type="number"],
  [type="date"],
  [type="datetime-local"],
  [type="month"],
  [type="search"],
  [type="tel"],
  [type="time"],
  [type="week"],
  [multiple],
  textarea,
  select {
    @apply block w-full rounded-md shadow-sm;
    @apply border-gray-300 focus:border-blue-300;
    @apply dark:bg-gray-700 dark:border-gray-600 dark:text-white;
    @apply placeholder-gray-500 dark:placeholder-gray-400;
    @apply dark:border-gray-600 dark:focus:border-gray-500;

    @a,pply focus:ring-3;
    @apply focus:ring-blue-200 dark:focus:ring-gray-600;
    @apply focus:ring-opacity-50 dark:focus:ring-opacity-50;
  }
}

@tailwind components;
@tailwind utilities;

/* invalid and dirty or :user*/
:is(input:user-invalid, input.dirty) {
  @apply invalid:focus:ring-red-100 dark:invalid:focus:ring-red-500 dark:invalid:focus:ring-opacity-30;
  @apply dark:invalid:bg-red-800/20 dark:invalid:border-red-900;
  @apply invalid:bg-red-50 invalid:border-red-300;
}
```

https://play.tailwindcss.com/awVeicebKX
