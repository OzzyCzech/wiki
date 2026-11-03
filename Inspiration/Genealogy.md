---
title: Genealogie
description: Nástroje pro rodinnou historii — Gramps Web pro správu rodokmenu a skill Rodokmen pro pátrání v archivech s pomocí AI.
created: 2026-11-02
updated: 2026-11-02
---

Nástroje pro pátrání po předcích, správu genealogických záznamů a prezentaci rodokmenu.

## Gramps Web

**[Gramps Web](https://www.grampsweb.org/)** je open-source genealogický systém, který lze provozovat na vlastním serveru a společně v něm vytvářet rodokmen. Eviduje osoby, rodiny, události, místa, prameny, citace, média a poznámky; nabízí interaktivní grafy a mapy.

Funguje samostatně i vedle aplikace Gramps Desktop. Doplněk Gramps Web Sync umožňuje obousměrnou synchronizaci mezi webovou a desktopovou aplikací.

## Skill Rodokmen

**[Rodokmen](https://github.com/sarsonj/rodokmen-skill)** od Jindřicha Šaršona je skill pro [Claude Code](/ai/agents/claude-code/claude-code/). Vede agenta od rodinných vzpomínek a dokumentů přes hledání v českých matrikách až k vytvoření webu s rodokmenem.

### Postup práce

- Začíná se známými příbuznými a rodinnými dokumenty; agent dohledává archivní záznamy a postupuje ke starším generacím.
- Ukládá výřezy zápisů, přepisy, překlady a badatelský deník, aby bylo možné nálezy ověřit.
- Vytváří web s grafy předků, mapou, kartami osob a rodinnými příběhy; volitelně jej lze zveřejnit na Netlify.

Projekt využívá Python 3, Node.js, ImageMagick a Git. Podpora archivů se liší: pro některé portály má vlastní nástroje, u jiných je potřeba pracovat přes prohlížeč.

### Instalace do Claude Code

```text
/plugin marketplace add sarsonj/rodokmen-skill
/plugin install rodokmen@rodokmen-skill
```

Po instalaci restartuj Claude Code a spusť `/rodokmen`. Při dalším sezení otevři složku projektu s rodokmenem, aby agent navázal na předchozí práci.

### Praktická omezení

Příbuzenské vazby ověřuj podle původních snímků: staré písmo a opakující se jména mohou vést k chybnému propojení osob. Test Živě.cz odhalil chyby u starších generací, přestože u bližších předků byly výsledky dobré.

Při přístupu do archivů používej společný omezovač síťových požadavků z aktuální verze skillu. Aktualizace článku z 2. listopadu 2026 potvrzuje, že jej autor doplnil po hlášeních o blokování IP adres.

## Zdroje

- [Gramps Web](https://www.grampsweb.org/) a [přehled funkcí](https://www.grampsweb.org/features/) — datový model, grafy, mapy a synchronizace s desktopovou aplikací; ověřeno 2026-11-02
- [Repozitář Rodokmen](https://github.com/sarsonj/rodokmen-skill) — postup práce, závislosti, instalace a ověřování nálezů; ověřeno 2026-11-02
- [Živě.cz: Claude Code a rodokmen](https://www.zive.cz/clanky/claude-code-skill-rodokmen/sc-3-a-244120/default.aspx) — praktický test a aktualizace o omezení požadavků na archivy; ověřeno 2026-11-02
