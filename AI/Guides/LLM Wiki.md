---
title: LLM Wiki
description: Vzor osobní znalostní báze, kde LLM průběžně buduje a udržuje trvalou wiki místo opakovaného RAG.
created: 2025-04-06
updated: 2026-04-09
---

**LLM Wiki** je vzor pro osobní znalostní bázi: místo čistého RAG (pokaždé znovu hledat úryvky v dokumentech) necháváš LLM **postupně budovat a udržovat trvalou wiki** — propojené Markdown soubory mezi tebou a surovými zdroji.

## Co je RAG

**RAG (Retrieval-Augmented Generation)** je technika, kdy LLM před odpovědí nejdřív vyhledá relevantní úryvky z externích dokumentů (vektorová DB, full-text) a pak z nich složí odpověď. Znalost se neukládá — při každém dotazu se hledá znovu.

## Oproti klasickému RAG

U RAG model při každé otázce znovu skládá odpověď z fragmentů; znalost se **nekumuluje**. U LLM Wiki se po přidání zdroje informace **zapracují do struktury** (stránky entit, témata, rozporů, syntéza) a zůstávají aktualizované. Člověk většinou nepíše wiki ručně — stará se o zdroje, směr a otázky; LLM dělá sumarizaci, křížové odkazy a „účetnictví“ mezi stránkami. V praxi často **[Obsidian](https://obsidian.md/)** nebo **[Logseq](https://logseq.com/)** jako prohlížeč/graf, **agent** jako editor.

## Tři vrstvy

1. **Surové zdroje** — články, PDF, poznámky; ideálně neměnné; LLM z nich čte, nepřepisuje je.
2. **Wiki** — adresář Markdown stránek, které LLM vytváří a aktualizuje (shrnutí, entity, koncepty, odkazy).
3. **Schéma** — např. `CLAUDE.md` nebo `AGENTS.md`: pravidla struktury, konvence a workflow (ingest, odpovědi, údržba). Bez toho je agent jen chatbot.

:::tip
Schéma tvoří ~80 % hodnoty celého systému. Musí definovat formáty stránek, konvence odkazů, řešení rozporů a požadavky na citace.
:::

Příklad reálného schématu: [CLAUDE.md tohoto projektu](https://github.com/OzzyCzech/ozzyczech.cz/blob/main/CLAUDE.md)

## Základní operace

- **Ingest** — nový zdroj: čtení, diskuse, souhrn, úprava indexu a souvisejících stránek, zápis do logu.
- **Query** — odpověď z existujících stránek s citacemi; **dobré odpovědi lze znovu zapsat do wiki**, aby nezmizely v historii chatu.
- **Lint** — pravidelná kontrola: rozpor mezi stránkami, zastaralé tvrzení, sirotčí stránky, chybějící odkazy nebo témata. Pravidelné „health checky" zabraňují hromadění chyb.

### Praktické nástroje pro ingest

- **[MarkDownload](https://github.com/deathau/markdownload)** — rozšíření prohlížeče pro jednoduché zachycení webu do Markdownu
- **[Obsidian Web Clipper](https://obsidian.md/clipper)** — alternativa pro uživatele Obsidianu
- **Telegram + Whisper** — hlasový pipeline pro hands-free přidávání zdrojů

## Index a log

- **`index.md`** — obsahový katalog wiki (odkazy, jednořádkové shrnutí, případně kategorie); agent ho při ingestu aktualizuje a při dotazu často čte jako první.
- **`log.md`** — chronologický, append-only záznam (ingesty, dotazy, lint); vhodné konzistentní nadpisy pro jednoduché filtrování (např. `grep`).

## Škálování

Flat-file přístup začíná narážet na limity kolem ~400 000 slov (nebo ~1 000 článků). Pro větší wiki:

- **[qmd](https://github.com/tobi/qmd)** — lokální vyhledávač pro Markdown s hybridním BM25/vektorovým vyhledáváním + MCP integrace

  ```bash
  bun install -g @tobilu/qmd
  ```
- **SQLite transakční log** — výkonnější než file-based indexing pro velké wiki
- **[Obsidian](https://obsidian.md/) Dataview** — pluginy pro vizualizaci a dotazy nad wiki

Wiki jako **git repo** dává historii změn a spolupráci zdarma.

## Proč to funguje

Údržba klasické wiki lidi odrazuje (odkazy, konzistence, aktualizace). LLM zvládne najednou mnoho souborů a nudnou administrativu; člověk zůstává u kurátora zdrojů, smyslu a ověřování tam, kde záleží na pravdě.

Jde o paradigmatický posun: od reaktivní AI pomoci („vyřeš mi problém") k proaktivní znalostní infrastruktuře („průběžně udržuj moji expertízu").

## Zdroje

- [LLM Wiki (Karpathy) — GitHub Gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) — původní myšlenka a popis systému
- [Karpathy: LLM Knowledgebase — marigold.cz](https://www.marigold.cz/item/karpathy-llm-knowledgebase/) — český rozbor s praktickými postřehy komunity
- [CLAUDE.md tohoto projektu](https://github.com/OzzyCzech/ozzyczech.cz/blob/main/CLAUDE.md) — reálné schéma LLM Wiki vycházející z této filozofie
