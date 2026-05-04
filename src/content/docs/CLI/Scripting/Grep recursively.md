---
title: Grep recursively
description: Search recursively through all files under a directory and its subdirectories.
created: 2026-04-08
updated: 2026-04-08
---

## Search recursively through all files

Command searches recursively through all files under `"/your/folder"` and its subdirectories,
prints the filename and line number for any line containing the exact string `"string"`,
suppresses errors for missing files, and only matches whole words.

```shell
grep -Rsnw "/your/folder" -e "string"
```

- `R` - Recursively search all files under the specified directory and its subdirectories.
- `s` - Suppress error messages for nonexistent or unreadable files.
- `n` - Print the line number where the match was found.
- `w` - Only match whole words, not strings contained in larger words.

