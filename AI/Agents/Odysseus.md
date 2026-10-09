---
title: Odysseus
description: Self-hosted AI workspace pro chat, agenty, výzkum a dokumenty. Lokální i API modely, MCP, paměť, e-mail a kalendář; AGPL-3.0-or-later.
created: 2026-05-29
updated: 2026-10-09
---

**[Odysseus](https://github.com/odysseus-dev/odysseus)** je open-source AI workspace provozovaný na vlastním serveru nebo počítači. Spojuje chat, agenty, výzkum, dokumenty a osobní organizaci s lokálními i vzdálenými jazykovými modely. Aktuální repozitář je pod organizací **odysseus-dev**, licence je **AGPL-3.0-or-later**.

## Klíčové funkce

- **Chat a agenti** — konverzace s modely, volání nástrojů, práce se soubory a shellem, MCP, skills a paměť.
- **Cookbook** — doporučení modelů podle hardwaru, jejich stahování a spouštění.
- **Deep Research** — vyhledávání, čtení zdrojů a sestavení výzkumné zprávy.
- **Compare** — porovnávání odpovědí modelů včetně slepého hodnocení a syntézy.
- **Dokumenty** — editor s AI úpravami a návrhy; práce s Markdownem, HTML a CSV.
- **E-mail** — IMAP/SMTP, třídění zpráv, souhrny, připomínky a návrhy odpovědí.
- **Poznámky, úkoly a kalendář** — připomínky, plánované úlohy agentů a synchronizace CalDAV.
- **Další nástroje** — galerie a úpravy obrázků, motivy rozhraní, uploady a dvoufaktorové ověření.

## Modely a backendy

Modelové endpointy se nastavují v **Settings**. Aplikace může používat lokální modely, vzdálený modelový server nebo cloudové API.

- **Ollama a llama.cpp** — lokální modely; na Apple Silicon lze při nativním provozu využít Metal.
- **vLLM a SGLang** — GPU serving na Linuxu; na Windows vyžadují Linux/WSL2, na macOS neběží.
- **LM Studio a OpenAI-compatible endpointy** — připojení existujícího serveru; konfigurace obsahuje také podporu OpenAI API klíče.

Dostupnost nástrojů a kvalita agentních úloh závisejí i na schopnostech vybraného modelu.

## Stack

- **Backend** — Python, FastAPI a Uvicorn; SQLAlchemy pro databázi.
- **Webové rozhraní** — HTML, JavaScript a CSS; projekt obsahuje manifest a service worker pro PWA.
- **Paměť a embeddings** — ChromaDB a fastembed.
- **Služby v Docker Compose** — Odysseus, ChromaDB, SearXNG pro webové hledání a ntfy pro notifikace.

## Instalace

Výchozí větev **dev** obsahuje nejnovější změny a může být nestabilní. Dokumentace označuje **main** za více prověřovanou větev.

### Docker Compose

Doporučená cesta podle README:

```bash
git clone https://github.com/odysseus-dev/odysseus.git
cd odysseus
cp .env.example .env
docker compose up -d --build
```

Aktuální Compose vystavuje aplikaci na `http://localhost:7011` (`APP_PORT` může port změnit). Dočasné heslo prvního administrátora je ve výstupu `docker compose logs odysseus`; po přihlášení ho změň v Settings. Modely a integrace se konfigurují v rozhraní.

### Nativní provoz

- **Linux/macOS** — Python 3.11+, virtuální prostředí, `requirements.txt`, `python setup.py` a Uvicorn.
- **Apple Silicon** — `./start-macos.sh`, standardně na portu `7860`. Docker na macOS neumí využít Metal GPU pro serving modelů.
- **Windows** — dokumentovaný launcher `launch-windows.ps1`; pro shell a plné stahování modelů v Cookbook je potřeba také Git for Windows.

Podrobnosti a GPU konfiguraci popisuje instalační příručka ve zdrojích níže. Její údaj o Docker portu `7000` se při této revizi liší od README a Compose; pro aktuální mapování portů je rozhodující `docker-compose.yml`.

## Soukromí a přístup

Projekt deklaruje provoz bez telemetrie a volitelné externí integrace. **Self-hosting ale sám o sobě nezaručuje, že všechna data zůstanou lokálně**: cloudové modely, vzdálené endpointy, e-mail a webové hledání komunikují s připojenými službami.

Agenti mohou používat shell a soubory. Pro síťově dostupnou instalaci README požaduje `AUTH_ENABLED=true` a mimo lokální vývoj `LOCALHOST_BYPASS=false`; modelové a servisní porty nemají být veřejně vystavené.

## Sources

Ověřeno 2026-10-09:

- [README](https://github.com/odysseus-dev/odysseus/blob/dev/README.md) — funkce, větve, rychlé spuštění, licence a přístup.
- [Instalační příručka](https://github.com/odysseus-dev/odysseus/blob/dev/website/setup.md) — nativní instalace, Windows, Apple Silicon a GPU backendy.
- [Docker Compose](https://github.com/odysseus-dev/odysseus/blob/dev/docker-compose.yml) — služby a aktuální mapování portů.
- [Konfigurace prostředí](https://github.com/odysseus-dev/odysseus/blob/dev/.env.example) — endpointy modelů a integrace.
- [Python dependencies](https://github.com/odysseus-dev/odysseus/blob/dev/requirements.txt) a [webové rozhraní](https://github.com/odysseus-dev/odysseus/tree/dev/static) — technický stack.
- [Prezentační web a ukázky](https://odysseus-dev.github.io/odysseus/) — deklarace o telemetrii a volitelných integracích.
