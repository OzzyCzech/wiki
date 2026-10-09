---
title: Pi
description: Minimal, extensible agent harness with a terminal interface, multiple model providers, and SDK and RPC integration.
created: 2026-10-09
updated: 2026-10-09
---

[Pi](https://pi.dev/) is a minimal agent harness designed to adapt to your workflow. Its core stays small; extensions, skills, prompt templates, and themes provide customization.

## Features

- **Extensibility:** TypeScript extensions add tools, commands, and interface behavior. Bundle extensions, skills, prompts, and themes as packages distributed through npm or Git.
- **Model choice:** Supports providers including Anthropic, OpenAI, Google, OpenRouter, and Ollama, with model switching during a session.
- **Session history:** Conversations form a tree that can be revisited and branched; sessions can be exported to HTML.
- **Integration:** Interactive terminal interface, print/JSON output, RPC over standard input/output, and an SDK for embedding in applications.
- **Minimal defaults:** Subagents, plan mode, and permission prompts are left to extensions or custom workflows. MCP is built in.

## Getting started

```bash
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
pi
```

## Related

- [Agent Harness](../../concepts/agent-harness) — the layer that turns a model into an agent.
- [Oh My Pi](../oh-my-pi) — a coding agent forked from Pi with additional built-in capabilities.

## Sources

- [Pi website](https://pi.dev/) — features, installation, and customization (accessed 2026-10-09).
