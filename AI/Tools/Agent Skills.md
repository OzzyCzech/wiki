---
title: Agent Skills
description: Open standard for packaging procedural knowledge into folders that AI agents load on demand. Originally from Anthropic, now adopted across Claude Code, Cursor, Codex, Hermes, and many other tools.
created: 2026-06-04
updated: 2026-06-04
---

**Agent Skills** je otevřený formát pro rozšiřování schopností AI agentů specializovanými znalostmi a workflow. Skill je obyčejná složka obsahující soubor `SKILL.md` s metadaty a instrukcemi — agent ji načte teprve když ji k úloze potřebuje. Standard původně vyvinul [Anthropic](https://www.anthropic.com/) a uvolnil jako otevřenou specifikaci. Centrální rozcestník komunity je [agentskills.io](https://agentskills.io/).

## Formát

Skill je složka s povinným `SKILL.md` a volitelnými soubory:

```
my-skill/
├── SKILL.md          # Required: metadata + instructions
├── scripts/          # Optional: executable code
├── references/       # Optional: documentation
├── assets/           # Optional: templates, resources
└── ...               # Any additional files or directories
```

`SKILL.md` musí v hlavičce obsahovat minimálně `name` a `description`. Tělo obsahuje instrukce, jak má agent skill aplikovat.

## Progressive disclosure

Agenti načítají skills ve třech fázích, aby šetřili kontext:

1. **Discovery** — při startu si agent načte jen `name` a `description` každého skillu
2. **Activation** — když úloha odpovídá popisu skillu, agent natáhne celý `SKILL.md` do kontextu
3. **Execution** — agent následuje instrukce, případně spouští bundled kód nebo načítá referenční soubory

Plné instrukce se tedy zatěžují **pouze on-demand**, takže agent může mít k dispozici velký počet skills s minimální kontextovou stopou.

## Kde se používá

Standard adoptovalo přes 40 agentích produktů, mimo jiné:

- **Coding agents** — [Claude Code](https://claude.ai/code), [Cursor](https://cursor.com/), [GitHub Copilot](https://github.com/), [OpenAI Codex](https://developers.openai.com/codex), [Gemini CLI](https://geminicli.com/), [OpenCode](https://opencode.ai/), [Goose](https://block.github.io/goose/), [Roo Code](https://roocode.com/), [Junie](https://junie.jetbrains.com/), [VS Code](https://code.visualstudio.com/), [Kiro](https://kiro.dev/), [TRAE](https://trae.ai/)
- **Autonomní agenti / runtimes** — [Hermes Agent](../../agents/hermes-agent), [OpenHands](https://openhands.dev/), [Letta](https://www.letta.com/), [fast-agent](https://fast-agent.ai/), [nanobot](https://nanobot.wiki/), [Workshop](https://workshop.ai/)
- **Platformy / IDE** — [Laravel Boost](https://github.com/laravel/boost), [Spring AI](https://docs.spring.io/spring-ai/reference), [Databricks Genie Code](https://databricks.com/), [Snowflake Cortex Code](https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code), [Tabnine](https://www.tabnine.com/)

Aktuální seznam udržuje [agentskills.io/clients](https://agentskills.io/clients).

## Hermes Agent

[Hermes Agent](../../agents/hermes-agent) sdílí ten samý standard a navíc umí skills **automaticky generovat za běhu** — když narazí na opakující se úlohu, vytvoří si vlastní SKILL.md a uloží ho do své library. Built-in, optional a komunitní skills se instalují přes Skills Hub agenta a registry napojené na [agentskills.io](https://agentskills.io/).

## Příklady kurátorovaných kolekcí

Konkrétní open-source sady skills (Superpowers, addyosmani/agent-skills, mattpocock/skills, …) najdeš na stránce [Skills](../../claude-code/skills/) v sekci Claude Code.

## Otevřený vývoj

Spec je otevřená k příspěvkům — vývoj probíhá v [github.com/agentskills/agentskills](https://github.com/agentskills/agentskills) a komunita se schází na [Discordu](https://discord.gg/MKPE9g8aUy).

## Sources

- [agentskills.io](https://agentskills.io/) — oficiální specifikace a client showcase
- [hermes-agent.nousresearch.com/docs/skills](https://hermes-agent.nousresearch.com/docs/skills/) — Hermes Skills Hub
