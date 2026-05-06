---
title: Command line tools
description: Essential command line tools — ack, bat, fd, and other useful CLI utilities.
created: 2023-03-20
updated: 2026-05-06
---

## [ack](https://beyondgrep.com)

`ack` is a grep-like source code search tool.

```shell
ack 'foo' --js
```

```shell
brew install ack
```

## [ripgrep](https://github.com/BurntSushi/ripgrep)

`ripgrep` (`rg`) is a fast recursive code search tool that respects `.gitignore` and skips binary files by default. Powers the search in VS Code and Helix.

```shell
rg 'foo' --type js
```

```shell
brew install ripgrep
```

## [bat](https://github.com/sharkdp/bat)

`bat` is a `cat` clone with syntax highlighting and Git integration.

![bat syntax-highlighting screenshot](https://i.imgur.com/2lSW4RE.png)

```shell
brew install bat
```

## [fd](https://github.com/sharkdp/fd)

`fd` is a fast and user-friendly alternative to `find`

![fd screencast](https://github.com/sharkdp/fd/raw/master/doc/screencast.svg)

```shell
brew install fd
```

## [sd](https://github.com/chmln/sd)

`sd` is an intuitive find & replace command-line tool, it is an alternative to `sed`

```shell
sd 'foo' 'bar' foo.txt
```

```shell
brew install sd
```

## [dog](https://github.com/ogham/dog)

`dog` is a command-line DNS client, like `dig`

```shell
dog google.com
```

## [exa](https://the.exa.website/)

`exa` is a modern replacement for `ls`.

```shell
exa -l
```

````shell

![dog screenshot](https://github.com/ogham/dog/raw/master/dog-screenshot.png)

```shell
brew install dog
````
