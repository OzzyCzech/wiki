---
title: Automatically resize a text area using web components
description: Automatically resize a text area using web components, autosize library, and custom HTML elements.
created: 2024-05-24
updated: 2026-04-06
sidebar:
  label: Autosize textarea
---

In this blog post, we’ll explore how to create a custom HTML element that
automatically resizes a textarea as the user types. We’ll be using the
[autosize library](https://github.com/jackmoore/autosize) and leveraging the
power of Web Components to achieve this.

### What is Autosize?

Autosize is a lightweight JavaScript library that automatically adjusts the
height of a textarea based on its content. This ensures that all text is visible
without the need for scrollbars, enhancing the user experience.

### The Plan

We’ll create a custom HTML element called `<auto-expand>` which extends the
native `<textarea>` element. This custom element will use the autosize library
to dynamically resize itself as the user types.

### Step-by-Step Implementation

##### Step 1: Import the Autosize Library

First, we need to import the `autosize` library. For simplicity, we’ll use a CDN
to include it in our project.

```js
import * as autosize from "https://esm.run/autosize";
```

##### Step 2: Create the Custom Element

Next, we define a custom element called `AutoExpand` that extends the
`HTMLTextAreaElement`. In the constructor, we call the autosize function,
passing the current element (`this`) as an argument.

```js
class AutoExpand extends HTMLTextAreaElement {
  constructor() {
    super();
    autosize(this);
  }
}

customElements.define("auto-expand", AutoExpand, { extends: "textarea" });
```

##### Step 3: Use the Custom Element in HTML

Finally, we can use our custom element in HTML. By specifying
`is="auto-expand"`, we tell the browser to use our `AutoExpand` class for this
textarea.

```html
<textarea is="auto-expand"></textarea>
```

### Autosize without the Autosize Library

There is an alternative approach to autosizing textareas without using the
autosize library. This method involves listening for input events on the
`textarea` and adjusting its height based on the content.

```js
function autosize(textarea) {
  textarea.style.boxSizing = "border-box";
  textarea.style.resize = "none";
  const offset = textarea.offsetHeight - textarea.clientHeight;
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + offset + "px";
}
```

You can call this function whenever the `input` event is triggered on the
`textarea` element.

```js
textarea.addEventListener("input", () => autosize(textarea));
```

### New CSS-only way with `field-sizing`

There is new fancy way to autosize `textarea` or `input` fields
using only CSS. You can use `field-sizing: content` to make
the input field grow with its content. Current support is
[limited to Chromium-only](https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing),
but it's a nice alternative and worth considering as future-proof solution.

```css
textarea {
  field-sizing: content;
}
```

It's a single CSS property that really does all of that work for you,
it even sizes to the placeholder when you clear it.

### Conclusion

By following these steps, you can create a custom HTML element that
automatically resizes a `textarea` as the user types. This technique leverages
the simplicity and power of the autosize library and the flexibility of Web
Components, resulting in a smooth and user-friendly experience.

Feel free to customize and extend this basic example to suit your specific
needs. Happy coding!
