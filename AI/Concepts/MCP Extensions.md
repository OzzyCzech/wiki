---
title: Rozšíření MCP
description: Skills over MCP, Tasks, Elicitation a File Uploads pro předávání instrukcí, asynchronní úlohy, interaktivní vstupy a přenos souborů.
created: 2026-11-27
updated: 2026-11-27
---

MCP servery mohou vedle nástrojů poskytovat také pracovní postupy, zpracovávat dlouhé úlohy na pozadí a vyžadovat vstup uživatele. Přehled čtyř funkcí z [oznámení Anthropic z 24. listopadu 2026](https://claude.com/resources/articles/skills-over-mcp-tasks-and-more):

## Skills over MCP

Server dodává [skills](../../skills/agent-skills/) s instrukcemi a doporučenými postupy pro své nástroje. Agent načte instrukce podle potřeby, čímž šetří kontextové okno. Skills se aktualizují společně se serverem a nevyžadují samostatnou instalaci.

## Tasks

Dlouhotrvající operace běží asynchronně na serveru. Agent může mezitím pokračovat v jiné práci a výsledek převzít později. Příkladem je podrobný průzkum firem a kontaktů.

## Elicitation

Server může během operace požádat uživatele o informace nebo potvrzení přes formulář či odkaz a následně pokračovat. GitHub například před smazáním repozitáře vyžaduje zadání jeho názvu.

## File Uploads

Přenos souborů mezi klientem a MCP serverem bez vkládání jejich obsahu do kontextového okna. Hodí se pro PDF, tabulky a obrázky.

## Dostupnost v Claude

K datu oznámení byly Skills over MCP ve veřejné betě, Tasks a Elicitation obecně dostupné s postupným nasazováním do organizací. File Uploads byly teprve oznámené k brzkému nasazení. Podpora závisí na klientovi i serveru.
