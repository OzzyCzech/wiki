---
title: Claude Code
description: AI-powered code agent by Anthropic — commands, skills, plugins, and settings.
created: 2025-01-01
updated: 2026-06-29
sidebar:
  order: 1
---

[Claude Code](https://claude.ai/code/) is AI-powered code agent by Anthropic.

## Commands

| Command             | Description                    |
| ------------------- | ------------------------------ |
| `/help`             | Get help with using Claude Code |
| `/compact`          | Compact conversation history   |
| `/clear`            | Clear conversation             |
| `/commit`           | Create a git commit            |
| `/review-pr`        | Review a pull request          |
| `/fast`             | Toggle fast mode               |
| `/plugin`           | Manage plugins                 |
| `/loop`             | Run a command on interval      |
| `/schedule`         | Manage scheduled agents        |

## Skills

Skills are specialized prompts that extend Claude Code capabilities. They are invoked with `/<skill-name>` syntax.

| Skill               | Description                            |
| -------------------- | -------------------------------------- |
| `/commit`            | Create a git commit                    |
| `/rebase`            | Rebase the current branch              |
| `/simplify`          | Review code for reuse and quality      |
| `/loop`              | Run a prompt on recurring interval     |
| `/schedule`          | Manage scheduled remote agents         |
| `/claude-api`        | Help building apps with Claude API     |
| `/update-config`     | Configure Claude Code settings         |

## Context files

A persistent set of Markdown files seeds Claude with memory, rules, examples, and vocabulary so you don't re-explain everything each session. Only `CLAUDE.md` is auto-loaded; the rest are referenced or imported from it. This setup, shared by [José Siles](https://x.com/josesilesdata), recommends creating these before starting a project:

| File            | Purpose                                                                                 |
| --------------- | --------------------------------------------------------------------------------------- |
| `CLAUDE.md`     | General rules — the "constitution". Everything here becomes a premise of every conversation. |
| `persona.md`    | Tone and voice — how you speak, how sentences end, which first person, energy level.    |
| `lessons.md`    | Error log — one line per mistake, so the same error isn't repeated twice.               |
| `references.md` | Good examples and patterns to point at ("do it like this") — shortens instructions, raises accuracy. |
| `ng-rules.md`   | Forbidden expressions, structures, or styles you never want to see again.               |
| `glossary.md`   | Internal slang, abbreviations, and terms of your world — kills the "I don't know what you mean" replies. |

The author singles out `lessons.md` as the most powerful of the early files. The original thread numbers seven files but only six are shown in the captured post.

## Troubleshooting

### 🚨 API Error: Rate limit reached

This error appears when the conversation context is too large (e.g. 1M token window). The fix is to reduce the context by switching to the standard 200k model:

1. Run `/compact` to compress conversation history
2. Run `/model` and select **opus 4.6** (without the `1m` suffix)

:::note
`/model` may not show `claude-opus-4-6` without `1m` until after you run `/compact` first.
:::

## Settings

Settings are stored in `~/.claude/settings.json`:

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
      "MultiEdit",
      "Bash(git *)",
      "Bash(glab *)",
      "Bash(gh *)",
      "Bash(npm *)",
      "Bash(npx *)",
      "Bash(yarn *)",
      "Bash(pnpm *)",
      "Bash(curl:*)",
      "Bash(wget:*)",
      "Bash(ls:*)",
      "Bash(ls -la:*)",
      "Bash(cp:*)",
      "Bash(mv:*)",
      "Bash(mkdir:*)",
      "Bash(touch:*)",
      "Bash(find:*)",
      "Bash(cat:*)",
      "Bash(echo:*)",
      "Bash(pwd:*)",
      "Bash(cd:*)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)",
      "Read(./.ssh/**)",
      "Write(./.env)",
      "Write(./.env.*)",
      "Write(./secrets/**)",
      "Bash(chmod 777:*)",
      "Bash(rm -rf:*)",
      "Bash(sudo:*)",
      "Bash(ssh:*)",
      "Bash(scp:*)"
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


## Claude Code Status

- [Claude Code Status](https://status.claude.com/) - status of Claude Code services
- [DownDetector Status](https://downdetector.com/status/claude-ai/) - DownDetector status of Claude Code services

## 🔗 Related

- [Plugins](../plugins) — plugin marketplace overview
- [Skills](../skills) — open-source skill collections