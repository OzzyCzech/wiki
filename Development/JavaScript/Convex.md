---
title: Convex
description: Reactive TypeScript backend platform combining a document database, serverless functions and real-time sync.
created: 2026-09-18
updated: 2026-09-18
---

[Convex](https://www.convex.dev/) is a reactive backend platform where the database, the server functions and the client subscriptions are one system instead of three you glue together. Backend logic is written in plain TypeScript, and the client keeps a WebSocket open so any query re-runs and re-renders when the data it read changes.

```bash
npm create convex@latest
```

## Programming model

Three kinds of server functions, all written in TypeScript:

- **Queries** — read-only and deterministic. Convex tracks which data a query touched and reruns it automatically when that data changes, pushing results to clients over WebSocket
- **Mutations** — run as a single transaction with automatic retry on conflict; there are no explicit `begin`/`commit` statements
- **Actions** — can reach the network (call an LLM, send mail) and therefore have no direct database access; they call queries and mutations instead

On top of those come HTTP endpoints, [scheduled functions and cron jobs](https://docs.convex.dev/) for durable delayed work, and end-to-end type safety from schema to client.

## What comes with it

- Document database with a relational data model, schemas, indexes and pagination
- File storage with upload, deletion, metadata and serving
- Full-text search and vector search over embeddings
- Authentication via built-in Convex Auth, Clerk, Auth0, WorkOS AuthKit or custom OIDC/JWT
- [Components](https://www.convex.dev/components) — self-contained, sandboxed building blocks installed into an app
- [Agent tooling](https://docs.convex.dev/agents/overview) — an Agent component with tools and streaming, an AI Gateway for managed LLM access, and an [MCP server](https://docs.convex.dev/ai/convex-mcp-server) plus skills so Claude Code, Cursor or Copilot can work against a Convex project

Clients are officially supported for React, Next.js, Vue, Nuxt, Svelte, TanStack Start, Remix, Bun and React Native, for iOS (Swift) and Android (Kotlin), and for Node.js, Python and Rust, with a plain script tag and OpenAPI as fallbacks.

## Licensing and self-hosting

The backend is published as source under the [Functional Source License](https://github.com/get-convex/convex-backend) (FSL-1.1-Apache-2.0) — usable and modifiable, restricted only against competing offerings, and converting to Apache 2.0 two years after each release. Note that the project markets itself as open source even though FSL is not an OSI-approved licence.

[Self-hosting](https://docs.convex.dev/self-hosting) covers most of the cloud feature set including the dashboard and CLI, deployed via Docker or a prebuilt binary, with SQLite or Postgres as the storage layer. The test suites used internally are not part of the published source.
