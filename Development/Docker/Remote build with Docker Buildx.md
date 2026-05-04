---
title: Remote build with Docker Buildx
description: How to create and use a remote Docker Buildx builder instance via SSH.
created: 2025-10-02
updated: 2026-04-06
---

## Create builder instance on remote machine

```shell
docker buildx create \
  --name MyBuilder \
  --driver docker-container \
  --platform linux/amd64 \
  ssh://user@remote-machine
```

## Use the builder instance

```shell
docker buildx build \
  --builder MyBuilder \
  --load .
```

## Switch to the builder instance

To switch to the builder instance, use the following command:

```shell
docker buildx use MyBuilder
```

More info: [Docker Buildx documentation](https://docs.docker.com/build/builders/drivers/remote/)
