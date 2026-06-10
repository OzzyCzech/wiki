---
title: A Human in Control
description: curl maintainer Daniel Stenberg's stance on AI in software development — tools assist, but humans stay responsible for every merged line.
created: 2026-06-10
updated: 2026-06-10
---

A summary of Daniel Stenberg's blog post [*A human in control*](https://daniel.haxx.se/blog/2026/06/10/a-human-in-control/) (2026), describing how the [curl](https://curl.se/) project positions itself between uncritical AI adoption and blanket AI rejection: AI is treated as a tool, while humans retain authority over every decision that ends up in the codebase.

## Core principle

curl is developed and driven by humans, *assisted* by tools. The project does not hand responsibility to machines — every merged line is determined fit by a human, and the maintainers stand behind it as humans. No AI agent merges code on its own.

## What curl allows

- **AI-based diagnostic and static-analysis tools** — among the best tools for detecting coding mistakes early, used to surface potential issues
- **AI review bots as a supplementary check** — they can flag issues in pull requests, but human review stays primary
- **AI assistance for initial drafting** — getting the first code written is not the hard part

## What curl disallows

- **Unreviewed AI-generated merges** — responsibility is never handed to a machine
- **AI-only decision making** — humans decide what is fitting and correct
- **AI-generated walls of text in collaboration** — tone-deaf bulk AI text "introduces sand in the machine" and harms human-to-human community work

## Why it matters

The hard part of software is not writing the initial code — it is the long-term maintenance and iteration over decades, which demands deep project knowledge that humans must hold. Human code review and accountability remain non-negotiable regardless of where a contribution originated.
