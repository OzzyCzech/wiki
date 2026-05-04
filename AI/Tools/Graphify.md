---
title: Graphify
description: Open-source knowledge graph skill for AI coding assistants — Tree-sitter, NetworkX, Leiden clustering, and assistant-facing commands.
created: 2026-04-12
updated: 2026-04-12
---

[Graphify](https://graphify.net) is an open-source “skill” aimed at AI coding assistants. It builds a queryable knowledge graph from a repository’s code, documentation, PDFs, and images so assistants can reason about structure and cross-file relationships, not only retrieve text chunks.

## What it does

The project combines **Tree-sitter** static analysis (ASTs, call graphs, docstrings across many languages) with **LLM-based** semantic extraction from prose and **vision models** for diagrams. Extracted nodes and edges are merged into a **NetworkX** graph; **Leiden** community detection groups related parts without relying on vector embeddings. The pipeline also surfaces high-degree “god” nodes and highlights unexpected cross-file or cross-domain edges.

Outputs are written under `graphify-out/`, including an interactive `graph.html`, a machine-readable `graph.json`, and a `GRAPH_REPORT.md` audit-style summary, plus a `cache/` directory for incremental work.

## Install and CLI

- **Python:** 3.10+ (as stated on the project site).
- **PyPI package name:** `graphifyy`; the command-line tool is **`graphify`**.
- Typical install: `pip install graphifyy && graphify install` (per upstream docs).

Assistant-oriented slash commands advertised include `/graphify`, `/graphify query`, `/graphify path`, and `/graphify explain`. Any environment that can run shell commands can invoke `graphify`.

## Models and privacy

Graphify does **not** bundle an LLM. Semantic extraction uses the API key already configured in your assistant (e.g. Claude or Codex). The project states that only **semantic descriptions** are sent upstream—not full raw source files.

## Pipeline (high level)

Upstream documentation describes stages such as: detect → extract → build graph → cluster (Leiden) → analyze → report → export (HTML, JSON, Obsidian-oriented flows). Supporting pieces include modules for URL ingest, caching, validation, optional watch mode, and an MCP-oriented serve path.

## Reported examples

The site documents illustrative runs (exact numbers are claims from the project, not independently verified here):

- A small **httpx**-style corpus: on the order of hundreds of nodes and edges, with named “god” nodes such as client and request/response types.
- A larger mixed corpus (code repos, papers, diagrams): roughly **71.5×** fewer tokens for queries versus a naive baseline in their scenario, as claimed on the marketing page.

## Security posture (as described by the project)

The documentation emphasizes strict handling of URLs (http/https only), size and time limits on downloads, path containment checks, and HTML escaping of labels to reduce SSRF, injection, and XSS risks. The project reports **no telemetry**; outbound calls are tied to semantic extraction via your configured model API.

## Sources

- [Graphify](https://graphify.net) — product overview, install snippet, pipeline, examples, comparison table, FAQ, and security notes (accessed 2026-04-12)
