---
title: Create tar of all folders
description: Create a tar archive for each direct subfolder in the current directory.
created: 2018-10-25
updated: 2026-04-08
---

This command creates one archive per direct subfolder in the current directory.

## Compressed archives

```bash
find . -maxdepth 1 -mindepth 1 -type d -exec tar -czvf "{}.tar.gz" "{}" \;
```

## Uncompressed archives

```bash
find . -maxdepth 1 -mindepth 1 -type d -exec tar -cvf "{}.tar" "{}" \;
```
