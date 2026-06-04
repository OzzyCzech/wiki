---
title: Skills
description: Curated open-source skill collections for Claude Code and AI coding agents.
created: 2026-04-08
updated: 2026-06-04
---

Open-source skill collections that extend Claude Code and other AI coding agents with specialized workflows. The underlying format is the open [Agent Skills](../../tools/agent-skills) standard from Anthropic.

## 🛠️ Skills

- **[Superpowers](https://github.com/obra/superpowers)** — kompletní agentic workflow framework od Jesseho Vincenta (Prime Radiant); kompozitní "skills" řídí celý vývojový cyklus: brainstorming → plán → implementace přes subagenty → TDD → code review → merge/PR. Agent automaticky detekuje relevantní skill a dodržuje ho jako povinný workflow. Funguje s Claude Code, Cursor, Codex, OpenCode, Gemini CLI a GitHub Copilot CLI.

  Install in Claude Code:

  ```bash
  /plugin install superpowers@claude-plugins-official
  ```

  Klíčové skills: `brainstorming`, `writing-plans`, `subagent-driven-development`, `test-driven-development`, `systematic-debugging`, `using-git-worktrees`, `requesting-code-review`, `writing-skills`

- **[agent-skills](https://github.com/addyosmani/agent-skills)** — 19 production-grade engineering workflow skills for AI coding agents covering the full dev lifecycle (define → plan → build → verify → review → ship); works with Claude Code, Cursor, Gemini CLI, Windsurf, and GitHub Copilot

  Install in Claude Code:

  ```bash
  /plugin marketplace add addyosmani/agent-skills
  /plugin install agent-skills@addy-agent-skills
  ```

  Key skills: `spec-driven-development`, `test-driven-development`, `security-and-hardening`, `performance-optimization`, `code-review-and-quality`, `shipping-and-launch`

- **[mattpocock/skills](https://github.com/mattpocock/skills)** — pragmatic engineering skills by Matt Pocock (Total TypeScript / AI Hero); addresses four common agent failure modes — misalignment (`/grill-me`, `/grill-with-docs` for upfront requirements interrogation), verbosity (shared-language `CONTEXT.md` + ADRs built from grilling), broken feedback loops (`/tdd` red-green-refactor, `/diagnose` debugging), and architectural drift; small composable skills, model-agnostic; includes a `/setup-matt-pocock-skills` wizard that asks for issue-tracker preference (GitHub/Linear/local), triage labels, and doc location

  Install:

  ```bash
  npx skills@latest add mattpocock/skills
  ```

- **[caveman](https://github.com/JuliusBrussee/caveman)** — "why use many token when few do trick" — skill/plugin that makes the agent talk like a caveman, cutting ~75% of output tokens while keeping full technical accuracy; includes intensity levels (Lite / Full / Ultra), 文言文 classical Chinese mode, terse commit messages (`caveman-commit`), one-line code reviews (`caveman-review`), and a `caveman-compress` tool that rewrites memory files (e.g. `CLAUDE.md`) into compressed prose saving ~45% of input tokens

  Install in Claude Code:

  ```bash
  claude plugin marketplace add JuliusBrussee/caveman
  claude plugin install caveman@caveman
  ```

  Any agent (Cursor, Copilot, Windsurf, Cline, Codex):

  ```bash
  npx skills add JuliusBrussee/caveman
  ```

- **[claude-improve](https://github.com/TerenceBristol/claude-improve)** — self-improving retrospective skill; after each conversation Claude reflects on what went wrong and updates its own CLAUDE.md rules to do better next time

## 🗂️ Skill managers

- **[Chops](https://chops.md/)** — macOS desktop app to browse, edit, and organize agent skills across Claude Code, Cursor, Codex, Windsurf, and Amp from a single interface; open source (FSL-1.1-MIT)

## 📋 CLAUDE.md templates

Reusable `CLAUDE.md` behavioral guidelines that can be merged into any project's configuration.

- **[andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills)** — single CLAUDE.md derived from Andrej Karpathy's observations on common LLM coding pitfalls; enforces four principles: think before coding (surface assumptions and tradeoffs), simplicity first (no speculative abstractions), surgical changes (touch only what's needed), and goal-driven execution (define verifiable success criteria before implementing)

## 🔗 Related

- [Graphify](../../tools/graphify) — knowledge graph builder skill (Tree-sitter + LLM extraction) for codebase understanding
- [Claude Code](../claude-code) — commands and settings reference
- [Plugins](../plugins) — Claude Code plugin marketplace
