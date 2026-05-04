---
title: Nuxt
description: Full-stack Vue framework with file-based routing, SSR, SSG, and great developer experience.
created: 2026-04-17
updated: 2026-04-17
---

Nuxt is the standard full-stack framework for Vue. It adds file-based routing, server-side rendering, static site generation, and API routes on top of Vue 3.

## Key features

- **File-based routing** — pages in `pages/` become routes automatically
- **SSR, SSG, and hybrid rendering** — choose per route with `routeRules`
- **Auto-imports** — Vue composables, components, and utilities are available without explicit imports
- **Server routes** — API endpoints in `server/api/` with built-in [Nitro](https://nitro.build/) server
- **Modules ecosystem** — rich plugin system for auth, i18n, content, and more

## Quickstart

```bash
npx nuxi@latest init my-app
cd my-app
pnpm install
pnpm dev
```

## Useful modules

| Module | Purpose |
|---|---|
| [Nuxt Content](https://content.nuxt.com/) | File-based CMS for Markdown, YAML, JSON |
| [Nuxt Auth Utils](https://github.com/Atinux/nuxt-auth-utils) | Session-based auth with OAuth providers |
| [Nuxt Image](https://image.nuxt.com/) | Optimized `<NuxtImg>` and `<NuxtPicture>` components |
| [Nuxt I18n](https://i18n.nuxtjs.org/) | Internationalization |

## Sources

- [Nuxt](https://nuxt.com/) — official docs and guides
