---
title: Coding Agent Tools
description: Přehled nástrojů pro správu a orchestraci AI coding agentů — paralelní běh, izolace worktrees, multi-agent workflows.
created: 2026-04-06
updated: 2026-04-15
---

Nástroje pro orchestraci AI coding agentů umožňují spouštět více agentů paralelně v izolovaných prostředích (Docker, Git worktrees), přepínat mezi nimi a reviewovat výstupy. Liší se platformou, licenčním modelem a podporovanými agenty.

- **[cmux](https://cmux.com/)**
  Native macOS terminal postavený na Ghostty, navržený pro správu více AI coding agentů zároveň — open source (GPL-3.0), ke stažení přes Homebrew.

- **[Orca](https://github.com/stablyai/orca)** — Worktree-native IDE pro orchestraci více CLI coding agentů paralelně s vestavěným Git review a GitHub integrací; podporuje macOS, Windows a Linux.

- **[Superset](https://superset.sh/)**
  Terminálová app pro paralelní spouštění AI coding agentů přes izolované Git worktrees — free tier, zdrojový kód na GitHubu (ELv2); API klíče si spravuje uživatel přímo u providera.

- **[Agentation](https://www.agentation.com/)**
  Anotuje UI prvky a generuje strukturovaný kontext, který AI coding agenti mohou číst a jednat podle něj — zdarma pro jednotlivce a interní firemní použití.

- **[goose](https://block.github.io/goose/)**
  Open source lokální AI agent od Blocku pro engineering úkoly; rozšiřitelný přes MCP servery, funguje s libovolným LLM.

- **[T3 Code](https://github.com/pingdotgg/t3code)**
  Minimální GUI pro coding agenty (Codex a Claude, další providery plánováni); rychlý start `npx t3`, desktop builds přes [Releases](https://github.com/pingdotgg/t3code/releases) — open source.

  ```bash
  # macOS
  brew install --cask t3-code

  # Windows
  winget install T3Tools.T3Code
  ```

  Před použitím je potřeba autentizovat [Codex CLI](https://github.com/openai/codex) nebo Claude Code.

- **[JetBrains Air](https://air.dev/)**
  Standalone agentic vývojové prostředí od JetBrains — paralelní agenti (Claude, Codex, Gemini CLI, Junie) s izolací přes Docker nebo Git worktrees; vyžaduje JetBrains AI Pro nebo Ultimate, případně vlastní API klíč (BYOK).

- **[Conductor](https://www.conductor.build/)**
  Mac app pro orchestraci více AI coding agentů (Claude Code, Codex) současně v izolovaných pracovních prostorech — placený nástroj.

## Sources

- [stablyai/orca (GitHub)](https://github.com/stablyai/orca) — README: positioning, supported platforms, supported agents, and core features (accessed 2026-04-15)
