---
title: Command line tools
description: Curated list of CLI tools — search, file handling, HTTP, JSON processing, and modern alternatives to classic Unix utilities.
created: 2023-03-20
updated: 2026-05-06
---

Useful CLI utilities, mostly modern Rust/Go rewrites of classic Unix tools. On macOS install via [Homebrew](https://brew.sh/) (`brew install <name>`).

## Search & navigation

- **[ripgrep](https://github.com/BurntSushi/ripgrep)** (`rg`) — fast recursive code search; respects `.gitignore` and skips binaries by default; powers search in VS Code and Helix
- **[ack](https://beyondgrep.com/)** — older grep-like source code search tool, predecessor to ripgrep
- **[fd](https://github.com/sharkdp/fd)** — fast, user-friendly alternative to `find` with sane defaults
- **[sd](https://github.com/chmln/sd)** — intuitive `find & replace` alternative to `sed`

## File viewing & manipulation

- **[bat](https://github.com/sharkdp/bat)** — `cat` clone with syntax highlighting, line numbers, and Git diff integration
- **[eza](https://github.com/eza-community/eza)** — modern replacement for `ls` (maintained fork of the now-archived `exa`); colored output, Git status, tree mode
- **[trash](https://hasseg.org/trash/)** — moves files to the macOS Trash instead of permanent deletion (`rm`-safe alternative)

## HTTP & networking

- **[curl](https://curl.se/)** — universal data transfer; included on macOS by default but `brew install curl` gives you the latest
- **[HTTPie](https://httpie.io/)** — human-friendly HTTP client; intuitive flags, JSON-aware syntax, formatted output
- **[dog](https://github.com/ogham/dog)** — modern DNS client, alternative to `dig`

## Data processing

- **[jq](https://jqlang.github.io/jq/)** — command-line JSON processor with its own query language

## Productivity

- **[git](https://git-scm.com/)** — distributed version control
- **[tldr](https://tldr.sh/)** — simplified, community-driven man pages with practical examples
