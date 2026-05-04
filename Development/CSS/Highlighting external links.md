---
title: Highlighting external links
description: CSS snippet to add an external link icon after all outbound links using SVG content.
created: 2020-04-21
updated: 2026-04-06
---

Follow CSS code add small SVG allow on the top of the external links:

```css
a[href*="//"]:not([href*="ozzyczech.cz"]):after
{
  content: url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="14px" viewBox="0 2 12 14"><g style="opacity:0.75;" fill="currentColor"><polygon style="fill-rule:evenodd;clip-rule:evenodd;" points="2,2 5,2 5,3 3,3 3,9 9,9 9,7 10,7 10,10 2,10 "/><polygon style="fill-rule:evenodd;clip-rule:evenodd;" points="6.211,2 10,2 10,5.789 8.579,4.368 6.447,6.5 5.5,5.553 7.632,3.421"/></g></svg>');
}
```

PS: do not forget change `href*="ozzyczech.cz"` in CSS code 😀
