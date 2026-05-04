---
title: Autonomní Research Agent
description: Architektura autonomního multiagentního systému pro kontinuální výzkum – persistentní znalostní databáze, izolované subagenty a opakovaná validační smyčka.
created: 2026-04-07
updated: 2026-04-07
---

Autonomní Research Agent je experimentální systém navržený k systematickému budování hlubokého odborného porozumění dané oblasti – bez závislosti na nepřetržité lidské přítomnosti. Aktuální doménou je architektura multiagentních systémů pro obchodování na burze. Systém je ale navržen tak, aby byl přenositelný na libovolný obor.

## Motivace

Cílem není odpovídat na otázky ze znalostního okna jednoho modelu, ale průběžně budovat **trvale rostoucí expertní databázi**, která je nezávislá na konkrétním modelu i na velikosti kontextového okna. Každé kolo výzkumu zanechává stopu – databáze se nepřepisuje, ale zpřesňuje.

## Architektura

### 🔬 Researcher – hlavní agent

Researcher je persistentní orchestrátor celého systému. Neprovádí výzkum sám, ale:

- vyhodnocuje aktuální stav znalostní báze (otevřené otázky, rozpory, slabě podložená tvrzení)
- připravuje **research brief** pro každé kolo
- spouští paralelně dva izolované subagenty
- porovnává jejich výstupy a řídí zápis do databáze
- průběžně aktualizuje **blueprint** ideálního systému

### 🤖 Subagenty – dva izolované výzkumníci

Každé kolo běží dva nezávislé subagenty v oddělených sessions (aktuálně Opus 4.6 a GPT-4o/xHigh). Záměrně nesdílejí kontext ani se nekoordinují – minimalizuje se tím korelace chyb a falešný konsenzus.

Každý subagent má odlišnou **epistemickou roli**:

- **Evidence agent** – mapuje co nejsilnější dostupnou evidenci, hledá corroborated findings
- **Critic agent** – aktivně hledá failure modes, evaluation traps, skrytou komplexitu a provozní slabiny

Každý subagent ukládá vlastní auditovatelnou analýzu + strukturovaný výstup pro strojové zpracování.

### ⚖️ Judge vrstva

Po každém kole prochází tvrzení podporovaná zatím jen jedním subagentes přes samostatnou **judge vrstvu**. Ta rozhoduje:

- Co lze zařadit do provizorní znalostní báze
- Co zůstane otevřené pro další validaci
- Co je příliš slabé nebo problematické a má být zahozeno

### 🗄️ Znalostní databáze

Validované poznatky se ukládají do PostgreSQL s rozšířením **pgvector**. Databáze funguje jako dlouhodobá expertní paměť – odděluje **corroborated findings** (potvrzené oběma subagenty) od **single-source findings** (zatím jen jeden zdroj).

### 📐 Blueprint systému

Researcher z validovaných poznatků průběžně sestavuje a zpřesňuje živý teoretický model – **blueprint** ideálního autonomního obchodního systému. S každým kolem se opravuje a rozšiřuje.

## Autonomní smyčka

Celý systém běží jako opakovaná smyčka řízená externím schedulerem:

1. Scheduler probudí Researchera
2. Researcher vyhodnotí stav databáze a připraví brief
3. Paralelně spustí dva subagenty (~30–40 min kolo)
4. Výstupy projdou judge vrstvou
5. Validované poznatky se zapíší do databáze
6. Researcher aktualizuje blueprint a nový brief
7. Systém se uspí do dalšího kola

Systém je navržen tak, aby šlo postupně nasazovat novější modely, aniž by se ztratila vybudovaná znalostní báze.

## Audit a korekce kurzu

Jednou za čas lze spustit **nezávislý audit**, který:

- ověří, zda se systém neodchyluje od zadání
- náhodně vybere poznatky z databáze a znovu je validuje
- detekuje drift výzkumného směru

## Výsledky

- 1 000+ zpracovaných primárních zdrojů (vědecké studie, odborné články)
- plně autonomní provoz bez nutnosti lidského zásahu mezi koly
- přenositelná architektura – stejný systém lze nasadit na libovolnou doménu (např. výzkum longevity)

## Klíčové principy návrhu

- **Izolace subagentů** – žádná sdílená session, minimalizace korelace chyb
- **Vrstvená validace** – corroborated > single-source > zamítnuto
- **Persistentní paměť mimo kontext** – PostgreSQL + pgvector jako skutečná long-term memory
- **Živý blueprint** – výzkum se nepřekládá jen do faktů, ale do návrhu systému
- **Model-agnostičnost** – databáze přežije výměnu modelu