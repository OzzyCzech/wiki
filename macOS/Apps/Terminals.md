---
title: Terminals
description: Terminal emulators for macOS — general-purpose GPU-accelerated apps and newer workspaces built around projects and AI agents.
created: 2026-04-01
updated: 2026-09-18
---

Terminal emulators for macOS, split into two groups: general-purpose emulators, and the newer wave of workspaces that organize shells by project and are built for running several CLI agents side by side. Most of the general-purpose ones install via `brew install --cask <name>`.

## Agent and project workspaces

- **[Okena](https://www.okena.dev/)** — native terminal multiplexer in Rust with GPU-accelerated rendering on GPUI (the framework behind Zed), built for running multiple CLI agents such as Claude Code across projects; resizable project columns side by side, session restore of terminals, agents and layouts, git branch tracking and worktree management, keyboard-first controls; macOS, Linux and Windows, open source (MIT), installed by shell script or from source via Cargo
- **[cmux](https://cmux.com/)** — macOS terminal built on libghostty (used as a library, not a Ghostty fork) for managing multiple AI coding agents; vertical tabs showing git branch, working directory and ports, split panes, notification rings for processes needing attention, a scriptable embedded browser and a CLI/socket API; works with any terminal-runnable agent, open source (GPL), iOS companion app in beta
- **[Kero](https://kero.sh/)** — native macOS workspace that wraps the shell in project context: projects sidebar (Cmd+1–9), persistent tabs and split panes restored on relaunch, a git panel with staging, commits and inline diffs, a file browser with syntax-highlighted editing, and browser panes for previewing local servers; agent-aware, so coding agents can delegate and coordinate work across panes; GPU terminals via Ghostty or Alacritty backends, macOS 15.6+, no telemetry, open source (GPL-3.0) — `brew install egoist/tap/kero`
- **[ShellBoard](https://calmbit.cz/en/shellboard)** — terminal workspace that organizes shells by project instead of a flat tab list; color-coded project groups, session restore including splits, pane sizes, working directories and scrollback, live git status, broadcast input to every pane, command palette and global search across output; built on Tauri 2 rather than Electron, works with zsh, bash, fish and nu; macOS 13+, Linux and Windows 10+, free with [source on GitHub](https://github.com/calmbit-sro/shellboard); from Prague-based Calmbit
- **[Warp](https://www.warp.dev/)** — started as an AI-assisted terminal with command blocks and a command palette, now positioned as an agentic development environment: the terminal itself is open source ([AGPL-3.0](https://github.com/warpdotdev/warp), Rust), alongside a standalone Agent CLI and Factories for orchestrating fleets of agents from triage to a mergeable PR; MCP support and integrations with GitHub, GitLab, Slack, Linear and Jira; macOS, Linux and Windows, Factories require a platform account

## General-purpose emulators

- **[Ghostty](https://ghostty.org/)** — GPU-accelerated terminal in Zig with platform-native UI, ligatures and image protocol support; macOS 13+ as a universal binary plus Linux, open source (MIT). Its rendering core `libghostty` is reused by cmux, Kero and rootshell
- **[iTerm2](https://iterm2.com/)** — long-standing Terminal replacement with split panes, search, autocomplete, paste history and deep customization; version 3.7 (September 2026) added tab groups, a companion iOS app and a [Claude Code integration](https://iterm2.com/claude-code-integration.html), on top of built-in [AI chat](https://iterm2.com/documentation-ai-chat.html) with configurable OpenAI-compatible providers (Ollama, OpenRouter, z.ai, Qwen, MiniMax); macOS 13+, open source
- **[Kitty](https://sw.kovidgoyal.net/kitty/)** — GPU-accelerated terminal with ligatures, image support and a tiling window system; highly configurable via a plain-text config, open source (GPL-3.0), macOS 12+
- **[Alacritty](https://alacritty.org/)** — minimal OpenGL-accelerated terminal in Rust focused purely on performance and simplicity, leaving tabs and splits to a multiplexer; cross-platform, open source (Apache-2.0)
- **[WezTerm](https://wezterm.org/)** — GPU-accelerated cross-platform terminal and multiplexer in Rust with ligatures and Lua-based configuration; the last tagged stable release is from February 2024, with development since then distributed as nightly builds
- **[Hyper](https://hyper.is/)** — terminal built on web technologies (HTML/CSS/JS) with a plugin and theme ecosystem; open source (MIT), but the last release (3.4.1) dates to January 2023
- **[rootshell](https://rootshell.com/)** — Metal-accelerated terminal for iPhone, iPad, Vision Pro and Mac, rendered through libghostty; integrated SSH with hardware security key support, Mosh-compatible roaming, QUIC/KCP transport and post-quantum cryptography, native Git CLI via libgit2, Vim 9, Helix and tmux control mode, screen sharing over HEVC, plus a built-in AI chat and voice agent; free, open source ([MIT](https://github.com/kitknox/rootshell))

Terminals aimed primarily at orchestrating agents rather than at being a shell live in [Coding Agent Tools](/ai/agents/coding-agents/).
