---
title: Agent-Ready Web
description: Nástroje a standardy pro testování a zlepšení přístupnosti webů pro AI agenty — content negotiation, content signals a diagnostické skenery.
created: 2026-04-22
updated: 2026-05-22
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

**[Ora](https://ora.ai/)** — „Agent Experience Ranking" platforma od Era Labs. Spouští **Deep Scan** nad doménami a MCP servery a hodnotí, jak dobře dokáží AI agenti web najít a používat. Verze v1.1 provádí reálnou exekuci agentů ve více vrstvách a hodnotí MCP endpointy proti Anthropic best-practice guidelines.

Ora se prezentuje jako „benchmark, not a checklist" — žebříček vyhodnocených stránek napříč kategoriemi (AI & ML, Developer Tools, Infrastructure & DevOps, E-commerce). Z více než 10 000 oskenovaných sites dosáhnou hodnocení B nebo vyššího jen 3 %.

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

## 🤖 agents.txt

**[agents.txt](https://agents-txt.com/)** — návrh standardu (v1.0 Draft, 2025-10-13) pro deklaraci agentích schopností webu. Zatímco `robots.txt` říká, co agent **smí číst**, `agents.txt` deklaruje, co agent **může dělat** — platit, autentizovat se, volat MCP endpointy, používat skills.

Soubor se podává jako UTF-8 plain text na `<origin>/agents.txt` (doplněn strukturovaným `agents.json`). Spec definuje osm direktiv:

| Direktiva | Účel |
|---|---|
| `Protocols:` | Podporované platební protokoly (x402, mpp, ap2) |
| `Payments:` | Univerzální požadavek na platbu |
| `Authorization:` | Metody autentizace (agent-auth, oauth2, auth-md) |
| `Identity:` | Povinná autentizace |
| `MCP:` | Endpoint Model Context Protocol |
| `Skills:` | Balíčky Agent Skills |
| `A2A:` | Agent2Agent protocol cards |
| `UCP:` | Universal Commerce Protocol profil |

Soubor **nesmí obsahovat** wallet adresy, API klíče ani jiné citlivé údaje — ty patří do `402 Payment Required` odpovědí nebo na endpointy typu `/.well-known/agent-configuration`. agents.txt je veřejný discovery artefakt.

Vztah k ostatním souborům: `llms.txt` kurátoruje obsah **pro LLM inferenci**, `agents.txt` deklaruje **runtime schopnosti** agenta. Spec se vědomě inspiruje dvojicí `llms.txt` + `llms-full.txt` (stručný signál + strukturovaný companion).

## 🔑 Agent Identity (AID)

**[Agent Identity (AID)](https://agentids.org/)** — otevřený protokol pro autentizaci a autorizaci AI agentů. Nahrazuje sdílené API klíče a vypůjčené uživatelské tokeny kryptografickou identitou — Ed25519 keypair agenta **je** jeho credentialem.

Identifikátor má tvar `my-agent@acme.crabmail.ai` podle Agent Messaging Protocol (AMP). Agent předkládá podepsaný **Agent Identity Document** (JSON s public key, adresou a fingerprintem) a proof of possession s timestampem (5 min platnost) a výměnou získá scoped RS256 JWT přes OAuth 2.0 s grant typem `urn:aid:agent-identity`.

Dvě cesty registrace:

- **Admin-initiated** — přímá registrace s okamžitým přístupem k tokenům
- **Agent-initiated** — RFC 8628 device flow, kde agent požádá o přístup a člověk schválí přes authorization URL

Klíčové vlastnosti — per-agent audit trail (každý agent má vlastní keypair a accountability oddělenou od uživatele), role-based access s granulárními permissions, cloud agnostic (funguje s libovolnou OAuth 2.0 infrastrukturou). Integruje se s AMP, MCP a A2A protokoly.

## Jak spolu souvisí

| Standard / Nástroj | Řeší |
|---|---|
| `robots.txt` + aipref | Kdo smí přistupovat a co smí s obsahem dělat |
| `Accept: text/markdown` | Jak efektivně doručit obsah AI agentovi |
| `agents.txt` + `agents.json` | Jaké akce agent na webu může provádět |
| Agent Identity (AID) | Kdo je agent a co smí (autentizace, scoped tokeny) |
| Is It Agent Ready?, Ora | Komplexní audit výše uvedených standardů |

Společně tvoří základ „agent-ready webu" — webu, který je připravený na autonomní AI agenty jako plnohodnotné uživatele.
