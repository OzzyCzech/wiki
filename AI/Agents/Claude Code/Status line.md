---
title: Claude Code Status Line
description: Selected custom status lines for Claude Code, from lightweight scripts to configurable terminal dashboards.
created: 2026-11-19
updated: 2026-11-19
---

Claude Code can display a custom status line below the prompt. These projects add details such as context usage, model, Git state, session cost, usage limits, and active agents. The list highlights a personal project, a polished design reference, and widely used alternatives.

## Projects

| Project | What stands out |
| --- | --- |
| [claude-code-statusline](https://github.com/OzzyCzech/claude-code-statusline) | My own Claude Code status line project. |
| [ctxline](https://ctxline.js.org/) | A particularly polished, compact design. The CLI line combines project and Git state, model, context, usage limits, and cost; a separate plugin adds a status display to Claude Desktop's Code tab. |
| [ccstatusline](https://github.com/sirmalloc/ccstatusline) | Highly configurable formatter with an interactive setup TUI, themes, Powerline layouts, and a broad set of widgets. |
| [claude-powerline](https://github.com/Owloops/claude-powerline) | Vim-style Powerline layout with live usage tracking, Git information, themes, and a visual configurator. |
| [CCometixLine](https://github.com/Haleclipse/CCometixLine) | Rust implementation with Git integration, usage tracking, themes, and interactive configuration. |
| [Claude HUD](https://github.com/jarrodwatts/claude-hud) | Focuses on live activity: context use, active tools, running agents, and todo progress. |
| [cship](https://github.com/stephenleo/cship) | Rust status line with Starship-style TOML configuration and support for Starship modules. |

## Choosing one

- For a clean, low-setup line with a separate Claude Desktop plugin, start with [ctxline](https://ctxline.js.org/).
- For extensive widget and layout customization, compare [ccstatusline](https://github.com/sirmalloc/ccstatusline) and [claude-powerline](https://github.com/Owloops/claude-powerline).
- For agent and tool activity, try [Claude HUD](https://github.com/jarrodwatts/claude-hud).
- For a compiled Rust tool, consider [CCometixLine](https://github.com/Haleclipse/CCometixLine) or [cship](https://github.com/stephenleo/cship).

Most status lines are CLI commands configured in Claude Code settings. Read each project's installation notes before switching: some use Claude Code plugins, and the CLI status-line mechanism does not automatically run inside Claude Desktop.

## Related

- [Claude Code](../claude-code) — commands, settings, and context files
- [Plugins](../plugins) — Claude Code plugin setup
