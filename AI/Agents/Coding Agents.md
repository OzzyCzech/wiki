---
title: Coding Agent Tools
description: Přehled nástrojů pro správu a orchestraci AI coding agentů — paralelní běh, izolace worktrees, multi-agent workflows.
created: 2026-04-06
updated: 2026-09-18
---

Nástroje pro orchestraci AI coding agentů umožňují spouštět více agentů paralelně v izolovaných prostředích (Docker, Git worktrees), přepínat mezi nimi a reviewovat výstupy. Liší se platformou, licenčním modelem a podporovanými agenty.

- **[cmux](https://cmux.com/)** — nativní macOS terminál (Swift + AppKit) pro paralelní běh agentů: vertikální taby s git branchí, pracovním adresářem a porty, split panely, notifikační kroužky u procesů čekajících na pozornost, skriptovatelný vestavěný browser a CLI/socket API. Funguje s libovolným agentem spustitelným z terminálu (Claude Code, Codex, OpenCode, Gemini CLI). Postavený na libghostty jako knihovně, nikoli jako fork Ghostty; open source (GPL), iOS companion app v betě.

  ```bash
  brew install --cask cmux
  ```

- **[Orca](https://onorca.dev/)** — agent development environment pro paralelní běh více než 25 agentů (Claude Code, Codex, Cursor CLI, Copilot, Gemini, Grok, OpenCode, goose a další), každý ve vlastním izolovaném Git worktree. GPU renderovaný terminál s dělením panelů, vestavěný Chromium s design mode pro inspekci UI, nativní integrace GitHubu a Linearu, inline anotace diffů posílané zpět agentovi a vlastní CLI, kterým agent řídí prostředí. Desktop pro macOS (ARM i Intel), Windows a Linux, companion aplikace pro iOS a Android, plus režim remote worktrees přes SSH s automatickým reconnectem a port forwardingem. Open source (MIT), zdroják na [GitHubu](https://github.com/stablyai/orca).

- **[Superset](https://superset.sh/)** — desktop app pro paralelní spouštění agentů (Claude, Codex, Cursor, OpenCode, Gemini, Grok CLI a další) v izolovaných Git worktrees. Umí naplánované automatizace typu issue triage nebo aktualizace závislostí, běh workspace na vzdáleném stroji přes SSH, CLI a SDK pro skriptování a otevření worktree ve VS Code, Cursoru, Xcode, JetBrains IDE nebo terminálu. Kód a session zůstávají lokálně, cloud sync se týká jen metadat účtu. Zdrojový kód na GitHubu pod Elastic License 2.0 (ELv2).

  ```bash
  brew install superset-sh/tap/superset
  ```

- **[Agentation](https://www.agentation.com/)** — anotuje UI prvky a generuje z nich strukturovaný kontext pro agenty: CSS selektory, cesty k souborům, hierarchii komponent a computed styles, takže místo „ten modrý button" dostane agent přesné zaměření. Výstup lze zkopírovat do Claude Code nebo Codexu, nebo synchronizovat v reálném čase přes MCP; k dispozici jsou i webhooky a API. Instalace přes `npm install agentation`; zdarma pro jednotlivce a interní firemní použití.

- **[goose](https://goose-docs.ai/)** — open source lokální AI agent v Rustu pro engineering úkoly, dříve projekt Blocku, dnes vedený pod [Agentic AI Foundation](https://goose-docs.ai/) při Linux Foundation (Apache-2.0, vendor-neutral). Běží jako desktop app, CLI i API, rozšiřitelný přes 70+ MCP rozšíření a funguje s 15+ providery LLM (Anthropic, OpenAI, Google, Ollama, OpenRouter, Azure, Bedrock). Subagenti umí odbavovat úlohy paralelně — code review, research, zpracování souborů.

- **[T3 Code](https://github.com/pingdotgg/t3code)** — minimální control surface pro coding agenty na mobilu, webu i desktopu; podporuje Codex, Claude Code, Cursor, Grok Build, OpenCode a Google Antigravity. Open source (MIT), stále v rané fázi.

  ```bash
  npx t3@latest                  # vyzkoušení bez instalace
  brew install --cask t3-code    # macOS
  winget install T3Tools.T3Code  # Windows
  yay -S t3code-bin              # Arch Linux
  ```

  Před použitím je potřeba autentizovat příslušného agenta, například [Codex CLI](https://github.com/openai/codex) nebo Claude Code.

- **[JetBrains Air](https://air.dev/)** — standalone agentic vývojové prostředí od JetBrains, v public preview od března 2026. Paralelní agenti (Claude Agent, Codex, Gemini CLI, Junie i další ACP-kompatibilní) běží ve třech [prostředích](https://www.jetbrains.com/help/air/quick-start-with-air.html): lokální workspace, Git worktree na vlastní branchi, nebo izolovaný Docker kontejner pro nedůvěryhodný kód. Rozšiřitelné přes MCP. Běží na macOS, Linuxu i Windows (přes Toolbox, na Linuxu i install skriptem). Přístup k modelům jde přes předplatné JetBrains AI, přes vlastní účet u providera (Claude Pro/Max apod.) nebo BYOK.

- **[Emdash](https://emdash.com/)** — open source agentic development environment (Apache-2.0, YC W26) pro paralelní běh coding agentů — každý úkol v izolovaném Git worktree, vestavěný code review, editor souborů a prohlížeč pro náhled aplikace; správa promptů, skills a MCP nástrojů na jednom místě. Novější verze přidávají plánování opakované práce a remote development. Podporuje macOS, Windows a Linux a přes 25 agentů (Claude Code, Codex, Cursor, Amp, Antigravity) bez vendor lock-inu.

  ```bash
  brew install --cask emdash
  ```

- **[Conductor](https://www.conductor.build/)** — Mac app pro orchestraci více agentů (Claude Code, Codex, Cursor) současně v izolovaných pracovních prostorech, s průběžným přehledem, co který agent dělá, a review a mergem změn. Placený, closed source; instalace přes `brew install --cask conductor`.

## Sources

- [generalaction/emdash (GitHub)](https://github.com/generalaction/emdash) — licence (Apache-2.0) a popis projektu Emdash (accessed 2026-09-18)
