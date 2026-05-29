---
title: Corne keyboard
description: Open-source split ergonomic mechanical keyboard by foostan — 3x6+3 column-staggered, 42 keys, Cherry MX or Kailh Choc variants.
created: 2026-05-29
updated: 2026-05-29
---

Corne (crkbd) je open-source split ergonomická mechanická klávesnice navržená [foostanem](https://github.com/foostan/crkbd). Vychází z projektu **Helix** a stala se jednou z nejpopulárnějších DIY klávesnic — minimalistický 42-key layout s column-staggered uspořádáním a třemi palcovými klávesami na každé straně.

## Layout

- **3×6 column-staggered** matice + 3 palcové klávesy na každou polovinu → celkem **42 kláves** ve standardní konfiguraci
- Split design (dvě nezávislé poloviny propojené TRRS nebo bezdrátově)
- Bez číselné řady — práce se symboly a čísly přes vrstvy (layers)

## Varianty

- **Corne Cherry** — pro Cherry MX-kompatibilní spínače
- **Corne Chocolate** — pro Kailh Choc v1 a v2 spínače (nižší profil)

Aktuální generace je **v4** s hotswap variantami (výměna spínačů bez pájení).

## Firmware

Standardně se používá [QMK](https://qmk.fm/) (drátová verze přes Pro Micro / RP2040) nebo [ZMK](https://zmk.dev/) pro bezdrátovou variantu s [nice!nano](https://nicekeyboards.com/nice-nano/) (nRF52840, BLE). Konfigurace přes [Vial](https://get.vial.today/) je u hotswap verzí běžná.

## Licence

Projekt je dual-licensed pod **CC-BY-4.0** (hardware) a **MIT** (firmware/software) — komerční využití i forky jsou povoleny při dodržení atribuce.

## Sources

- [foostan/crkbd](https://github.com/foostan/crkbd) — oficiální repozitář s build guides (EN/JP)
- [corne.rs](https://corne.rs/) — komunitní rozcestník (informace o vendorech, dílech, layoutu)
