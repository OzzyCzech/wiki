---
title: Jak získat js.org subdoménu
description: Jak získat bezplatnou js.org subdoménu pro GitHub Pages projekt přes js-org/js.org repozitář.
created: 2026-04-10
updated: 2026-04-10
sidebar:
  label: js.org subdoména
---

[js.org](https://js.org/) poskytuje bezplatné subdomény ve tvaru `project.js.org` pro projekty hostované na GitHub Pages. Subdoména se přidává PR do veřejného repozitáře [js-org/js.org](https://github.com/js-org/js.org).

## 1. Přidat CNAME do projektu

Vytvořte soubor `CNAME` s názvem subdomény (bez nového řádku na konci). Umístění závisí na build nástroji:

- **Vite** / **Next.js**: `public/CNAME` (kopíruje se do výstupu buildu automaticky)
- **Bez build nástroje**: `CNAME` v rootu repozitáře

```
muj-projekt.js.org
```

Commitněte a pushněte — GitHub Pages deploy se spustí automaticky.

## 2. Nastavit custom domain v GitHub Pages

V nastavení repozitáře: **Settings → Pages → Custom domain** → zadat `muj-projekt.js.org` → Save.

Nebo přes GitHub CLI:

```sh
gh api repos/USERNAME/REPO/pages -X PUT -f cname="muj-projekt.js.org"
```

:::caution
Tento krok je **povinný** — js.org tým PR neschválí, dokud není custom domain nastavena v GitHub Pages settings.
:::

## 3. Forknout js-org/js.org

```sh
gh repo fork js-org/js.org --clone=false
```

## 4. Přidat záznam do `cnames_active.js`

V souboru `cnames_active.js` na forku přidejte řádek na správné místo (abecedně):

```js
"muj-projekt": "username.github.io/repo",
```

:::caution
GitHub username musí být **lowercase** (validace to kontroluje). Formát hodnoty je `username.github.io/repo` (bez protokolu).
:::

## 5. Vytvořit PR

PR musí mířit do `js-org/js.org`, branch `master`.

**Titulek PR:** `muj-projekt.js.org`

**Body PR** — přesně dodržet formát (validuje se regexem v CI):

```markdown
- [x] There is reasonable content on the page (see: [No Content](https://github.com/js-org/js.org/wiki/No-Content))
- [x] I have read and accepted the [Terms and Conditions](http://js.org/terms.html)
- The site content can be seen at https://username.github.io/repo/

> The site content is POPIS OBSAHU and is relevant to JavaScript developers specifically because DŮVOD RELEVANCE
```

Pravidla:
- Oba checkboxy musí být zaškrtnuté (`[x]`)
- URL musí být plain link (ne markdown `[text](url)`)
- Blockquote musí být na **jednom řádku** a obsahovat přesně fráze `The site content is` a `and is relevant to JavaScript developers specifically because`
- Obě části vysvětlení musí mít víc než 10 znaků
- Obsah projektu musí přímo souviset s JS ekosystémem — nestačí že „stránka je napsaná v JS"

## 6. Počkat na merge

Automatické CI kontroluje formát PR description i validitu `cnames_active.js`. Po schválení a merge subdoména funguje do 24 hodin.

## Vzor

Příklad úspěšného PR — [js-org/js.org#11061](https://github.com/js-org/js.org/pull/11061):

```markdown
- [x] There is reasonable content on the page (see: [No Content](https://github.com/js-org/js.org/wiki/No-Content))
- [x] I have read and accepted the [Terms and Conditions](http://js.org/terms.html)
- The site content can be seen at https://ozzyczech.github.io/mock-to-openapi/

> The site content is a web tool and npm package (mock-to-openapi) for converting JSON mock objects to OpenAPI schemas and is relevant to JavaScript developers specifically because it is a JavaScript/TypeScript CLI tool and library published on npm that helps developers generate OpenAPI definitions from JSON examples
```

Raw šablona PR description: [PULL_REQUEST_TEMPLATE.md](https://github.com/js-org/js.org/blob/master/PULL_REQUEST_TEMPLATE.md)
