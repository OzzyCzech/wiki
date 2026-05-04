---
title: Clone all branches and tags at once
description: Script to fetch and track all remote branches and tags in a git repository.
created: 2017-08-11
updated: 2026-04-08
sidebar:
  label: Clone everything
---

Following script clone all git branches and tags at once:

```shell
#!/bin/bash
git fetch --all --tags
for branch in `git branch -r --format="%(refname:short)" | sed 's/origin\///'`
  do git branch -f --track "$branch" "origin/$branch"
done
```

Single line version:

```shell
git fetch --all --tags; for branch in `git branch -r --format="%(refname:short)" | sed 's/origin\///'`; do git branch -f --track "$branch" "origin/$branch" ; done ;
```

## Motivation?

This command is super usefull when you need copy repo between remotes:

```shell
git remote add alternative git@github.com:....git
```

Check if is there another remote:

```shell
git remote -v
> origin	git@github.com:.../....git (fetch)
> origin	git@github.com:.../....git (push)
> alternative	git@github.com:.../....git (fetch)
> alternative	git@github.com:.../....git (push)
```

Push all changes to **alternative** remote

```shell
git push alternative --all # push all braneches
git push alternative --tags # push all tags
```
