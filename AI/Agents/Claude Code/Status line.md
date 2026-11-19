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
| [claude-statusline-burnrate](https://github.com/Gui-Gou/claude-statusline-burnrate) | Bash + jq status line using Claude Code's rate-limit data to show daily allowance and sustainable usage pacing, with sleep hours excluded from the calculation. |
| [ccstatusline](https://github.com/sirmalloc/ccstatusline) | Highly configurable formatter with an interactive setup TUI, themes, Powerline layouts, and a broad set of widgets. |
| [claude-powerline](https://github.com/Owloops/claude-powerline) | Vim-style Powerline layout with live usage tracking, Git information, themes, and a visual configurator. |
| [CCometixLine](https://github.com/Haleclipse/CCometixLine) | Rust implementation with Git integration, usage tracking, themes, and interactive configuration. |
| [Claude HUD](https://github.com/jarrodwatts/claude-hud) | Focuses on live activity: context use, active tools, running agents, and todo progress. |
| [cship](https://github.com/stephenleo/cship) | Rust status line with Starship-style TOML configuration and support for Starship modules. |
| [yet-another-statusline (YAS)](https://github.com/tmck-code/yet-another-statusline) | Python status line inspired by terminal monitors, with loaded plugins, skills, and subagent activity. Requires a Nerd Font. |
| [ampline](https://ampline.js.org/) | Node.js status line with no runtime dependencies, color-coded model and effort, context, usage limits, Git, cost, and PRs. Splits into two rows on narrow terminals. |
| [claudeline](https://github.com/fredrikaverpil/claudeline) | Minimal Go implementation with context and quota bars, plus indicators for approaching compaction, service disruptions, and prompt-cache warmth. |
| [claude-code-token-bar](https://github.com/muzafferkadir/claude-code-token-bar) | Lightweight Bash + jq script showing usage limits and reset times, session cost, Git, model, effort, and prompt-cache warmth. |
| [cclimits](https://github.com/cruzanstx/cclimits) | CLI quota tracker for multiple providers, including Claude Code, Codex, and Gemini CLI, with JSON and compact one-line output. |
| [cc-minimal-statusline](https://npmx.dev/package/cc-minimal-statusline) | Another minimal status line shared in the community's screenshot discussion. |

## Choosing one

- For a clean, low-setup line with a separate Claude Desktop plugin, start with [ctxline](https://ctxline.js.org/).
- For extensive widget and layout customization, compare [ccstatusline](https://github.com/sirmalloc/ccstatusline) and [claude-powerline](https://github.com/Owloops/claude-powerline).
- For agent and tool activity, try [Claude HUD](https://github.com/jarrodwatts/claude-hud).
- For a compiled Rust tool, consider [CCometixLine](https://github.com/Haleclipse/CCometixLine) or [cship](https://github.com/stephenleo/cship).
- For a terminal-monitor layout with plugin and skill details, try [YAS](https://github.com/tmck-code/yet-another-statusline).
- For a minimal compiled Go tool, consider [claudeline](https://github.com/fredrikaverpil/claudeline).
- For quota tracking across providers, use [cclimits](https://github.com/cruzanstx/cclimits).

Most status lines are CLI commands configured in Claude Code settings. Read each project's installation notes before switching: some use Claude Code plugins, and the CLI status-line mechanism does not automatically run inside Claude Desktop.

## Related

- [Claude Code](../claude-code) — commands, settings, and context files
- [Plugins](../plugins) — Claude Code plugin setup
