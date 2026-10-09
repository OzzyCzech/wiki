---
title: Claude Code
description: AI coding agent by Anthropic — commands, skills, plugins, persistent context, and settings.
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

## Settings

Settings have several scopes:

| File | Scope |
| --- | --- |
| `~/.claude/settings.json` | Personal defaults across projects |
| `.claude/settings.json` | Shared project configuration |
| `.claude/settings.local.json` | Personal project overrides |

Local settings override shared project settings, which override user settings; managed policies and command-line settings can take precedence. Keep a manually created local settings file out of Git.

My configuration: [claude/settings.json in dotfiles](https://github.com/OzzyCzech/dotfiles/blob/main/claude/settings.json).

## Claude Code Status

- [Claude service status](https://status.claude.com/) — official incident and availability dashboard
- [Downdetector](https://downdetector.com/status/claude-ai/) — user reports for Claude

## 🔗 Related

- [Plugins](../plugins) — plugin marketplace overview
- [Skill Collections](../../../skills/skill-collections) — open-source skill collections

## Sources

Official documentation checked on 2026-10-09:

- [Commands](https://code.claude.com/docs/en/commands) — built-in commands and bundled skills.
- [Skills](https://code.claude.com/docs/en/skills) — skill structure, locations, and invocation.
- [Memory](https://code.claude.com/docs/en/memory) — instruction loading, imports, rules, and auto memory.
- [Settings](https://code.claude.com/docs/en/settings) — scopes and precedence.
