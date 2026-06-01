---
title: Odysseus
description: Self-hosted AI workspace od PewDiePie — chat, agenti, deep research, MCP, lokální i cloud LLM backendy. Open source, MIT.
created: 2026-05-29
updated: 2026-05-29
---

**[Odysseus](https://pewdiepie-archdaemon.github.io/odysseus/)** je self-hosted AI workspace vytvořený PewDiePiem — kombinuje chat, agenty s nástroji, deep research, model comparison, document editor a persistent memory v jednom rozhraní. Repo na [github.com/pewdiepie-archdaemon/odysseus](https://github.com/pewdiepie-archdaemon/odysseus), licence **MIT**.

Vznikl podle autora z „a carefully crafted one-shot AI prompt" — „make an AI chat but make it good".

## Stack

- **Backend** — Python s [FastAPI](https://fastapi.tiangolo.com/) (Python 3.11+)
- **Frontend** — vanilla JavaScript (PWA, mobile-responsive)
- **Vektorová paměť** — [ChromaDB](https://www.trychroma.com/)
- **Web search** — [SearXNG](https://github.com/searxng/searxng)
- **Notifikace** — [ntfy](https://ntfy.sh/)
- **Browser automation** — Chromium + [Playwright](https://playwright.dev/) jako MCP server

## Podporované LLM backendy

- **Lokální** — [Ollama](https://ollama.com/), [llama.cpp](https://github.com/ggerganov/llama.cpp) (Metal na Apple Silicon), [vLLM](https://github.com/vllm-project/vllm)
- **Cloud** — OpenAI, [OpenRouter](https://openrouter.ai/)

## Klíčové funkce

- **Chat & Agents** — multi-turn konverzace, autonomní agenti s plánováním a exekucí úkolů
- **Built-in tools** — bash, files, web, memory + libovolný MCP server
- **Cookbook** — discovery a serving 270+ katalogizovaných modelů přes [llmfit](https://github.com/pewdiepie-archdaemon/llmfit) doporučení
- **Deep Research** — multi-step výzkum se syntézou zdrojů
- **Model comparison** — side-by-side blind testing
- **Document editor** s AI asistencí
- **Email** — IMAP/SMTP triage a asistence
- **Notes, tasks, calendar** — vlastní úložiště + CalDAV sync
- **Self-evolving skills** — asistent píše, refinuje a znovu používá vlastní skills

## Instalace

- **Docker Compose** (doporučeno)
- Manual Linux/macOS s Python 3.11+
- Native macOS přes `./start-macos.sh` pro Metal GPU
- Windows PowerShell (nepodporováno oficiálně)

## Privacy

Vše běží lokálně proti vlastním endpointům — žádná telemetrie, externí integrace pouze opt-in.

## Sources

- [pewdiepie-archdaemon.github.io/odysseus](https://pewdiepie-archdaemon.github.io/odysseus/) — landing page
- [github.com/pewdiepie-archdaemon/odysseus](https://github.com/pewdiepie-archdaemon/odysseus) — repo, MIT license
- [Promo video](https://www.youtube.com/watch?v=rAzT5lcezPs) na YouTube
