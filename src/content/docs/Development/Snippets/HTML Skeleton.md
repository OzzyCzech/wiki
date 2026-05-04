---
title: HTML Skeleton
description: Minimal HTML boilerplate with essential structure for starting new web pages.
created: 2024-06-02
updated: 2026-04-06
tableOfContents: false
---

Here is my simple HTML boilerplate for web development.
It includes the essential parts needed for the page to
work properly and display content. This skeleton has key elements like the
document type, metadata, and the main content sections

```html title="index.html"
<!doctype html>
<html dir="ltr" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
    <meta name="description" content="" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#fafafa" />
    <meta name="keywords" content="" />
    <meta name="author" content="" />

    <!-- Open Graph https://ogp.me/ -->
    <meta property="og:title" content="" />
    <meta property="og:site_name" content="" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="" />
    <meta property="og:url" content="" />

    <!-- Sitemap -->
    <link
      rel="sitemap"
      type="application/xml"
      title="Sitemap"
      href="/sitemap.xml"
    />

    <!-- RSS & Atom -->
    <link
      rel="alternate"
      type="application/rss+xml"
      href="/rss.xml"
      title="RSS"
    />
    <link
      rel="alternate"
      type="application/atom+xml"
      href="/atom.xml"
      title="Atom"
    />

    <!-- Tailwind Play https://tailwindcss.com/ -->
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>

    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/icon.svg" type="image/svg+xml" />
  </head>

  <body class="prose">
    <header></header>
    <aside></aside>
    <main class="grid items-center order-first"></main>
    <footer></footer>
    <script src="js/app.js" async></script>
  </body>
</html>
```
