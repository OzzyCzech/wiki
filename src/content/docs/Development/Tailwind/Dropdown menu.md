---
title: How to build a Tailwind CSS dropdown element
description: How to create a dropdown menu with Tailwind CSS and Vanilla JS
created: 2022-04-26
updated: 2026-04-06
sidebar:
  label: Dropdown menu
---

Tailwind CSS does not provide a base set of components that are ready to use right out of the box. One of the most missing components are [dropdowns](https://getbootstrap.com/docs/5.0/components/dropdowns/).
Dropdowns are toggleable, contextual overlays for displaying lists of links and more.
They’re made interactive with a JavaScript.

![Dropdown menu with Tailwind](https://github.com/OzzyCzech/tailwind-dropdowns/raw/main/menu.png)

Let's have button first:

```html
<button
  data-dropdown="userMenu"
  aria-expanded="false"
  class="border rounded-sm py-2 px-3 shadow-sm"
  l
>
  Show menu
</button>
```

and some simple dropdown menu:

```html
<div
  id="userMenu"
  class="hidden z-50 w-60 text-base bg-white rounded-sm divide-y divide-gray-200 focus:outline-hidden"
>
  <ul>
    <li>
      <a
        href="/"
        class="block rounded-t py-3 px-4 text-sm text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
      >
        Home
      </a>
    </li>
  </ul>
</div>
```

Then you need to add some javascript to show or hide the menu by toggling `hidden` class on the menu and [Popper](https://popper.js.org/).
Popper will provide accurate position of this menu right under button and will solve all possible conflicts with menu and browser borders for you.

```bash
yarn add @popperjs/core
```

and craete [dropdown-menu.js](https://github.com/OzzyCzech/tailwind-dropdowns/blob/main/src/dropdown-menu.js) file with following content:

```js
import { createPopper } from "@popperjs/core/lib/popper-lite.js";
import flip from "@popperjs/core/lib/modifiers/flip.js";
import preventOverflow from "@popperjs/core/lib/modifiers/preventOverflow.js";

/**
 * Menu attributes:
 * id="[dropdown id]"
 *
 * Button attributes:
 *
 * data-dropdown="[ID of dropdown element]"
 * data-placement="[dropdown placement]"
 */
export function addDropdown(button) {
  const menu = document.querySelector(`#${button.dataset.dropdown}`);

  // Popper create instance
  const popper = createPopper(button, menu, {
    placement: button.dataset.placement || "bottom-start",
    modifiers: [flip, preventOverflow],
  });

  // toggle menu on button click
  button.addEventListener("click", async (event) => {
    const menu = document.querySelector(`#${event.target.dataset.dropdown}`);
    menu.classList.toggle("hidden");
    event.target.setAttribute(
      "aria-expanded",
      !menu.classList.contains("hidden"),
    );

    await popper.update(); // reposition

    // close dropdown menu on Escape or click somewhere else
    function closeMenu(event) {
      if (
        event.type === "click" &&
        (event.target !== button || event.key === "Escape")
      ) {
        menu.classList.add("hidden");
        button.setAttribute("aria-expanded", false);

        // remove close menu handlers
        document.removeEventListener("click", closeMenu);
        document.removeEventListener("keydown", closeMenu);
      }
    }

    document.addEventListener("click", closeMenu);
    document.addEventListener("keydown", closeMenu);
  });
}

// let's add dropdown menu to all buttons
for (const dropDownButton of inputDocument.querySelectorAll(
  "[data-dropdown]",
)) {
  addDropdown(dropDownButton);
}
```

You can find the whole example on my GitHub at [OzzyCzech/tailwind-dropdowns](https://github.com/OzzyCzech/tailwind-dropdowns)
