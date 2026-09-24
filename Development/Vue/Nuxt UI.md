---
title: Nuxt UI
description: Accessible Vue component library built with Reka UI, Tailwind CSS, and Tailwind Variants for Nuxt and standalone Vue applications.
created: 2026-09-24
updated: 2026-09-24
---

[Nuxt UI](https://ui.nuxt.com/) is a free, open-source Vue component library for **Nuxt** and standalone **Vue/Vite** applications. Version 4 unifies the former free and Pro packages into `@nuxt/ui` and provides more than 125 accessible components built with **Reka UI**, **Tailwind CSS**, and **Tailwind Variants**.

## Why use it

- Production-ready forms, overlays, navigation, tables, dashboards, content, and chat components
- Accessible primitives with keyboard navigation, focus management, and ARIA attributes
- Nuxt SSR support plus a Vite plugin for plain Vue, Inertia, and other Vue stacks
- TypeScript types, auto-imported components and composables, and editor autocomplete
- CSS-first theming with semantic colors, dark mode, per-component slots, and variants
- Iconify integration, optimized fonts, localization, templates, and a complete Figma kit

## Nuxt installation

```bash
pnpm add @nuxt/ui tailwindcss
```

Register the module and stylesheet:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
})
```

```css
/* app/assets/css/main.css */
@import "tailwindcss";
@import "@nuxt/ui";
```

Components use the `U` prefix and are auto-imported:

```vue
<template>
  <UCard>
    <UButton label="Create project" icon="i-lucide-plus" />
  </UCard>
</template>
```

Wrap the application in `UApp` when using global overlays such as toasts, tooltips, and programmatic modals:

```vue
<!-- app.vue -->
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

## Standalone Vue installation

Install the same packages, add `@nuxt/ui/vite` to `vite.config.ts`, and register the Vue plugin:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  plugins: [vue(), ui()],
})
```

```ts
// src/main.ts
import './assets/css/main.css'
import { createApp } from 'vue'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'

createApp(App).use(ui).mount('#app')
```

The CSS file uses the same Tailwind and Nuxt UI imports as the Nuxt setup. The Vite plugin handles component and composable auto-imports and generates their TypeScript declarations.

## Theming

Use semantic design tokens for global branding:

```css
/* app/assets/css/main.css */
@import "tailwindcss";
@import "@nuxt/ui";

:root {
  --ui-primary: var(--ui-color-blue-600);
  --ui-radius: 0.5rem;
}
```

Use `app.config.ts` for global component defaults and slot-level overrides:

```ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate',
    },
    button: {
      slots: {
        base: 'font-semibold',
      },
    },
  },
})
```

Individual components accept a `ui` prop for local styling. For large applications, experimental component detection can generate theme CSS only for the components that are actually used.

## Choosing between Vue UI libraries

| Library | Best fit | Styling model | Ownership |
|---------|----------|---------------|-----------|
| **Nuxt UI** | Nuxt, Vue/Vite, Tailwind-based products and dashboards | Themed components with Tailwind Variants | Package dependency |
| [Vuetify](../vuetify/) | Material Design applications with broad component coverage | Built-in Material theme system | Package dependency |
| [shadcn-vue](../shadcn-vue/) | Projects that want complete control over copied component source | Tailwind CSS and editable local files | Application owns the code |

Nuxt UI is the strongest default when a project already uses **Nuxt and Tailwind CSS** and needs both low-level controls and higher-level application components. Prefer shadcn-vue when editing the component source is more important than receiving coordinated package updates.

## Version notes

The current release checked on **24 September 2026** is **4.11.2**. Nuxt UI v4 is MIT-licensed and includes the components that were previously distributed as Nuxt UI Pro. Nuxt UI 4.6 and newer requires **Nuxt 4.1 or later** when used through the Nuxt module.

## Sources

- [Nuxt UI documentation](https://ui.nuxt.com/docs/getting-started/) — features, supported Vue stacks, accessibility, and theming
- [Nuxt UI repository](https://github.com/nuxt/ui) — official installation examples for Nuxt and Vue
- [Nuxt UI releases](https://ui.nuxt.com/docs/releases) — current version and release notes
- [Nuxt UI templates](https://ui.nuxt.com/templates) — official Nuxt and Vue starters
