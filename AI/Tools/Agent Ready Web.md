---
title: Agent-Ready Web
description: Nástroje a standardy pro testování a zlepšení přístupnosti webů pro AI agenty — content negotiation, content signals a diagnostické skenery.
created: 2026-04-22
updated: 2026-04-22
---

AI agenti přistupují k webu jinak než lidé — potřebují strojově čitelný obsah, jasná pravidla přístupu a efektivní formáty. Vznikají proto nové standardy a nástroje, které pomáhají webům komunikovat s autonomními AI systémy.

## 🔍 Diagnostické nástroje

**[Is It Agent Ready?](https://isitagentready.com/)** — diagnostický skener, který vyhodnotí připravenost webu pro AI agenty. Testuje pět oblastí:

- **Discoverability** — `robots.txt`, sitemapy, link response headers
- **Content Accessibility** — podpora Markdown content negotiation
- **Bot Access Control** — pravidla pro AI boty, Content Signals, Web Bot Auth
- **Protocol Discovery** — MCP servery, Agent Skills, WebMCP, OAuth discovery
- **Commerce** — agentic commerce standardy (x402, UCP, ACP)

Skener generuje skóre připravenosti a doporučuje konkrétní kroky ke zlepšení. Nabízí i AI-generované implementační instrukce pro coding agenty (Claude Code, Cursor).

## 📄 Accept: text/markdown

**[Accept Markdown](https://acceptmarkdown.com/)** — iniciativa prosazující HTTP content negotiation pro Markdown. Řeší problém, kdy AI agenti dostávají plné HTML včetně navigace, skriptů a stylů, což plýtvá tokeny a snižuje kvalitu.

Princip je jednoduchý — klient pošle hlavičku `Accept: text/markdown` a server odpoví čistým Markdownem místo HTML:

```http
GET /article HTTP/1.1
Accept: text/markdown

HTTP/1.1 200 OK
Content-Type: text/markdown
Vary: Accept
```

Hlavní výhody:

- **Úspora tokenů** — odpadá navigace, styly, skripty a layout
- **Vyšší kvalita retrieval** — bez reklam, sidebars a modálních oken, které degradují RAG embeddings
- **Rychlejší odpovědi** — menší objem dat ke stažení a parsování

Projekt poskytuje implementační návody pro Nginx, Django, Next.js, Rails a další platformy. Opírá se o standardy [RFC 7763](https://datatracker.ietf.org/doc/html/rfc7763) (media type `text/markdown`) a [RFC 9110](https://datatracker.ietf.org/doc/html/rfc9110) (HTTP semantics).

## 📡 Content Signals (aipref)

**[Content Signals](https://contentsignals.org/)** — průvodce připravovanou IETF specifikací AI Preferences (aipref). Jde o standardizovaný mechanismus, kterým vydavatelé webového obsahu sdělují automatizovaným systémům, jak smí jejich obsah používat.

Na rozdíl od `robots.txt`, který řeší pouze crawling, aipref umožňuje granulární kontrolu — například povolit indexaci, ale zakázat použití pro trénink modelů. Specifikace reaguje na rostoucí napětí mezi tvůrci obsahu a AI systémy, které obsah stahují bez explicitního souhlasu.

## Jak spolu souvisí

| Standard / Nástroj | Řeší |
|---|---|
| `robots.txt` + aipref | Kdo smí přistupovat a co smí s obsahem dělat |
| `Accept: text/markdown` | Jak efektivně doručit obsah AI agentovi |
| Is It Agent Ready? | Komplexní audit všech výše uvedených standardů |

Společně tvoří základ „agent-ready webu" — webu, který je připravený na autonomní AI agenty jako plnohodnotné uživatele.
