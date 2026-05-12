---
title: SEO Tools
description: SEO tools and services including Google Search Console, PageSpeed, structured data testing, and open-source alternatives to Semrush/Ahrefs.
created: 2024-04-02
updated: 2026-05-11
---

Tools for SEO auditing, structured data validation, performance testing, and keyword/backlink research.

### Google

- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results) — validate [structured data](../../reference/structured-data/) eligibility for Google rich results
- [Schema Markup Validator](https://validator.schema.org/) — generic schema.org validation

### Browser Extensions

- [Meta Explorer](https://www.metaexplorer.co/)

### Online Tools

- [SEO Site Tools](https://technicalseo.com/tools/)
- [OpenScreen](https://openscreen.vercel.app/) - open graph image generator

### Competitor & keyword research

- **[OpenSEO](https://openseo.so/)** — open-source (MIT) alternative to Semrush/Ahrefs for keyword research, backlink analysis, rank tracking, competitor insights, and AI visibility; self-hostable via Docker or Cloudflare, or use the managed version at [app.openseo.so](https://app.openseo.so/); requires bringing your own DataForSEO API key

### Performance testing

- **[Lighthouse](../../../cli/web/lighthouse/)** — Google's open-source page audit (performance, a11y, SEO, PWA); run via `npx lighthouse <url> --view`
- **[sitespeed.io](https://www.sitespeed.io/)** — open-source suite for measuring web performance and Core Web Vitals; runs in Docker or via npm, integrates with Grafana/Graphite/InfluxDB for continuous monitoring; includes Browsertime (browser automation and timing), Coach (recommendations), and PageXray (page composition analysis)
- **[WebPageTest](https://www.webpagetest.org/)** — detailed performance tests from real browsers across global locations; waterfall, filmstrip, and Core Web Vitals
- **[GTmetrix](https://gtmetrix.com/)** — performance reports combining Lighthouse scores with waterfall and historical tracking
