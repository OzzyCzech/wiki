---
title: Oh My Pi
description: Terminal coding agent based on Pi, with built-in code intelligence, debugging, subagents, and model routing.
created: 2026-09-22
updated: 2026-09-22
---

[Oh My Pi (omp)](https://omp.sh/) is an open-source terminal coding agent forked from [Pi](https://github.com/badlogic/pi-mono). It combines a terminal interface with code navigation, debugging, web and browser tools, and configurable model providers for working on a codebase.

## What stands out

- **Code-aware changes:** LSP support provides diagnostics, symbol navigation, renames, and code actions. Hash-anchored edits reject changes when their source anchors have become stale.
- **Debugging and exploration:** A DAP debugger can inspect running programs; file reading and search also cover URLs, PDFs, archives, and structured sources.
- **Subagents:** The `task` tool can split work into parallel workers, including isolated worktrees. An agent hub shows their activity and allows steering.
- **Model routing:** Different models can be assigned to roles such as the main agent, planning, small tasks, and an advisor that reviews the main agent's turns. Local models and custom providers are supported.
- **Existing configuration:** On first run, omp can discover rules, skills, and MCP servers from several other coding-agent setups, including Claude Code, Codex, and Cursor. TypeScript extensions can add tools, commands, and interface behavior.
- **Integration:** Besides the interactive terminal interface, omp provides one-shot prompts, an SDK, RPC mode, and an ACP endpoint for compatible editors.

These are project-documented capabilities; performance claims on the project site are not independently verified here.

## Getting started

The project documents Homebrew and Bun installation, among other methods:

```bash
brew install can1357/tap/omp
# or
bun install -g @oh-my-pi/pi-coding-agent
```

Run `omp` for the interactive interface. Use `omp setup` to configure a default model, or `/model` inside a session to select one. The project also documents `omp -p` for a single prompt and `omp acp` for editor integration.

## Sources

- [Oh My Pi website](https://omp.sh/) — project overview (accessed 2026-09-22)
- [Oh My Pi README](https://github.com/can1357/oh-my-pi) — features, installation, configuration, and interfaces (accessed 2026-09-22)
