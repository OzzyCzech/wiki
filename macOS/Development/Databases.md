---
title: Databases
description: Database tools for macOS — Sequel Ace, Medis, and MongoDB setup via Homebrew.
created: 2026-04-01
updated: 2026-04-28
---

## SQL

- [Sequel Ace](https://sequel-ace.com/) - MySQL/MariaDB database management for macOS

## Redis GUI

- **[Medis](https://getmedis.com/)** — beautiful, easy-to-use Mac database management application for Redis
- **[Tiny RDM](https://redis.tinycraft.cc/)** — modern, lightweight cross-platform Redis desktop manager (macOS, Windows, Linux); GPL-3.0, light/dark themes

## MongoDB (Homebrew)

First you need to tap the official MongoDB brew:

```bash
brew tap mongodb/brew
```

Then just install mongo with:

```bash
brew install mongodb-community
```

There is one tool which people often want to install on its own, and that's the MongoDB shell.

```bash
brew install mongodb-community-shell
```

You can also install only [database tools](https://docs.mongodb.com/database-tools/) for managing mongo database:

```bash
brew install mongodb-database-tools
```

### Starting mongo

```bash
brew services start mongodb-community
```

or stop

```bash
brew services stop mongodb-community
```
