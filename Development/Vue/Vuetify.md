---
title: Vuetify
description: Vue UI component framework based on Material Design, with theming, tooling, and integrations for common Vue stacks.
created: 2026-04-08
updated: 2026-04-08
---

Vuetify is a UI component framework for Vue, providing a large set of production-ready components and a theming system aimed at building consistent application UIs quickly.

## What it is

- **[Vuetify](https://vuetifyjs.com/)** — Vue UI component framework inspired by Material Design, with extensive component coverage and built-in theme support.

## When Vuetify is a good fit

- You want a **large, cohesive component library** with consistent styling across an app.
- You need **built-in theming** (light/dark/system) and want to switch themes at runtime.
- You’re building on common Vue stacks (plain Vue + Vite, Nuxt, Laravel + Vite) and want well-documented integration paths.

## Quickstart (new project)

Vuetify provides a scaffolding tool for generating a Vue + Vuetify project:

```bash
pnpm create vuetify
```

## Add Vuetify to an existing Vue 3 project (minimal)

Install Vuetify, then initialize it as a Vue plugin:

```bash
pnpm i vuetify
```

```js
import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'

const vuetify = createVuetify({ components, directives })

createApp(App).use(vuetify).mount('#app')
```

:::caution
Importing all components/directives is convenient but not ideal for performance. Prefer the official Vite/Webpack plugins for automatic imports and better tree-shaking when possible.
:::

## Theming essentials

Vuetify ships with **light**, **dark**, and **system** themes and supports programmatic switching at runtime.

```js
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'system', // 'system' | 'light' | 'dark'
  },
})
```

For runtime switching, use the `useTheme()` composable.

## Nuxt notes

Nuxt projects typically need:

- `vuetify` + `vite-plugin-vuetify`
- `build.transpile: ['vuetify']`
- a Nuxt plugin that creates and registers Vuetify
- wrapping pages in `v-app`

## Sources

- [Vuetify](https://vuetifyjs.com/) — project overview and ecosystem entry points (accessed 2026-04-08)
- [Why Vuetify?](https://vuetifyjs.com/en/getting-started/why-vuetify/) — high-level description of features and positioning (accessed 2026-04-08)
- [Get started with Vuetify 4](https://vuetifyjs.com/en/getting-started/installation/) — install paths, scaffolding, and integration snippets (accessed 2026-04-08)
- [Theme configuration](https://vuetifyjs.com/en/features/theme/) — theme API, defaults, switching, and configuration details (accessed 2026-04-08)
