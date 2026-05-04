---
title: Build docker containers with buildx
description: Guide to using Docker Buildx for building multi-platform container images.
created: 2023-07-21
updated: 2026-04-06
sidebar:
  label: Build with buildx
---

[buildx](https://github.com/docker/buildx) is a CLI tool that provides a user interface for working with builds. Buildx is a drop-in
replacement for the legacy `build` client used in earlier versions of Docker Engine and
Docker Desktop. In newer versions of Docker Desktop and Docker Engine, you’re using Buildx
by default when you invoke the `docker build` command. In earlier versions, to build using
Buildx you would use the `docker buildx build` command.

![](https://docs.docker.com/build/images/build-high-level-arch.png)

As of Docker Engine 23.0 and Docker Desktop 4.19, Buildx is the default build client.

One of the most important features of Buildx is the ability to build multi-platform images.
You can create `arm64` and `amd64` images in one build and push them to the same repository.

You can read more about buildx in [official documentation](https://docs.docker.com/buildx/working-with-buildx/).

## Create builder

First you need to create builder:

```shell
docker buildx create --use --platform=linux/arm64,linux/amd64 --name multi-platform-builder
docker buildx use multi-platform-builder
```

then you can check if it is active:

```shell
docker buildx inspect --bootstrap
docker buildx ls # check if multi-platform-builder is active
```

## Build multiplatform image

The following example shows how to build multiplatform image from `Dockerfile`:

```shell
docker buildx build \
    --platform=linux/arm64,linux/amd64 \
    --tag container:bookworm \
    --tag container:latest \
    --no-cache \
    --push .
```
