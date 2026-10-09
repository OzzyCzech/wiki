---
title: Plugins
description: Claude Code plugins enabled in my dotfiles, their marketplaces, and installation commands.
created: 2026-04-09
updated: 2026-10-09
---

Plugins extend Claude Code with skills, agents, hooks, and MCP or LSP integrations. This page tracks the plugins enabled in my [settings.json](https://github.com/OzzyCzech/dotfiles/blob/main/claude/settings.json), checked on 2026-10-09. Entries in `enabledPlugins` describe configuration; they do not confirm that a plugin is installed on a particular machine.

## Enabled plugins

- **[Nette](https://github.com/nette/agent-plugins)** — `nette@nette`: application-development skills for the Nette PHP ecosystem, including architecture, dependency injection, database access, forms, Latte, and Tracy.
- **[Frontend Design](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/frontend-design)** — `frontend-design@claude-plugins-official`: guidance for creating distinctive frontend interfaces with polished design.
- **[Agent Skills](https://github.com/addyosmani/agent-skills)** — `agent-skills@addy-agent-skills`: engineering workflows across planning, implementation, testing, review, and shipping. See [Skills](../skills) for more detail.
- **[Swift LSP](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/swift-lsp)** — `swift-lsp@claude-plugins-official`: Swift code intelligence through SourceKit-LSP. Its server configuration runs the `sourcekit-lsp` executable.
- **[CLAUDE.md Management](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-md-management)** — `claude-md-management@claude-plugins-official`: audit and improve `CLAUDE.md` files, capture session learnings, and keep project instructions current.

## Marketplaces

`extraKnownMarketplaces` registers plugin catalogs separately from `enabledPlugins`.

| Marketplace | GitHub source in settings | Explicit auto-update setting |
| --- | --- | --- |
| `nette` | [nette/claude-code](https://github.com/nette/claude-code) | `true` |
| `impeccable` | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | `true` |
| `addy-agent-skills` | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Not set |

The three `@claude-plugins-official` plugins come from [Anthropic’s official marketplace](https://github.com/anthropics/claude-plugins-official), which is not listed in `extraKnownMarketplaces`.

**[Impeccable](https://impeccable.style/)** remains a registered marketplace, but `impeccable@impeccable` is absent from `enabledPlugins`. Registration alone does not enable its plugin.

The configured `nette/claude-code` URL now redirects to `nette/agent-plugins`; the Nette project documents the new name for installation.

## Installation

Add the custom marketplaces, then install the enabled plugins in Claude Code:

```text
/plugin marketplace add nette/agent-plugins
/plugin marketplace add addyosmani/agent-skills
/plugin install nette@nette
/plugin install frontend-design@claude-plugins-official
/plugin install agent-skills@addy-agent-skills
/plugin install swift-lsp@claude-plugins-official
/plugin install claude-md-management@claude-plugins-official
```

Use `/plugin` to inspect installed plugins and their scope. Adding a marketplace makes its plugins discoverable; installing a plugin is a separate step.

## Related

- [Claude Code](../claude-code) — commands and settings reference
- [Skills](../skills) — open-source skill collections

## Sources

- [Install and manage plugins](https://code.claude.com/docs/en/discover-plugins) — installation, scopes, and the distinction between enabled configuration and installed plugins (accessed 2026-10-09).
- [Official marketplace catalog](https://github.com/anthropics/claude-plugins-official/blob/main/.claude-plugin/marketplace.json) — plugin descriptions and Swift LSP server configuration (accessed 2026-10-09).
