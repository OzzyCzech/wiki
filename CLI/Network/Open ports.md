---
title: Open ports
description: Use netstat and lsof to see which processes listen on which ports.
created: 2026-04-06
updated: 2026-04-06
---

Commands for listing listening ports and the processes that own them.

## Check which ports are open

The following command helps find which process is using which port:

```shell
netstat -plant
```

The following command prints open network files (sockets):

```shell
lsof -i
```
