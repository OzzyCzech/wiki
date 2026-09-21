---
title: Readwise
description: Highlight sync and spaced repetition for everything you read, plus the Reader read-it-later app.
created: 2026-09-21
updated: 2026-09-21
---

[Readwise](https://readwise.io/) collects highlights from everything you read into one place and resurfaces them so they do not die in the margins. Its second product, Reader, is the read-it-later app where new highlights come from.

## Highlights and daily review

Readwise pulls highlights from Kindle, Apple Books, Instapaper, X and other sources, then sends a daily selection by email and in the app. The scheduling follows spaced repetition — the point is repeated exposure over time rather than one pass at reading. Highlights can be searched, tagged and annotated, and they sync onward into Obsidian, Notion, Roam Research or Evernote, where the export keeps running continuously rather than as a one-off dump.

## Reader

[Reader](https://readwise.io/read) is a read-it-later app that handles web articles, RSS feeds, PDFs, EPUBs, email newsletters, YouTube videos with transcript highlighting, X threads and uploaded documents. Anything highlighted there flows straight into the Readwise library.

- Runs on web, iOS, Android, Mac and Windows, with extensions for Chrome, Firefox and Safari
- Sends documents to Kindle and works with e-ink devices such as BOOX — see [Kindle](../kindle) for the Amazon side of that workflow
- Ghostreader, an AI assistant that defines terms and explains passages in place
- Text-to-speech with adjustable speed, offline access, full-text search and keyboard-driven navigation

## API

The [public API](https://readwise.io/api_deets) lives at `https://readwise.io/api/v2/` and authenticates with an `Authorization: Token <token>` header.

- Export all highlights (`GET /export/`, paginated), create highlights (`POST /highlights/`), list sources (`GET /books/`) and read or complete the daily review (`GET /review/`, `POST /review/complete/`)
- Full CRUD on individual highlights and on tags for both highlights and books
- Rate limit of 240 requests per minute per token, dropping to 20 per minute for the highlight and book list endpoints; a `429` response carries a `Retry-After` header
- Reader has its own separate API, and webhooks push real-time notifications when highlights or documents change
- An MCP server and a CLI give an AI agent direct access to the library
