Randomly sample pages from the wiki and audit their quality.

## 1. Select pages to audit

Pick 5–10 pages at random from `src/content/docs/` (across different categories). If the user specifies a category or number, use that instead.

## 2. For each page, check

**Freshness**
- Does the page contain version numbers, prices, or tool availability claims that may be outdated?
- Does the `updated` date suggest the page hasn't been touched in a long time relative to its content type?

**Source quality**
- Does every factual claim have a traceable source?
- Is there a `## Sources` section where one is expected?
- Are any claims marked as single-source that should be verified further?

**Accuracy**
- Do claims contradict what you know from other pages in the wiki or from general knowledge?
- Are there broken or suspicious links?

**Links**
- Check every external URL in the page with a HEAD request (`curl -sIL --max-time 10 <url>`)
- If a link returns 4xx/5xx or times out, try to find the correct URL automatically (search for the tool/project by name, check GitHub, official site, etc.)
- If the correct URL cannot be determined automatically, report it to the user and ask what to do

**Structure**
- Does the page follow frontmatter rules (`title`, `description`, `created`, `updated`)?
- Is the page free of `#` h1 headings in the body?
- Does the selected `title` match the actual page content and topic?

## 3. Report findings

For each audited page, output a short report:

```
### path/to/page.md
- ✅ / ⚠️ / ❌  Freshness — note
- ✅ / ⚠️ / ❌  Sources — note
- ✅ / ⚠️ / ❌  Accuracy — note
- ✅ / ⚠️ / ❌  Structure — note
```

Use:
- ✅ no issues
- ⚠️ minor issue or uncertainty — flag for review
- ❌ clear problem — fix or remove

## 4. Fix what you can

For issues that are clear and low-risk (missing `updated`, broken frontmatter, structural problems), fix them directly.

Always validate that article content matches its current `title`. If it does not, automatically update the `title` so it accurately reflects the content.

For issues that require external verification (outdated claims, suspicious facts), flag them to the user — do not silently update facts you cannot verify.

## 5. Commit fixes

If any files were changed, commit them together:

```
docs: audit — fix [summary of what was fixed]
```
