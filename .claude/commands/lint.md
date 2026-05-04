Scan the wiki for structural and consistency issues.

## 1. Frontmatter issues

Check every `.md`/`.mdx` file in `src/content/docs/` for:
- Missing `title`
- Missing `description`
- Missing `created` or `updated`
- `created` newer than `updated`
- JSON-style frontmatter instead of YAML syntax
- Field order: `title`, `description`, `created`, `updated`, `sidebar`, then extras
- `sidebar.label` same as `title`
- `slug` set without a clear reason
- `#` h1 in body

## 2. Orphan pages

List pages with no inbound links from other wiki pages. Report only.

## 3. Missing or unclear attribution

Flag factual claims (statistics, version numbers, benchmarks, named tools) without traceable attribution:
- Claim has no nearby link and no `## Sources`
- `## Sources` does not support the page claims
- Page is based on external sources but has no attribution

Do not require `## Sources` when the source URL is already linked directly in the relevant item or paragraph.

## 4. Broken internal links

Check all internal links and sidebar paths:
- Relative/absolute wiki links point to existing files or anchors
- Page links use lowercase hyphenated slugs
- Same-directory page links use `../slug`, not `./slug`
- Sidebar paths in `astro.config.mjs` are lowercase and valid

## 5. Page structure

Check for:
- Missing short introductory paragraph before the first `##`
- Heading levels deeper than `####`
- Fenced code blocks without a language identifier
- Tables with more than 5 columns
- Empty or navigation-only pages

## 6. Images and assets

Check images for:
- Missing or empty alt text
- Non-relative paths for local images
- Files stored outside the page directory
- Filenames that are not kebab-case

## 7. Filename diacritics

Filenames must be ASCII-only. Transliterate Czech diacritics (`Dětské knihy.md` → `Detske knihy.md`, `Nemusíš.md` → `Nemusis.md`); keep diacritics only in `title`.

Rename affected files with `git mv`, then update links that referenced the old slug.

## 8. Report

Report by issue type:

```
## Frontmatter issues
- src/content/docs/AI/Example.md — missing `description`

## Orphan pages
- src/content/docs/AI/Example.md — no inbound links

## Missing sources
- src/content/docs/AI/Example.md — factual claims lack attribution

## Broken internal links
- src/content/docs/AI/Example.md:12 — links to /AI/Nonexistent

## Page structure
- src/content/docs/AI/Example.md — missing introductory paragraph

## Images and assets
- src/content/docs/AI/Example.md — image has empty alt text

## Filename diacritics
- src/content/docs/LifeHack/Nemusíš.md → Nemusis.md
```

Use `None found.` for empty categories.

## 9. Fix what you can

Fix clear structural issues directly:
- Frontmatter fields, date order, and field order
- Obvious link convention issues
- Obvious code block language identifiers
- Inferable image alt text
- Filename diacritics via `git mv` plus link updates

Report only: orphans and missing/unclear attribution.

Do not add fake sources, remove content, or rewrite pages.

## 10. Commit fixes

If any files were changed:

```
docs: lint — fix [summary]
```
