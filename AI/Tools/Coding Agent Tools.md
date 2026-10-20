---
title: Coding Agent Tools
description: Přehled nástrojů pro správu a orchestraci AI coding agentů — paralelní běh, izolace worktrees, multi-agent workflows.
created: 2026-04-06
updated: 2026-10-20
---

Nástroje pro orchestraci AI coding agentů umožňují spouštět více agentů paralelně v izolovaných prostředích (Docker, Git worktrees), přepínat mezi nimi a reviewovat výstupy. Liší se platformou, licenčním modelem a podporovanými agenty.

- **[Herdr](https://herdr.dev/)** — runtime, na kterém coding agenti běží: jediná Rust binárka bez Electronu, spouštěná v terminálu, který už používáš. Architektura je server a klienti — server vlastní panely a stav procesů, klientů se může připojit víc najednou a každý si drží vlastní workspace a tab. Hierarchie je [session → workspace → tab → pane](https://herdr.dev/docs/concepts/); agent se v panelu rozpozná automaticky a jeho stav je `working`, `blocked`, `done`, `idle` nebo `unknown`, takže je na první pohled vidět, který čeká na odpověď. Odpojení (`ctrl+b q`) ani výpadek SSH terminály nezabije; po restartu serveru nebo stroje se obnoví uložené rozložení a u podporovaných agentů i session, ale [původní procesy nepřežijí](https://github.com/herdrdev/herdr). Agenti ovládají Herdr sami přes CLI a socket API — umí zakládat panely, posílat si navzájem prompty a čekat, až je jiný agent skutečně zablokovaný. Lokální i uložené SSH stroje se slévají do jednoho seznamu agentů, ovládání jde tmux-style prefixem i myší, panely a workflow rozšiřují pluginy. Apache-2.0 (ověřeno 2026-10-20).

  ```bash
  brew install herdr
  ```


- **[cmux](https://cmux.com/)** — nativní macOS terminál (Swift + AppKit) pro paralelní běh agentů: vertikální taby s git branchí, pracovním adresářem a porty, split panely, notifikační kroužky u procesů čekajících na pozornost, skriptovatelný vestavěný browser a CLI/socket API. Funguje s libovolným agentem spustitelným z terminálu (Claude Code, Codex, OpenCode, Gemini CLI). Postavený na libghostty jako knihovně, nikoli jako fork Ghostty; open source (GPL), iOS companion app v betě.

  ```bash
  brew install --cask cmux
  ```


- **[Orca](https://onorca.dev/)** — agent development environment pro paralelní běh přes 30 agentů (Claude Code, Codex, Cursor, Copilot, Grok, OpenCode, Amp, Devin, Pi, Hermes Agent, goose, Cline, Kimi, Qwen Code a další; funguje s libovolným CLI agentem), každý ve vlastním izolovaném Git worktree. Jeden prompt umí rozeslat několika agentům najednou, porovnat výsledky a zamergovat ten nejlepší. Terminály s WebGL renderováním, neomezeným dělením panelů a scrollbackem, který přežije restart; vestavěný Chromium s design mode, kde kliknutí na UI prvek pošle agentovi jeho HTML, CSS a oříznutý screenshot; nativní integrace GitHubu a Linearu, inline anotace diffů posílané zpět agentovi a vlastní CLI, kterým agent řídí prostředí (`orca worktree create`, `snapshot`, `click`, `fill`). [Computer Use](https://www.onorca.dev/docs/cli/computer-use) přes `orca computer` nechá agenta ovládat i nativní desktopové aplikace přes accessibility stromy a screenshoty — zatím beta, na macOS vyžaduje oprávnění Accessibility a Screen Recording. Dále sledování spotřeby a resetů rate limitů u Claude a Codexu s přepínáním účtů bez nového přihlašování, quick open napříč worktrees, soubory, agenty a kontextem repozitáře, a notifikace včetně příznaku nepřečteno. Desktop pro macOS (ARM i Intel), Windows a Linux, companion aplikace pro iOS a Android, plus režim remote worktrees přes SSH s automatickým reconnectem a port forwardingem. Sbírá anonymní telemetrii, [vypnout jde](https://www.onorca.dev/docs/telemetry). Open source (MIT), zdroják na [GitHubu](https://github.com/stablyai/orca) (ověřeno 2026-10-20).

  ```bash
  brew install --cask stablyai/orca/orca
  ```


- **[Paseo](https://paseo.sh/)** — open-source control plane pro coding agenty, který sjednocuje Claude Code, Codex, OpenCode, Pi, Cursor a další providery v desktopové, mobilní a webové aplikaci. Agenti běží lokálně nebo na vzdáleném stroji s vlastními přihlašovacími údaji; přístup zvenčí lze řešit end-to-end šifrovaným relayem, lokální sítí nebo vlastním tunelem. Podporuje izolované Git worktrees, plánované úlohy, spolupráci v týmu a automatizaci přes MCP, CLI či TypeScript SDK. Apache-2.0.


- **[Superset](https://superset.sh/)** — desktop app pro paralelní spouštění agentů (Claude, Codex, Cursor, OpenCode, Gemini, Grok CLI a další) v izolovaných Git worktrees. Umí naplánované automatizace typu issue triage nebo aktualizace závislostí, běh workspace na vzdáleném stroji přes SSH, CLI a SDK pro skriptování a otevření worktree ve VS Code, Cursoru, Xcode, JetBrains IDE nebo terminálu. Kód a session zůstávají lokálně, cloud sync se týká jen metadat účtu. Zdrojový kód na GitHubu pod Elastic License 2.0 (ELv2).

  ```bash
  brew install superset-sh/tap/superset
  ```


- **[goose](https://goose-docs.ai/)** — open source lokální AI agent v Rustu pro engineering úkoly, dříve projekt Blocku, dnes vedený pod [Agentic AI Foundation](https://goose-docs.ai/) při Linux Foundation (Apache-2.0, vendor-neutral). Běží jako desktop app, CLI i API, rozšiřitelný přes 70+ MCP rozšíření a funguje s 15+ providery LLM (Anthropic, OpenAI, Google, Ollama, OpenRouter, Azure, Bedrock). Subagenti umí odbavovat úlohy paralelně — code review, research, zpracování souborů.


- **[T3 Code](https://github.com/pingdotgg/t3code)** — minimální control surface pro coding agenty na mobilu, webu i desktopu; podporuje Codex, Claude Code, Cursor, Grok Build, OpenCode a Google Antigravity. Open source (MIT), stále v rané fázi.

  ```bash
  npx t3@latest                  # vyzkoušení bez instalace
  brew install --cask t3-code    # macOS
  winget install T3Tools.T3Code  # Windows
  yay -S t3code-bin              # Arch Linux
  ```

  Před použitím je potřeba autentizovat příslušného agenta, například [Codex CLI](https://github.com/openai/codex) nebo Claude Code.

## Others

Nástroje s menším záběrem, v rané fázi vývoje nebo uzavřené a svázané s jednou platformou.

- **[Graftty](https://github.com/btucker/graftty)** — terminálový multiplexer pro macOS (MIT) na libghostty, který sdružuje persistentní sessions podle Git worktree; volitelný režim Agent Teams přidává instrukce pro worktrees a zprávy mezi agenty (ověřeno 2026-10-08).

- **[Vertical Tabs](https://verticaltabs.com/)** — terminálové prostředí pro macOS s projektovými workspaces, vertikálními taby a vestavěným Git GUI včetně worktrees; verze pro Windows a Linux jsou plánované (ověřeno 2026-10-08).

- **[Wortel](https://wortel.sh/)** — nativní macOS terminál (Swift + AppKit) na libghostty s pojmenovanými sessions, samostatným worktree pro každou branch a vestavěnými diffy; zdarma pro macOS 14+ (ověřeno 2026-10-08).

- **[Nimbalyst](https://nimbalyst.com/)** — vizuální workspace, kde se výstup agenta edituje přímo ve WYSIWYG editorech pro Markdown, mockupy, Mermaid nebo Excalidraw a změny se přijímají jako red/green diff ve vyrenderovaném dokumentu; MIT, zdroják na [GitHubu](https://github.com/nimbalyst/nimbalyst) (ověřeno 2026-10-20).

- **[MonoCode](https://www.usemono.dev/)** — desktopové GUI pro Claude Code, Codex, Cursor a další, se sessions v tabech a společným composerem; využívá už nainstalované agenty a jejich předplatné, projekt je v rané fázi. MIT, zdroják na [GitHubu](https://github.com/hardbeat920/monocode) (ověřeno 2026-10-01).

- **[Harness](https://www.autonomous.ai/harness-app)** — nativní command center od Autonomous pro 14+ agentů napříč laptopem, domácím serverem i cloudem bez nastavování SSH či VPN, spojené end-to-end šifrovaně přes WebRTC; open source jako [openharness](https://github.com/autonomous-ai/openharness) (MIT).

- **[Agentation](https://www.agentation.com/)** — spíš než orchestrátor je to generátor kontextu: anotuje UI prvky a posílá agentovi CSS selektory, cesty k souborům, hierarchii komponent a computed styles, buď zkopírované, nebo v reálném čase přes MCP.

- **[JetBrains Air](https://air.dev/)** — standalone agentic vývojové prostředí od JetBrains v public preview; paralelní ACP-kompatibilní agenti běží v lokálním workspace, v Git worktree na vlastní branchi, nebo v izolovaném Docker kontejneru pro nedůvěryhodný kód. macOS, Linux i Windows.

- **[Emdash](https://emdash.com/)** — open source agentic development environment (Apache-2.0, YC W26) pro paralelní běh 25+ agentů, každý úkol v izolovaném Git worktree, s vestavěným code review a prohlížečem pro náhled aplikace; macOS, Windows i Linux.

- **[Conductor](https://www.conductor.build/)** — placená closed source Mac app pro orchestraci Claude Code, Codexu a Cursoru současně v izolovaných pracovních prostorech, s review a mergem změn.

## Sources

- [generalaction/emdash (GitHub)](https://github.com/generalaction/emdash) — licence (Apache-2.0) a popis projektu Emdash (accessed 2026-09-18)
