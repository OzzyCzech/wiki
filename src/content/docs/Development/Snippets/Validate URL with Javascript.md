---
title: Validate URL with JavaScript
description: JavaScript function to validate and normalize URLs, returning undefined for invalid inputs.
created: 2024-05-15
updated: 2026-04-06
---

Following is a simple function to validate a URL with JavaScript. It will return the URL if it is valid, otherwise it will return `undefined`.

```javascript
function getValidUrl(url) {
  url = url
    // remove spaces
    .replaceAll(/\s/g, "")
    // [anything]://google.com -> https://google.com
    // ://google.com -> https://google.com
    // //google.com -> https://google.com
    // /google.com -> https://google.com
    // google.com -> https://google.com
    .replace(/^(?!https?:)(.*?):\/\/|^(?!https?:)\/?\/?/, "https://");

  // Perfectly valid URL
  if (URL.canParse(url)) {
    const u = new URL(url);

    // hostname can't start with a dot
    if (/^(?!\.)[a-zA-Z\d-.]{1,253}\.?$/.test(u.hostname)) {
      return u.toString();
    }
  }
}
```
