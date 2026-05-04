---
title: Add copy to clipboard button to all preformat code in pure Javascript
description: Pure JavaScript snippet to add a copy-to-clipboard button to all preformatted code blocks.
created: 2020-03-02
updated: 2026-04-06
sidebar:
  label: Copy code to clipboard
---

```js
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    // for all pre > code
    document.querySelectorAll("pre > code").forEach(function (codeBlock) {
      // create anchor element
      let copy = document.createElement("a");
      copy.className = "btn-copy";
      copy.innerText = "Copy";
      copy.title = "Copy to Clipboard!";
      copy.href = "#";

      // add click event
      copy.addEventListener(
        "click",
        function (e) {
          copy.innerText = "Copied!";

          // copy innerText of preformat
          navigator.clipboard.writeText(codeBlock.innerText).then(
            function () {
              setTimeout(function () {
                copy.innerText = "Copy";
              }, 500);
            },
            function (err) {
              copy.innerText = "ERROR";
            },
          );

          // do nothing else...
          e.preventDefault();
          e.stopPropagation();
        },
        false,
      );

      // insert before codeBlock <pre><a><code>
      codeBlock.parentNode.insertBefore(copy, codeBlock);
    });
  }
};
```

```css
a.btn-copy,
a.btn-copy:hover {
  color: black;
  user-select: none;
  position: absolute;
  padding: 8px;
  font-size: smaller;
  right: 0;
  top: 0;
}
```

As with many new APIs, `navigator.clipboard` is only supported for pages served over HTTPS. To help prevent abuse, clipboard access is only allowed when a page is the active tab. Pages in active tabs can write to the clipboard without requesting permission, but reading from the clipboard always requires permission.

https://developers.google.com/web/updates/2018/03/clipboardapi
