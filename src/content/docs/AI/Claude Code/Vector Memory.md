---
title: Vector Memory for Claude Code
description: Vlastní vektorový paměťový systém pro Claude Code s ChromaDB a BGE-M3 embeddingy přes MCP.
created: 2026-04-09
updated: 2026-04-10
---

Lokální vektorová paměť dává Claude Code persistentní sémantickou paměť napříč sezeními. Místo vkládání celých paměťových souborů do promptu se načtou jen nejrelevantnější fragmenty — úspora 80–90 % tokenů oproti plné paměti v kontextu. Řešení kombinuje [ChromaDB](https://www.trychroma.com/) jako vektorovou databázi s embedding modelem [BGE-M3](https://huggingface.co/BAAI/bge-m3) (BAAI) vystaveným Claude Code přes [MCP](https://modelcontextprotocol.io/).

## Architektura

```
Claude Code
    │
    ▼
MCP Server (stdio)
    │
    ├── BGE-M3 (lokální embedding model, ~3 GB RAM)
    │     └── dense vektory (1024-dim)
    │
    └── ChromaDB (vektorová databáze)
          └── kolekce: memory, code_patterns, decisions…
```

Při dotazu se query převede přes BGE-M3 na vektor a ChromaDB vrátí top-N relevantních fragmentů. Při ukládání se text vektorizuje a uloží do ChromaDB s metadaty (kategorie, projekt, timestamp).

## Požadavky

- Python 3.10+
- `uv` (doporučeno) nebo `pip`
- Docker (volitelně — pro ChromaDB server mode)
- ~4 GB volné RAM (3 GB model + ChromaDB overhead)
- ~2 GB disk pro stažení BGE-M3 modelu

## Instalace

### 1. ChromaDB

**Varianta A — Docker (doporučeno pro stabilitu):**

```bash
docker run -d \
  --name chromadb \
  -p 8000:8000 \
  -v ~/chromadb-data:/chroma/chroma \
  -e IS_PERSISTENT=TRUE \
  -e ANONYMIZED_TELEMETRY=FALSE \
  chromadb/chroma:latest
```

**Varianta B — Embedded (bez Dockeru):**

```python
import chromadb
client = chromadb.PersistentClient(path="~/.claude-memory/chromadb")
```

### 2. BGE-M3 a závislosti MCP serveru

```bash
mkdir ~/claude-memory-mcp && cd ~/claude-memory-mcp
uv init && uv venv && source .venv/bin/activate
uv add "mcp[cli]" chromadb FlagEmbedding torch numpy
```

Ověření stažení modelu (~2 GB při prvním spuštění):

```bash
python -c "from FlagEmbedding import BGEM3FlagModel; m = BGEM3FlagModel('BAAI/bge-m3', use_fp16=True); print('OK')"
```

:::note
Na CPU nastavte `use_fp16=False`. Na GPU (CUDA) nebo Apple Silicon (MPS) je `use_fp16=True` rychlejší s minimální ztrátou přesnosti.
:::

### 3. MCP server

Vytvořte `~/claude-memory-mcp/server.py` se čtyřmi nástroji: `memory_search`, `memory_store`, `memory_delete`, `memory_stats`. Server načte BGE-M3 při startu a připojí se k ChromaDB.

### 4. Registrace do Claude Code

```bash
claude mcp add memory-search -- \
  ~/claude-memory-mcp/.venv/bin/python \
  ~/claude-memory-mcp/server.py
```

Ověření:

```bash
claude mcp list
# Měl by se zobrazit: memory-search (stdio)
```

## MCP nástroje

| Nástroj | Účel |
|---------|------|
| `memory_search(query, top_k)` | Sémantické vyhledávání — vrátí top-N relevantních fragmentů |
| `memory_store(content, category, project)` | Uložení s deduplikací přes hash obsahu |
| `memory_delete(content_or_id)` | Smazání podle ID nebo obsahu |
| `memory_stats()` | Počet vzpomínek, rozložení kategorií, seznam projektů |

### Kategorie pro `memory_store`

`general`, `bugfix`, `architecture`, `preference`, `code_pattern`, `decision`, `learning`, `debug_insight`

## Konfigurace CLAUDE.md

Přidej do projektového nebo globálního `~/.claude/CLAUDE.md`:

```markdown
## Paměťový systém

### Kdy VYHLEDÁVAT (memory_search):
- Na začátku každé session — prohledej paměť pro kontext projektu
- Před implementací nového feature — ověř, zda existují relevantní poznámky
- Při referencích na minulá rozhodnutí, bugy nebo architekturu

### Kdy UKLÁDAT (memory_store):
- Vyřešený netriviální bug (kategorie: bugfix)
- Architektonické rozhodnutí a jeho důvody (kategorie: architecture, decision)
- Opakující se code pattern specifický pro projekt (kategorie: code_pattern)
- Uživatelovy preference a workflow (kategorie: preference)

### Kdy NEUKLÁDAT:
- Informace, které jsou v CLAUDE.md nebo README
- Dočasné debug výstupy
- Informace zřejmé z kódu

### Pravidla:
- Vždy uváděj kategorii a název projektu při ukládání
- Ukládej stručně ale kompletně — budoucí session nemá jiný kontext
- Na konci delší session ulož shrnutí toho, co bylo uděláno
```

## Dvouúrovňová fallback strategie

Pro rychlé opravy a jednoduché dotazy je vektorové vyhledávání zbytečně pomalé:

| Úroveň | Zdroj | Latence | Použití |
|--------|-------|---------|---------|
| 1 — Lokální | CLAUDE.md, auto memory, soubory projektu | ~0 ms | Quick fixy, syntaxe, jednoduché dotazy |
| 2 — Vektorová DB | ChromaDB přes MCP | ~200–500 ms | Historický kontext, mezisesionová rozhodnutí, architektura |

Pravidlo: pokud odpověď najdeš v CLAUDE.md nebo auto memory, vektorovou DB nepoužívej. Na začátku nové session vždy prohledej vektorovou DB pro kontext projektu.

## Porovnání modelů

| Model | RAM | Kvalita CZ | Rychlost |
|-------|-----|-----------|----------|
| BGE-M3 (fp16) | ~1.5 GB | Nejlepší | Střední |
| BGE-M3 (fp32) | ~3 GB | Nejlepší | Pomalejší |
| multilingual-e5-large | ~1.2 GB | Dobrá | Střední |
| all-MiniLM-L6-v2 | ~100 MB | Slabá | Rychlá |

BGE-M3 od BAAI je nejlepší volba pro vícejazyčné projekty — zejména pro češtinu, slovenštinu a další neanglické jazyky.

## Údržba

**Záloha:**

```bash
cp -r ~/.claude-memory/chromadb ~/.claude-memory/chromadb-backup-$(date +%Y%m%d)
```

**Čištění starých vzpomínek (90+ dní):**

```python
import chromadb
from datetime import datetime, timezone, timedelta

client = chromadb.PersistentClient(path="~/.claude-memory/chromadb")
collection = client.get_collection("claude_memory")

cutoff = (datetime.now(timezone.utc) - timedelta(days=90)).isoformat()
all_data = collection.get(include=["metadatas"])

to_delete = [id_ for id_, meta in zip(all_data["ids"], all_data["metadatas"])
             if meta.get("timestamp", "") < cutoff]

if to_delete:
    collection.delete(ids=to_delete)
    print(f"Smazáno {len(to_delete)} starých vzpomínek.")
```

## Shrnutí

| Aspekt | Hodnota |
|--------|---------|
| RAM | ~3 GB (model) + ~100 MB (DB) |
| Latence vyhledávání | ~200–500 ms (CPU) |
| Úspora tokenů | ~80–90 % oproti plné paměti v promptu |
| Vhodné pro | Větší paměť (stovky poznámek), vícejazyčné projekty |

Pro malé projekty s pár poznámkami stačí vestavěná [auto memory](../claude-code) Claude Code.

## Sources

- [ChromaDB dokumentace](https://docs.trychroma.com/) — instalace, persistent client, Docker deployment
- [BGE-M3 na Hugging Face](https://huggingface.co/BAAI/bge-m3) — model od BAAI, 1024-dim dense vektory, multilingvální (100+ jazyků)
- [FlagEmbedding repo](https://github.com/FlagOpen/FlagEmbedding) — referenční implementace BGEM3FlagModel
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) — FastMCP a stdio transport
- Vlastní průvodce (interní zdroj) — kompletní setup včetně kódu MCP serveru, ověřeno 2026-04
