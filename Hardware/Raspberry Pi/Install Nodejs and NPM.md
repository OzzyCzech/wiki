---
title: Install Node.js and NPM
description: Jak nainstalovat Node.js na Raspberry Pi — přes nvm (doporučeno) nebo NodeSource repozitář.
created: 2026-04-08
updated: 2026-04-08
---

Nejflexibilnější způsob instalace Node.js na Raspberry Pi je přes **nvm** (Node Version Manager), který umožňuje snadno přepínat mezi verzemi. Alternativou je NodeSource repozitář.

## Doporučeno: nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/HEAD/install.sh | bash
```

Po instalaci restartuj terminál (nebo spusť `source ~/.bashrc`), pak nainstaluj aktuální LTS:

```bash
nvm install --lts
nvm use --lts
```

Ověření:

```bash
node -v
npm -v
```

## Alternativa: NodeSource repozitář

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x -o nodesource_setup.sh
sudo -E bash nodesource_setup.sh
sudo apt install -y nodejs
```

`setup_lts.x` aktuálně instaluje Node.js v22 (aktuální LTS).

## Sources

- [nvm — GitHub](https://github.com/nvm-sh/nvm) — instalace a dokumentace
- [NodeSource distributions](https://github.com/nodesource/distributions) — aktuální setup scripty
