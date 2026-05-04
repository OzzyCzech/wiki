---
title: Load .env file in Bash
description: Load .env file in Bash
created: 2026-04-08
updated: 2026-04-08
---

There is an easy way to load an `.env` file in bash. Let's have example `.env` file:

```text
example=value
example2=value
```

then you can read this file in bash like this:

```shell
#!/usr/bin/env bash

set -o allexport
[[ -f .env ]] && source .env
set +o allexport
```

Warning: All existing variables are overridden by `.env` content.
