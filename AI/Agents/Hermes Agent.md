---
title: Hermes Agent
description: Open-source autonomous agent by Nous Research that runs on your server, persists memory across sessions, and grows more capable over time.
created: 2026-04-08
updated: 2026-04-08
---
Hermes Agent is an open-source autonomous agent developed by Nous Research (MIT license). Unlike IDE copilots or chatbot wrappers, it runs persistently on your own infrastructure, learns from every session, and self-improves by generating new skills over time.

## 🔑 Key capabilities

- **Persistent memory** — agent-curated knowledge base with full-text search (FTS5) and cross-session recall via LLM summarization
- **Auto-generated skills** — the agent creates reusable skills during operation; community-contributed skills are available via [agentskills.io](https://agentskills.io)
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

## 🤖 Model support

Compatible with Nous Portal, OpenRouter, OpenAI, and custom endpoints.

## 🧪 Research features

- Trajectory export for research and evaluation
- RL training pipeline via the [Atropos](https://github.com/NousResearch/Atropos) framework
- Honcho-based dialectic user modeling

## Sources

- [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/) — official landing page (accessed 2026-04-08)
- [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/) — technical documentation (accessed 2026-04-08)
