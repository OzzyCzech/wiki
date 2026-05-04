---
title: Structured data
description: Schema.org structured data for Google Search rich results — formats, types, and validation tools.
created: 2026-05-04
updated: 2026-05-04
---

Structured data is standardized markup that tells search engines what a page is about, enabling rich results (review stars, FAQ accordions, recipe cards, breadcrumbs, etc.). Google parses it from the HTML and uses it to enhance how the page appears in search.

## Supported formats

Google supports three formats; **JSON-LD is recommended**.

| Format | Placement | Notes |
|---|---|---|
| JSON-LD | `<script type="application/ld+json">` in `<head>` or `<body>` | Recommended — decoupled from visible markup |
| Microdata | `itemscope`, `itemtype`, `itemprop` attributes on HTML elements | Inline with content |
| RDFa | `vocab`, `typeof`, `property` attributes | Inline with content |

## Common content types

Built on [schema.org](https://schema.org/) vocabulary. Frequently used types with Google rich result support:

- `Article` / `NewsArticle` / `BlogPosting` — headlines, author, dates
- `Product` with `Offer` and `AggregateRating` — price, availability, reviews
- `Recipe` — ingredients, cook time, ratings
- `FAQPage` — question/answer pairs
- `HowTo` — step-by-step instructions
- `Event` — date, location, ticket info
- `Organization` / `LocalBusiness` — contact info, hours, logo
- `BreadcrumbList` — navigation hierarchy
- `VideoObject` — thumbnail, duration, upload date
- `Person` — profile info
- `Course`, `JobPosting`, `Book`, `Movie`, `SoftwareApplication`

The full feature gallery lives in the [Google search appearance docs](https://developers.google.com/search/docs/appearance/structured-data/search-gallery).

## Example — JSON-LD Article

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Title of the page",
  "author": {
    "@type": "Person",
    "name": "Jane Doe"
  },
  "datePublished": "2026-05-01",
  "image": "https://example.com/cover.jpg"
}
</script>
```

## Validation

- **[Rich Results Test](https://search.google.com/test/rich-results)** — official Google tool; reports which rich results the markup is eligible for, with Google-specific warnings
- **[Schema Markup Validator](https://validator.schema.org/)** — generic schema.org validation without Google feature checks
- **[Google Search Console](https://search.google.com/search-console)** — production monitoring of indexed structured data, errors, and impressions

Google has split validation: use Rich Results Test for eligibility checks and Schema Markup Validator for vocabulary correctness.

## Guidelines

- Mark up content visible to users — don't hide structured data behind cloaking
- Markup must accurately describe the page; misleading or spammy markup can trigger manual actions
- Required and recommended properties differ per type — check the [feature-specific docs](https://developers.google.com/search/docs/appearance/structured-data)
- Test before deploy with the Rich Results Test, then monitor in Search Console
- Eligibility for rich results doesn't guarantee display — Google decides at query time

## Sources

- [Google Search Central — Structured data](https://developers.google.com/search/docs/appearance/structured-data) — overview and feature gallery
- [schema.org](https://schema.org/) — vocabulary reference
