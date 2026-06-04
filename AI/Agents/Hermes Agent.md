---
title: Hermes Agent
description: Self-hosted autonomous agent runtime from Nous Research with persistent memory, auto-generated skills, subagents, and multi-platform messaging gateways.
created: 2026-04-08
updated: 2026-06-04
---

Hermes Agent is a self-hosted autonomous agent runtime built by [Nous Research](https://nousresearch.com/) and released under the MIT license. It is a long-running process that maintains its own persistent memory and skill library across sessions, exposes the agent through messaging gateways and a CLI, and orchestrates tool calls, subagents, and scheduled tasks on the user's own infrastructure rather than a vendor cloud.

## 🔑 Key capabilities

- **Persistent memory** — agent-curated knowledge base with full-text search (FTS5) and cross-session recall via LLM summarization
- **Auto-generated skills** — the agent creates reusable skills during operation using the open [Agent Skills](../../tools/agent-skills) format; community-contributed skills are available via [agentskills.io](https://agentskills.io)
- **Subagents** — isolated subagents with their own conversations, terminals, and Python RPC scripts for parallel, zero-context-cost pipelines
- **Built-in scheduling** — natural language cron jobs for reports, backups, and briefings running unattended
- **47 built-in tools** — web search, browser automation, vision, image generation, text-to-speech, and more
- **MCP integration** — connects to any Model Context Protocol server with tool filtering

## 🌐 Messaging gateways

Supports 14+ platforms: CLI, Telegram, Discord, Slack, WhatsApp, Signal, Matrix, Mattermost, Email, SMS, DingTalk, Feishu, WeCom, Home Assistant. Conversations are portable — start on one platform, continue on another.

## 🛠️ Deployment backends

| Backend         | Notes                                       |
| --------------- | ------------------------------------------- |
| Local           | Linux, macOS, WSL2                          |
| Docker          | Container hardening and namespace isolation |
| SSH             | Remote execution                            |
| Singularity     | HPC environments                            |
| Modal / Daytona | Serverless, near-zero cost when idle        |

## 💻 Desktop app

[Hermes Desktop](https://hermes-ai.net/desktop/) is a native installer that bundles the agent runtime with a GUI.

- **macOS 12+** — DMG installer
- **Windows 10/11** — EXE installer
- **Linux** — curl installer (terminal-based)

The desktop app exposes the same capabilities as the headless runtime — persistent memory, auto-generated skills, subagents, scheduling, 47+ built-in tools, MCP — and adds direct integration with Nous Portal (subscription tiers with monthly credits and access to 300+ models). Sandboxing offers five backends: **local**, **Docker**, **SSH**, **Singularity**, **Modal**.

## 🤖 Model support

Compatible with Nous Portal, OpenRouter, OpenAI, and custom endpoints.

## 🧪 Research features

- Trajectory export for research and evaluation
- RL training pipeline via the [Atropos](https://github.com/NousResearch/Atropos) framework
- Honcho-based dialectic user modeling

## Sources

- [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/) — official landing page (accessed 2026-04-08)
- [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/) — technical documentation (accessed 2026-04-08)
