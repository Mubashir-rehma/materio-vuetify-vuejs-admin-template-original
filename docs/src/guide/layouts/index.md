# Introduction

Our template comes with `layouts` plugin which is standalone package you can use in any vue project. You can find it in `src/@layouts` directory.

This plugin provides bare minimum styles, components, composables, etc to build the layout quickly.

## Installation

:::tip
Our template already configured the plugin installation. Below is just for completeness of the documentation.
:::

Create a new plugin file `src/plugins/layouts.ts` with below content:

```ts
import { createLayouts } from '@layouts'
import '@layouts/styles/index.scss'
import { layoutConfig } from '@themeConfig'

// ℹ️ We generate layout config from our themeConfig so you don't have to write config twice
export default createLayouts(layoutConfig)
```

Import and use in `main.ts` file.

```ts{1,6}
import layoutsPlugin from '@/plugins/layouts'
import { createApp } from 'vue'
import App from '@/App.vue'

const app = createApp(App)
app.use(layoutsPlugin)
```

## Using configuration

You will never have to use layout config but if you are building something on your own and want to access the layout config please proceed below.

You can import anything from `@layouts` dir but we recommend if you ever wanted to access the layout config you better import from themeConfig instead to avoid overhead of finding which config to import. All layout config is exported in `useThemeConfig` composable for ease of use.

::: code-group

```vue [TS]
<script setup lang="ts">
import { useThemeConfig } from '@core/composable/useThemeConfig'

// `isLessThanOverlayNavBreakpoint` is actually export of `useLayouts`
const { isLessThanOverlayNavBreakpoint } = useThemeConfig()
</script>
```

```vue [JS]
<script setup>
import { useThemeConfig } from '@core/composable/useThemeConfig'

// `isLessThanOverlayNavBreakpoint` is actually export of `useLayouts`
const { isLessThanOverlayNavBreakpoint } = useThemeConfig()
</script>
```

:::
