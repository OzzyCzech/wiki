---
title: Proximity hover effects
description: Interakční vzor, kdy se prvky reagují na blízkost kurzoru — ne jen na hover. Plynulé škálování a změna podle vzdálenosti dělají UI živějším.
created: 2026-05-29
updated: 2026-05-29
---

Klasický `:hover` je binární — buď myš nad prvkem je, nebo ne. **Proximity-based interakce** sleduje vzdálenost kurzoru od každého prvku a aplikuje plynulý efekt podle této vzdálenosti. Výsledek působí responzivně a živě, podobně jako macOS Dock magnification.

## Princip

Pro každý prvek se počítá vzdálenost mezi kurzorem a středem prvku. Z té se odvodí intenzita efektu (`scale`, `opacity`, `filter`, …) — typicky přes lineární rampu s prahem (např. `120 px`), za kterým je efekt nulový.

## Minimální implementace

```js
onpointermove = e =>
  document.querySelectorAll(".dock > *").forEach(el => {
    const r = el.getBoundingClientRect();
    const t = Math.max(0, 1 - Math.abs(e.clientX - r.x - r.width / 2) / 120);
    el.style.scale = 1 + t * 0.5;
  });
```

- `t` je normalizovaná blízkost v intervalu `[0, 1]` (1 = kurzor přímo na středu, 0 = mimo dosah)
- `120` je práh v pixelech, kde efekt přechází do nuly
- `scale = 1 + t * 0.5` znamená maximální zvětšení na **1.5×** ve středu

## Možnosti rozšíření

- **2D vzdálenost** — počítat `Math.hypot(dx, dy)` místo jen horizontální složky
- **Více vlastností** — kombinovat `scale`, `opacity`, `filter: brightness()` pro „temnější" prvky dál od kurzoru
- **Throttling** — pro velké DOM kolekce použít `requestAnimationFrame` místo přímé manipulace ve `pointermove`
- **CSS proměnné** — místo `el.style.scale` nastavovat `--proximity` a efekt řešit v CSS (lépe se cachuje a animuje)

## Kdy použít

- Doky, paletky nástrojů, navigační lišty s ikonami
- Galerie miniatur, kde uživatel skenuje obsah pohybem myši
- Hero sekce, kde má interakce dělat dojem

Naopak se nehodí pro běžné formuláře a textový obsah — efekt rozptyluje, když uživatel míří na konkrétní cíl.
