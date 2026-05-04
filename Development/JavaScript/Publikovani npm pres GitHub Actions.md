---
title: Publikování npm přes GitHub Actions
description: Publikování npm balíčků přes GitHub Actions bez tokenů pomocí OIDC Trusted Publishing.
created: 2026-04-10
updated: 2026-04-15
---

**npm Trusted Publishers** je doporučený způsob publikování balíčků na npm od července 2025 (GA). Místo dlouhodobých tokenů využívá OIDC (OpenID Connect) — GitHub Actions se automaticky prokáže npm registru svou identitou, žádné tajné tokeny nejsou potřeba. Od prosince 2025 jsou klasické tokeny pro CI/CD prakticky mrtvé.

## Jak to funguje

Na npmjs.com jednorázově nakonfigurujete „důvěryhodného vydavatele" — určíte, že konkrétní workflow v konkrétním repozitáři smí daný balíček publikovat. Při běhu workflow GitHub Actions automaticky vygeneruje krátkodobý OIDC token (JWT), npm ověří shodu s konfigurací a vydá jednorázový publikační credential. Žádný tajný klíč nikdy neopustí GitHub infrastrukturu.

Bonus: automaticky se generuje **provenance attestation** — kryptograficky podepsaný záznam přes Sigstore, který propojuje publikovaný balíček se zdrojovým kódem a konkrétním workflow runem. Na npmjs.com se u balíčku zobrazí zelená značka s odkazem na commit.

| Aspekt | Klasické tokeny | Trusted Publishing (OIDC) |
|---|---|---|
| Životnost credentials | Max 90 dní | Jednorázové, minuty |
| Správa secrets | Ruční ukládání + rotace | Žádné secrets |
| Bezpečnostní riziko | Únik z logů, krádež | Nelze extrahovat |
| Provenance | Volitelné | Automaticky |
| Lokální publikování | Ano | Ne — pouze z CI/CD |

## Setup ve 3 krocích

### 1. `package.json` — pole `repository` musí sedět

Pole `repository` musí **přesně odpovídat** (case-sensitive) vašemu GitHub repozitáři. npm a Sigstore tuto URL validují — při neshodě dostanete chybu `422 Unprocessable Entity`.

```json
{
  "name": "muj-balicek",
  "version": "1.0.0",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vas-username/muj-balicek.git"
  },
  "publishConfig": {
    "access": "public"
  }
}
```

`"access": "public"` je nutné pro scoped balíčky (`@org/package`) při prvním publikování.

### 2. Konfigurace trusted publisheru na npmjs.com

Balíček musí na npm **už existovat** — pro dosud nepublikovaný balíček nelze trusted publisher nastavit. Pokud publikujete poprvé, udělejte úvodní verzi ručně (`npm publish` lokálně).

1. Jděte na `https://www.npmjs.com/package/VAS-BALICEK/access`
2. V sekci **Trusted Publisher** vyberte **GitHub Actions**
3. Vyplňte (vše case-sensitive!):
   - **Organization or user**: váš GitHub username nebo organizace
   - **Repository**: název repozitáře (bez username předpony)
   - **Workflow filename**: přesný název souboru, např. `publish.yml`
   - **Environment** (volitelné): název GitHub Actions environment

:::caution
npm konfiguraci při uložení nevaliduje. Chyby se projeví až při pokusu o publikování (typicky 404). Zkontrolujte vše dvakrát, zvláště velikost písmen.
:::

### 3. GitHub Actions workflow

Uložte jako `.github/workflows/publish.yml` (název musí odpovídat tomu, co jste zadali na npmjs.com):

```yaml
name: Publish to npm & Create Release

on:
  push:
    tags:
      - "v*.*.*"
  workflow_dispatch:

permissions: {}

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      id-token: write
    steps:
      - uses: actions/checkout@v6

      - uses: actions/setup-node@v6
        with:
          node-version: "25"
          registry-url: "https://registry.npmjs.org"

      - run: npm ci
      - run: npm run build
      - run: npm test

      - name: Publish to npm
        run: npm publish --provenance --access public

      - name: Create GitHub Release
        uses: softprops/action-gh-release@v3
        with:
          generate_release_notes: true
```

**Jak publikovat:**

```bash
npm version patch   # nebo minor / major
git push origin main --tags
```

## Proč je workflow napsaný právě takhle

