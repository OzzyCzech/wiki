---
description: Research a topic on the web and propose where it fits into the wiki
argument-hint: [topic or question]
---

Research a topic across the web and propose where it fits into the wiki. Unlike `/add`, the input is a question or topic — not a known source (e.g. "local-first databases", "Rust HTTP clients", "AI code review tools"). Stop for review before writing.

## 1. Check the wiki first

**Always start here, before anything else.** Browse `./` and search it with `Grep` and `Glob`:

- Is there already a page on this topic? → suggest extending it instead of creating a new one.
- Are there adjacent pages that constrain placement or naming? → note them.
- Get a feel for the existing structure so the proposed placement matches conventions.

Report findings before moving on. If a strong existing page already covers the topic, ask whether to update it or still create something new.

## 2. Clarify the scope

If the topic is ambiguous, ask one short question before researching. Examples of ambiguity:

- Comparison of tools vs. conceptual overview vs. single product deep-dive?
- Scope: "AI agents" → frameworks, hosted products, or theory?
- Czech vs. English target page?

Skip the question if scope is obvious from the topic and the wiki context found in step 1.

## 3. Gather sources from the web

Spawn an `Agent` (subagent_type `general-purpose` or `Explore`) to run `WebSearch` + `WebFetch` in parallel. Aim for **3–5 high-signal sources**:

- Official sites and docs first
- Reputable comparison articles, benchmarks, or specs
- GitHub READMEs for open-source tools
- Avoid SEO listicles, sponsored content, marketing landing pages

Ask the subagent to return:

- A short synthesis (what is this, why it matters, key concepts)
- A list of concrete tools/projects/resources with URLs and one-line descriptions
- Notable disagreements between sources, if any
- Time-sensitive claims flagged as such (so we discard them per `/add` rules)

Run searches in parallel, not serially.

## 4. Propose a placement and stop

Before writing anything to the wiki, present:

- **Summary** — 2–4 sentences of what was found
- **Proposed placement** — exact file path; new page vs. update existing
- **Outline** — section headings or bullet list of items to include
- **Sources** — bullet list of URLs that will back the claims
- **Open questions** — anything ambiguous worth confirming

Then **wait for the user to approve, redirect, or refine.** Do not write to the wiki yet.

## 5. After approval — hand off to `/add` flow

Once approved, follow the steps from `.claude/commands/add.md` starting at step 3 (Process the content). The only delta: commit as `docs: research [topic] — add [page]` (or `update [page]`).

## Defaults

- **Language:** English unless the topic is clearly Czech-only (e.g. Czech books, Czech services).
- **Depth:** medium (3–5 sources). For deeper research, the user can say "go deeper" and we expand.
- **Always stop at step 4** for review — research is non-deterministic and the user should approve before commits land.
