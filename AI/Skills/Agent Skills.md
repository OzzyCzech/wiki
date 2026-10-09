---
title: Agent Skills
description: Open standard for packaging procedural knowledge into folders that AI agents load on demand. Originally from Anthropic, now adopted across Claude Code, Cursor, Codex, Hermes, and many other tools.
created: 2026-06-04
updated: 2026-10-09
---

**Agent Skills** je otevřený formát pro rozšiřování schopností AI agentů specializovanými znalostmi a workflow. Skill je obyčejná složka obsahující soubor `SKILL.md` s metadaty a instrukcemi — agent ji načte teprve když ji k úloze potřebuje. Standard původně vyvinul [Anthropic](https://www.anthropic.com/) a uvolnil jako otevřenou specifikaci. Centrální rozcestník komunity je [agentskills.io](https://agentskills.io/).

## Formát

Skill je složka s povinným `SKILL.md` a volitelnými soubory:

```text
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

## Jak psát skills

Aktuální doporučení Anthropic pro tvorbu a revizi skills:

- **Piš stručně.** Přidávej jen znalosti, které model potřebuje navíc. Tělo `SKILL.md` drž pod 500 řádky; podrobnosti přesuň do referencí.
- **Popiš účel i spouštěč.** `description` ve třetí osobě říká, co skill dělá a kdy ho použít; zahrň konkrétní pojmy a typy úloh.
- **Odkazuj přímo.** Každý referenční soubor odkazuj z `SKILL.md`, bez řetězení přes další reference. Podsložky nevadí. Referencím nad 100 řádků přidej na začátek obsah — agent může číst jen úryvek.
- **Přizpůsob volnost úloze.** Pro úsudek stačí cíl a vodítka; pro opakované výstupy šablona či parametrizovaný skript; pro křehké operace přesný postup nebo skript.
- **Ověřuj výsledek.** Složitá workflow rozděl na kroky s checklistem. Urči kontrolu úspěchu a při chybě návrat k opravě: vytvořit → ověřit → opravit → znovu ověřit.
- **Testuj před rozšiřováním.** Připrav alespoň tři reálné scénáře, porovnej výkon bez skillu a s ním. Testuj všechny zamýšlené modely; silnější model zbytečně nepoučuj.
- **Uveď závislosti.** Vyjmenuj balíčky a postup přípravy. Nepředpokládej instalaci; respektuj prostředí — Claude API neumožňuje instalaci balíčků za běhu.

### Specifika Claude Code

Pro přenositelnost uváděj `name` i `description`, přestože je Claude Code umí doplnit. Workflow spouštěná výhradně uživatelem nastav pomocí `disable-model-invocation: true`. Pole `model` vybírá model pro spuštění; není obecnou deklarací kompatibility skillu.

## Kde se používá

Standard adoptovalo přes 40 agentích produktů, mimo jiné:

- **Coding agents** — [Claude Code](https://claude.ai/code), [Cursor](https://cursor.com/), [GitHub Copilot](https://github.com/), [OpenAI Codex](https://developers.openai.com/codex), [Gemini CLI](https://geminicli.com/), [OpenCode](https://opencode.ai/), [Goose](https://goose-docs.ai/), [Roo Code](https://roocode.com/), [Junie](https://junie.jetbrains.com/), [VS Code](https://code.visualstudio.com/), [Kiro](https://kiro.dev/), [TRAE](https://trae.ai/)
- **Autonomní agenti / runtimes** — [Hermes Agent](../../agents/hermes-agent), [OpenHands](https://openhands.dev/), [Letta](https://www.letta.com/), [fast-agent](https://fast-agent.ai/), [nanobot](https://nanobot.wiki/), [Workshop](https://workshop.ai/)
- **Platformy / IDE** — [Laravel Boost](https://github.com/laravel/boost), [Spring AI](https://docs.spring.io/spring-ai/reference), [Databricks Genie Code](https://databricks.com/), [Snowflake Cortex Code](https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code), [Tabnine](https://www.tabnine.com/)

Aktuální seznam udržuje [agentskills.io/clients](https://agentskills.io/clients).

## Hermes Agent

[Hermes Agent](../../agents/hermes-agent) sdílí ten samý standard a navíc umí skills **automaticky generovat za běhu** — když narazí na opakující se úlohu, vytvoří si vlastní SKILL.md a uloží ho do své library. Built-in, optional a komunitní skills se instalují přes Skills Hub agenta a registry napojené na [agentskills.io](https://agentskills.io/).

## Příklady kurátorovaných kolekcí

Konkrétní open-source sady skills (Superpowers, addyosmani/agent-skills, mattpocock/skills, …) a jejich správce najdeš na stránce [Skill Collections](../skill-collections/). Kolekce jsou společné pro různé agenty; příklady instalace uvádějí, pro který nástroj platí.

## Otevřený vývoj

Spec je otevřená k příspěvkům — vývoj probíhá v [github.com/agentskills/agentskills](https://github.com/agentskills/agentskills) a komunita se schází na [Discordu](https://discord.gg/MKPE9g8aUy).

## Sources

- [Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) — oficiální doporučení pro strukturu, workflow, testování a závislosti; ověřeno 2026-10-09
- [Extend Claude with skills](https://code.claude.com/docs/en/skills) — nastavení a chování skills v Claude Code; ověřeno 2026-10-09
- [MindStudio: Claude Skills Are Outdated](https://www.mindstudio.ai/blog/claude-skills-best-practices-update) — výchozí přehled doporučení, ověřený proti oficiální dokumentaci
- [agentskills.io](https://agentskills.io/) — oficiální specifikace a client showcase
- [hermes-agent.nousresearch.com/docs/skills](https://hermes-agent.nousresearch.com/docs/skills/) — Hermes Skills Hub
