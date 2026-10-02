---
title: Supabase
description: Open source backend platform built on a dedicated Postgres database, with auth, storage, edge functions and realtime on top.
created: 2026-10-02
updated: 2026-10-02
---

[Supabase](https://supabase.com/) is a backend platform built around a dedicated Postgres database per project, with authentication, object storage, serverless functions and realtime layered on top. The distinguishing choice is that none of it hides the database: the data model is plain Postgres, so psql, Prisma, Drizzle and any other Postgres client or ORM work directly against a project, and several features are Postgres extensions rather than proprietary services.

## What comes with it

- **Database** — Postgres with auto-generated REST ([PostgREST](https://github.com/PostgREST/postgrest)) and GraphQL APIs, a table editor and a SQL editor
- **Auth** — email and password, magic links, phone OTP and OAuth providers, wired into Row Level Security policies, which are also what guards Storage
- **Storage** — S3-compatible object storage behind a CDN, with image transformations
- **Edge Functions** — TypeScript on Deno with Node compatibility, deployed globally
- **Realtime** — WebSocket sync in three modes: listening to Postgres changes, presence (who is online) and broadcast
- **AI & Vectors** — pgvector for storing and querying embeddings next to transactional data
- **[Queues](https://supabase.com/docs/guides/queues)** — the [pgmq](/development/services/queues/) extension, so queues are ordinary tables reachable from any Postgres tooling
- **[Cron](https://supabase.com/docs/guides/cron)** — pg_cron, with jobs stored in the `cron.job` table and their history in `cron.job_run_details`; the docs recommend keeping concurrency at 8 jobs or fewer and each run under 10 minutes

Official client libraries cover JavaScript, Flutter (Dart), Swift, Python, C# and Kotlin. For AI tooling there is an MCP server at `https://mcp.supabase.com/mcp` and a set of [agent skills](https://github.com/supabase/agent-skills) installed with `npx skills add supabase/agent-skills`.

## Local development

The CLI runs the whole stack on your machine — Postgres, Auth, Storage and the rest — rather than making you develop against the cloud:

```bash
npx supabase init
npx supabase start
```

This needs a container runtime; the [docs](https://supabase.com/docs/guides/local-development) name OrbStack, Docker Desktop, Rancher Desktop and Podman (see [Docker on macOS](/development/docker/docker-on-macos/)). Schema changes are managed as migrations or declarative schemas and then pushed to the hosted project.

## Licensing and self-hosting

Supabase is genuinely open source under OSI-approved licences, component by component: the [main repository](https://github.com/supabase/supabase) and the dashboard are Apache-2.0, as are [Realtime](https://github.com/supabase/realtime) and [Storage](https://github.com/supabase/storage), while [Auth](https://github.com/supabase/auth) and the [Edge Runtime](https://github.com/supabase/edge-runtime) are MIT. That is worth noting next to [Convex](../convex), where the equivalent claim rests on the non-OSI Functional Source License.

[Self-hosting](https://supabase.com/docs/guides/self-hosting) is documented for the individual components, so a project can be run entirely on your own infrastructure.
