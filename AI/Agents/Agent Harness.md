---
title: Agent Harness
description: Co je agent harness, Ralph loop a přehled harness nástrojů a CLI pro běh coding agentů ve smyčce.
created: 2026-09-25
updated: 2026-09-25
---

Agent harness je softwarová vrstva kolem jazykového modelu, která z něj dělá agenta. Stránka stručně vysvětluje pojem, techniku Ralph loop a shrnuje open-source harness nástroje.

## Co je harness

Model sám o sobě je bezstavový a umí jen generovat text. Harness mu dodává všechno ostatní — platí zjednodušená rovnice **agent = model + harness** ([Wikipedia](https://en.wikipedia.org/wiki/Agent_harness)):

- **Řídicí smyčka** — posílá modelu kontext, provede akce, které si vyžádá, a vrátí mu výsledky
- **Nástroje** — práce se soubory, shell, vyhledávání, MCP servery
- **Kontext a paměť** — historie konverzace, komprese dlouhých sessions, trvalá paměť mezi sessions
- **Bezpečnost** — oprávnění, schvalování akcí, sandbox

Typickým harnessem je [Claude Code](/ai/claude-code/claude-code), Codex nebo [Oh My Pi](../oh-my-pi). Rozlišuje se *inner harness* od výrobce modelu a *outer harness*, který si nad ním skládá uživatel z vlastní konfigurace, skriptů a smyček ([Wikipedia](https://en.wikipedia.org/wiki/Agent_harness)). Nástroje níže jsou většinou outer harnessy — obalují existující CLI agenty.

## Ralph loop

Techniku popsal [Geoffrey Huntley](https://ghuntley.com/ralph/) a pojmenoval ji po Ralphu Wiggumovi ze Simpsonových. V nejjednodušší podobě jde o nekonečnou bash smyčku, která agentovi opakovaně posílá stejný prompt:

```bash
while :; do cat PROMPT.md | claude ; done
```

Hlavní principy:

- **Jeden úkol na iteraci** — šetří kontextové okno
- **Deterministický backpressure** — testy, typy a linter odmítnou nehotovou práci
- **Selhání jako signál** — neúspěch znamená ladit prompt, ne měnit nástroj
- **Eventual consistency** — nedokonalost se vyřeší dalšími průchody

Nejlépe funguje u nových (greenfield) projektů.

## Ralph CLI nástroje

- **[Ralph](https://ralph-cli.dev/)** — CLI pro dlouho běžící vývoj podle PRD: `ralph init` založí konfiguraci, `ralph run` spustí smyčku, která rozloží feature na úkoly, po každém ověří výsledek (až 3 opakování) a na konci otevře PR na GitHubu. Pamatuje si kontext mezi sessions, má guardrails (timeouty, detekce zaseknutí) a podporuje Claude Code, Codex CLI a Cursor CLI. TypeScript/Bun, MIT, [GitHub](https://github.com/nitodeco/ralph).

  ```bash
  curl -fsSL https://raw.githubusercontent.com/nitodeco/ralph/main/scripts/install.sh | bash
  ```

- **[Ralph Orchestrator](https://github.com/mikeyobrien/ralph-orchestrator)** — orchestrátor v Rustu, který koordinuje specializované persony („hats“) přes události a pouští dál jen práci, která projde gates (testy, lint, typecheck). Vestavěné vzory code-assist, debug, research a review; backendy Claude Code, Codex, Gemini CLI, Copilot CLI, Amp, OpenCode, Pi, Kiro a další. MIT.

  ```bash
  npm install -g @ralph-orchestrator/ralph-cli
  ```

- **[Open Ralph Wiggum](https://github.com/Th0rgal/open-ralph-wiggum)** — minimální implementace: `ralph "prompt"` posílá agentovi stejný prompt, dokud nevypíše `<promise>COMPLETE</promise>` nebo nedojde na `--max-iterations`. Podporuje OpenCode (výchozí), Claude Code, Codex, Copilot CLI, Cursor Agent a Qwen Code. TypeScript/Bun, MIT.

  ```bash
  npm install -g @th0rgal/ralph-wiggum
  ```

- **[Wiggum CLI](https://wiggum.app/)** — prohledá codebase (stack a konvence), s AI vede rozhovor, ze kterého vytvoří specifikaci, a pak projde cyklus plán → implementace → test → ověření → PR. Příkaz `wiggum agent` umí sám odbavovat backlog z GitHubu. Pro Claude Code, Codex CLI a další CLI agenty; self-hosted verze je open source ([GitHub](https://github.com/federiconeri/wiggum-cli)).

  ```bash
  npm install -g wiggum-cli
  ```

## Harness frameworky

- **[OpenHarness](https://github.com/HKUDS/OpenHarness)** — open-source harness v Pythonu od HKUDS se 40+ nástroji (soubory, shell, web, MCP), skills ve formátu [anthropics/skills](/ai/tools/agent-skills), pamětí v `MEMORY.md`, načítáním `CLAUDE.md` a automatickou kompresí kontextu. Má režimy oprávnění (Default/Auto/Plan), pravidla pro cesty a příkazy, subagenty a podporu pluginů pro Claude Code. Providery Claude, OpenAI, Copilot, Kimi, GLM, MiniMax a libovolné kompatibilní API. Součástí je osobní agent *ohmo* pro Slack, Telegram, Discord a Feishu. CLI příkaz `oh`, MIT.

  ```bash
  pip install openharness-ai
  ```

- **[Hermes Agent](../hermes-agent)** — self-hosted runtime od Nous Research s trvalou pamětí, samogenerovanými skills a messaging gatewayi.

Pro správu více agentů najednou (paralelní běh, worktrees, vzdálené stroje) viz [Coding Agent Tools](../coding-agents) — patří tam i [Harness](https://github.com/autonomous-ai/openharness) od Autonomous.

## Sources

- [best-of-Agent-Harnesses](https://github.com/RyanAlberts/best-of-Agent-Harnesses) — seřazený seznam dalších harnessů (accessed 2026-09-25)