- **`npm ci`** (ne `npm install`) — instaluje přesně podle `package-lock.json`, reprodukovatelné buildy. **Vyžaduje commitnutý `package-lock.json`** v repozitáři.
- **`id-token: write`** — nejdůležitější řádek. Bez něj GitHub Actions nevygeneruje OIDC token a npm se nedokáže autentizovat.
- **`registry-url`** v `setup-node` — povinný, přestože `registry.npmjs.org` je výchozí. Bez explicitního nastavení akce nevytvoří `.npmrc` soubor potřebný pro autentizaci.
- **Node 25** — obsahuje novější npm s podporou OIDC. Minimum je npm ≥ 11.5.1 (tj. Node ≥ 24); pro starší verze přidejte `npm install -g npm@latest` před publikováním.
- **`softprops/action-gh-release@v3`** — bez explicitního `tag_name` a `name` použije tag z workflow (push trigger s `tags`), název releasu odvodí automaticky.
- **`--provenance` flag** — technicky volitelný, ale doporučený. Někteří uživatelé hlásí problémy bez něj při prvním publikování.
- **Žádný `NODE_AUTH_TOKEN`** — nenastavujte ho ani prázdný. Pokud ho npm CLI detekuje, pokusí se o tokenovou autentizaci místo OIDC.

## Alternativa: Bun

Pokud používáte [Bun](https://bun.sh/) jako package manager a runner testů, přidejte `oven-sh/setup-bun` před `setup-node`. Publikace stále používá `npm publish` — OIDC autentizace je navázaná na `.npmrc` vytvořený akcí `setup-node`:

```yaml
name: Publish to npm & Create Release

on:
  push:
    tags:
      - "v*.*.*"
  workflow_dispatch:

permissions: {}

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      id-token: write
    steps:
      - uses: actions/checkout@v6

      - uses: oven-sh/setup-bun@v2

      - uses: actions/setup-node@v6
        with:
          node-version: "25"
          registry-url: "https://registry.npmjs.org"

      - run: bun install --frozen-lockfile
      - run: bun run build
      - run: bun run test

      - name: Publish to npm
        run: npm publish --provenance --access public

      - name: Create GitHub Release
        uses: softprops/action-gh-release@v3
        with:
          generate_release_notes: true
```

`--frozen-lockfile` je Bun ekvivalent `npm ci` — vyžaduje commitnutý `bun.lockb` (nebo `bun.lock` v novějších verzích).

## Alternativa: pnpm

Pro [pnpm](https://pnpm.io/) použijte `pnpm/action-setup` a nastavte cache na `pnpm` v `setup-node`:

```yaml
name: Publish to npm & Create Release

on:
  push:
    tags:
      - "v*.*.*"
  workflow_dispatch:

permissions: {}

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      id-token: write
    steps:
      - uses: actions/checkout@v6

      - uses: pnpm/action-setup@v5

      - uses: actions/setup-node@v6
        with:
          node-version: "25"
          registry-url: "https://registry.npmjs.org"
          cache: pnpm

      - run: pnpm install --frozen-lockfile
      - run: pnpm run build
      - run: pnpm test

      - name: Publish to npm
        run: npm publish --provenance --access public

      - name: Create GitHub Release
        uses: softprops/action-gh-release@v3
        with:
          generate_release_notes: true
```

`pnpm install --frozen-lockfile` je analogie `npm ci`. Vyžaduje commitnutý `pnpm-lock.yaml`.

## Alternativní trigger: GitHub Release

Pokud preferujete vytvářet release ručně v GitHub UI:

```yaml
on:
  release:
    types: [published]

permissions: {}

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write
    steps:
      - uses: actions/checkout@v6
      - uses: actions/setup-node@v6
        with:
          node-version: "25"
          registry-url: "https://registry.npmjs.org"
      - run: npm ci
      - run: npm publish --provenance --access public
```

## Nejčastější chyby

- **`NODE_AUTH_TOKEN` nastaven** — pokud ho máte z dřívějšího setupu, smažte ho. I prázdná proměnná způsobí selhání OIDC autentizace.
- **Chybějící `id-token: write`** — bez tohoto oprávnění GitHub nevygeneruje OIDC token. Chybová hláška bývá zavádějící.
- **Case sensitivity** — username, název repozitáře i název workflow souboru musí přesně odpovídat. Organizace s velkými písmeny (např. `FrontEndDev-org`) mohou způsobit selhání provenance verifikace.
- **Self-hosted runnery nefungují** — trusted publishing vyžaduje GitHub-hosted runnery.
- **Jeden trusted publisher na balíček** — pro více workflow (prod + beta) použijte jeden vstupní workflow, který deleguje na reusable workflows.
- **Reusable workflows** — `id-token: write` musí být nastaveno jak na volajícím, tak na volaném workflow.
- **Privátní repozitáře** — provenance se negeneruje, samotná OIDC autentizace ale funguje.

## Ověření

Po úspěšném publikování zkontrolujte provenance na stránce balíčku na npmjs.com — měla by být vidět zelená značka s odkazem na zdrojový commit. Lokálně ověříte podpisy příkazem:

```bash
npm audit signatures
```

Pro maximální zabezpečení nastavte na npmjs.com **„Require two-factor authentication and disallow tokens"** — tím zablokujete jakékoli tokenové publikování a povolíte pouze nakonfigurovaný trusted publisher.
