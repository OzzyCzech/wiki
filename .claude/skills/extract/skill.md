---
name: extract
description: Extract useful information from URLs, including articles, docs, product pages, GitHub repositories, announcements, and reference pages. Use when the user asks to extract, vytěžit, summarize, process, or turn a URL into structured notes, facts, wiki input, or Markdown.
allowed-tools: Bash,Write,Read,WebFetch,WebSearch
---

# Extract

Extract information from a URL into clean, reusable Markdown. Prefer durable facts, technical details, key differentiators, examples, and source-backed claims over marketing copy.

## Workflow

1. Fetch the URL with `WebFetch` when possible.
2. If the page is an article or blog post and cleaner Markdown is needed, use [mreader](https://github.com/OzzyCzech/mreader):

   ```bash
   npx mreader "URL"
   ```

3. Extract only information with lasting reference value:
   - names, URLs, authors, dates, versions, platforms, licenses
   - concrete capabilities, constraints, and integration points
   - commands, APIs, options, examples, and important terminology
   - source attribution when a claim is not already tied to the linked URL in the content
4. Discard launch hype, pricing/free-tier details, repeated navigation text, cookie banners, social widgets, and unsupported claims.
5. If the user wants wiki processing, hand the result to the `/process` workflow instead of saving a standalone extraction.

## `mreader` options

- `-o file.md` — save to file
- `-j` — output JSON with title, author, content, and metadata
- `--no-frontmatter` — omit YAML frontmatter
- `--no-content-negotiation` — skip `Accept: text/markdown`, always extract from HTML
- `--url <url>` — base URL for stdin mode (`curl ... | mreader - --url <url>`)

## Output

Unless the user asks for a file, respond with:

```markdown
## Summary
[2-4 sentences with the main point]

## Extracted facts
- [Fact with relevant source link if needed]
- [Fact with relevant source link if needed]

## Useful details
- [Commands, APIs, options, examples, or constraints]

## Notes
- [Unclear, missing, or time-sensitive information, if any]
```
