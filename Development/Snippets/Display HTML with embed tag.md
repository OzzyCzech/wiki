---
title: Display HTML with embed tag
description: How to display HTML content inline using the HTML embed tag.
created: 2021-04-09
updated: 2026-04-06
---

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <embed
      type="text/html"
      id="response"
      scrolling="no"
      style="height: 640px; width:100%;"
    />
  </body>
</html>
```

```js
(async function () {
  const embedResponse = document.getElementById("response");
  try {
    // clean content first
    embedResponse.setAttribute("src", "data:text/html;charset=utf-8,");
    const response = await fetch("/api/response", {
      method: "post",
      // accept HTML response
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      // sent data if needed
      body: JSON.stringify({ data: "" }),
    });

    // encode HTML response
    const html = await response.text();
    embedResponse.setAttribute(
      "src",
      "data:text/html;charset=utf-8," + encodeURIComponent(html),
    );
  } catch (e) {
    // catch errors and show them
    embedResponse.setAttribute(
      "src",
      "data:text/html;charset=utf-8," + encodeURIComponent(e),
    );
    console.error(e);
  }
})();
```

There is another option, you can display HTML in new window as blob data:

```js
const content = URL.createObjectURL(
  new Blob([response.data + overlay || ""], { type: "text/html" }),
);
window.open(content, "response", `width=640, height=480`).focus();
```
