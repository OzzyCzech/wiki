---
title: How to keep GitHub Fork Updated (no merge - the right way)
description: Keep your GitHub fork updated using rebase instead of merge for a clean history.
created: 2015-11-12
updated: 2026-04-06
sidebar:
  label: Update GitHub Fork
---

Here is a solution for keeping your fork updated [without merge](https://help.github.com/articles/syncing-a-fork) and
clean history.

```shell
git clone git@github.com:[username]/[repo].git
git remote add upstream git@github.com:[username2]/[repo].git
```

When something changes in the forked repo

```shell
git fetch upstream
git checkout [branch]
git rebase upstream/[branch]
```
