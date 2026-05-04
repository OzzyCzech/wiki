---
title: Lighthouse via npx
description: Run Google Lighthouse audits from the command line without installing it globally.
created: 2026-05-04
updated: 2026-05-04
---

[Lighthouse](https://github.com/GoogleChrome/lighthouse) is Google's open-source tool for auditing web pages on performance, accessibility, best practices, SEO, and PWA. With `npx` it runs without a global install — useful for one-off checks or CI.

## Basic usage

```bash
npx lighthouse https://example.com --view
```

`--view` opens the HTML report in the default browser when the audit finishes.

## Useful flags

```bash
# Mobile (default) vs desktop preset
npx lighthouse https://example.com --preset=desktop --view

# Limit audited categories
npx lighthouse https://example.com --only-categories=performance,seo --view

# JSON output for CI / scripting
npx lighthouse https://example.com --output=json --output-path=./report.json

# Both HTML and JSON
npx lighthouse https://example.com --output=html --output=json --output-path=./report

# Headless Chrome (no UI window)
npx lighthouse https://example.com --chrome-flags="--headless=new"

# Throttle off (use observed network/CPU)
npx lighthouse https://example.com --throttling-method=provided
```

## CI usage

For continuous monitoring use [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci):

```bash
npx @lhci/cli@latest autorun
```

It collects multiple runs, asserts against budgets, and uploads reports to a server or temporary public storage.

## Related

- [SEO Tools](../../development/tools/seo-tools/) — broader list of performance and SEO services
