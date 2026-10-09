---
title: Claude Code
description: AI-powered code agent by Anthropic — commands, skills, plugins, and settings.
created: 2025-01-01
updated: 2026-10-09
sidebar:
  order: 1
---

[Claude Code](https://claude.ai/code/) is an AI coding agent by Anthropic. This page is a practical reference for commands, skills, persistent context, and settings. Availability depends on your installed version, account, and platform; type `/` to see your session’s commands.

## Commands

Built-in commands control the session. Skills use prompts to guide Claude through a workflow; both appear in the `/` menu.

| Command | Description |
| --- | --- |
| `/help` | Show help |
| `/compact` | Summarize the conversation to free context |
| `/clear` | Start a new conversation; the old one remains resumable |
| `/resume` | Continue an earlier session |
| `/model` | Select a model |
| `/context` | Inspect context usage and loaded instructions |
| `/memory` | Manage instructions and auto memory |
| `/config` | Change preferences |
| `/permissions` | Inspect and change permission rules |
| `/usage` | Show usage and limits |
| `/fast` | Toggle fast mode when available |
| `/plugin` | Manage plugins |
| `/schedule` | Manage cloud routines |

## Skills

Skills are instruction packages with a `SKILL.md` entry point, optionally accompanied by scripts and reference files. Invoke them with `/<skill-name>`; Claude can also load eligible skills automatically. Personal skills live in `~/.claude/skills/<name>/SKILL.md`, project skills in `.claude/skills/<name>/SKILL.md`.

| Bundled skill | Description |
| --- | --- |
| `/code-review` | Review changes for correctness bugs |
| `/simplify` | Find and apply cleanup improvements |
| `/loop` | Repeat a prompt while the session stays open |
| `/claude-api` | Load guidance for Claude API projects |
| `/update-config` | Edit settings from a described change |

`/commit`, `/rebase`, and `/review-pr` are not standard entries in the current command reference. They may be supplied by your own skills or plugins. Use `/code-review` for the documented review workflow. `/schedule` runs cloud routines; `/loop` depends on the local session remaining open.

## Context files

Persistent instructions can come from `CLAUDE.md`, `.claude/CLAUDE.md`, user-level `~/.claude/CLAUDE.md`, and `.claude/rules/`. Auto memory keeps learned preferences and notes separately; its `MEMORY.md` index is loaded at startup, with detailed files read on demand.

Claude Code v2.1.277 and later can also load `AGENTS.md`. By default this happens when no `CLAUDE.md` or `CLAUDE.local.md` exists in the working directory or its parents. Check `/context` to see what loaded.

The following is an optional organization pattern for additional context files. Names such as `persona.md` and `lessons.md` have no special loading behavior: import them with `@persona.md` in `CLAUDE.md`, or ask Claude to read them when needed.

| File            | Purpose                                                                                 |
| --------------- | --------------------------------------------------------------------------------------- |
| `CLAUDE.md`     | Project rules and working conventions; instructions guide behavior but are not enforced permissions. |
| `persona.md`    | Tone and voice — how you speak, how sentences end, which first person, energy level.    |
| `lessons.md`    | Error log — one line per mistake, so the same error isn't repeated twice.               |
| `references.md` | Good examples and patterns to point at ("do it like this") — shortens instructions, raises accuracy. |
| `ng-rules.md`   | Forbidden expressions, structures, or styles you never want to see again.               |
| `glossary.md`   | Internal slang, abbreviations, and terms of your world — kills the "I don't know what you mean" replies. |

Keep startup instructions concise; move detailed examples and references to files loaded when needed.

## Troubleshooting

### Rate limits and large context

A rate-limit error does not by itself mean the context window is full. API limits can apply to requests, input tokens, or output tokens per minute; sharp traffic increases can also trigger acceleration limits. For API HTTP 429 responses, respect the `retry-after` header. For subscription usage, inspect `/usage` and the reset information shown by Claude Code.

For a large conversation, inspect `/context` and use `/compact` to reduce the next request’s input. This can help with token pressure, but does not reset usage limits.

To cap sessions at 200K context, start Claude Code with:

```bash
CLAUDE_CODE_DISABLE_1M_CONTEXT=1 claude
```

Selecting `opus` without `[1m]` is not a reliable way to get a 200K window: newer models can have native 1M context. Check the model configuration documentation for your model and provider.

## Settings

Settings have several scopes:

| File | Scope |
| --- | --- |
| `~/.claude/settings.json` | Personal defaults across projects |
| `.claude/settings.json` | Shared project configuration |
| `.claude/settings.local.json` | Personal project overrides |

Local settings override shared project settings, which override user settings; managed policies and command-line settings can take precedence. Keep a manually created local settings file out of Git.

The following is a personal configuration example. Its broad shell allow rules also authorize package scripts and Git or GitHub mutations. Use `/permissions` to review which actions run without a prompt. `Edit` path rules cover file editing tools; legacy `MultiEdit` and `Write(path)` rules should be replaced by `Edit(path)`.

```json
{
  "$schema": "https://json.schemastore.org/claude-code-settings.json",
  "attribution": {
    "commit": "",
    "pr": ""
  },
  "permissions": {
    "allow": [
      "Read",
      "Glob",
      "Grep",
      "Write",
      "Edit",
      "Bash(git *)",
      "Bash(glab *)",
      "Bash(gh *)",
      "Bash(npm *)",
      "Bash(npx *)",
      "Bash(yarn *)",
      "Bash(pnpm *)",
      "Bash(curl *)",
      "Bash(wget *)",
      "Bash(ls *)",
      "Bash(ls -la *)",
      "Bash(cp *)",
      "Bash(mv *)",
      "Bash(mkdir *)",
      "Bash(touch *)",
      "Bash(find *)",
      "Bash(cat *)",
      "Bash(echo *)",
      "Bash(pwd *)",
      "Bash(cd *)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)",
      "Read(./.ssh/**)",
      "Edit(./.env)",
      "Edit(./.env.*)",
      "Edit(./secrets/**)",
      "Bash(chmod 777 *)",
      "Bash(rm -rf *)",
      "Bash(sudo *)",
      "Bash(ssh *)",
      "Bash(scp *)"
    ]
  },
  "model": "opus",
  "enabledPlugins": {
    "nette@nette": true,
    "impeccable@impeccable": true
  },
  "extraKnownMarketplaces": {
    "nette": {
      "source": {
        "source": "github",
        "repo": "nette/claude-code"
      },
      "autoUpdate": true
    },
    "impeccable": {
      "source": {
        "source": "github",
        "repo": "pbakaus/impeccable"
      },
      "autoUpdate": true
    }
  },
  "voiceEnabled": false
}
```

`deny` rules take precedence over `allow`. File rules cover built-in file tools and recognized shell file operations, but cannot constrain arbitrary subprocesses that access files indirectly. Use sandboxing for operating-system enforcement.

## Claude Code Status

- [Claude service status](https://status.claude.com/) — official incident and availability dashboard
- [Downdetector](https://downdetector.com/status/claude-ai/) — user reports for Claude

## 🔗 Related

- [Plugins](../plugins) — plugin marketplace overview
- [Skills](../skills) — open-source skill collections

## Sources

Official documentation checked on 2026-10-09:

- [Commands](https://code.claude.com/docs/en/commands) — built-in commands and bundled skills.
- [Skills](https://code.claude.com/docs/en/skills) — skill structure, locations, and invocation.
- [Memory](https://code.claude.com/docs/en/memory) — instruction loading, imports, rules, and auto memory.
- [Settings](https://code.claude.com/docs/en/settings) — scopes and precedence.
- [Permissions](https://code.claude.com/docs/en/permissions) — rule syntax and enforcement boundaries.
- [Model configuration](https://code.claude.com/docs/en/model-config) — context windows and the 200K cap.
- [API rate limits](https://platform.claude.com/docs/en/api/rate-limits) — token/request limits and HTTP 429 handling.
