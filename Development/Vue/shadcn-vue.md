---
title: shadcn-vue
description: Vue port of shadcn/ui — copy-paste component collection built on Radix Vue and Tailwind CSS.
created: 2026-04-17
updated: 2026-04-17
---

shadcn-vue is a Vue port of [shadcn/ui](https://ui.shadcn.com/). Instead of installing a package, you copy components directly into your project and own the code — no runtime dependency, full control.

## Key features

- Built on **[Radix Vue](https://www.radix-vue.com/)** for accessible, unstyled primitives
- Styled with **Tailwind CSS** — every component is a `.vue` file you can edit
- Works with **Vue 3** and **Nuxt 3**
- CLI for adding components: `npx shadcn-vue@latest add button`

## Quickstart

```bash
npx shadcn-vue@latest init
```

The init wizard sets up `components.json`, installs Tailwind and Radix Vue dependencies, and creates the `components/ui` directory.

Add individual components as needed:

```bash
npx shadcn-vue@latest add button dialog table
```

## When to use

- You want **full ownership** of UI code with no opaque library updates
- You prefer **Tailwind CSS** for styling
- You need **accessible** components without building from scratch

## Sources

- [shadcn-vue](https://www.shadcn-vue.com/) — project homepage and docs
