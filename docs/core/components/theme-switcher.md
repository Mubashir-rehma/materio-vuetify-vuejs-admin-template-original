# Theme Switcher

> File: src/@core/components/navbar/ThemeSwitcher.vue
---

`ThemeSwitcher` requires `themes` prop for providing options to select the theme. This component will update the current theme in themeConfig and in turn it will also get updated in vuetify instance. This component is used in `src/layouts/components/NavbarThemeSwitcher.vue` file.

Mostly you will use this component in navbar for switching themes. In below example, we will allow switching between light and dark theme.

<code-group>
<code-block title="TS">

```vue
<script setup lang="ts">
import type { ThemeSwitcherTheme } from '@layouts/types'

const themes: ThemeSwitcherTheme[] = [
  {
    name: 'light',
    icon: 'mdi-weather-sunny',
  },
  {
    name: 'dark',
    icon: 'mdi-weather-night',
  },
]
</script>

<template>
  <ThemeSwitcher :themes="themes" />
</template>
```

</code-block>

<code-block title="JS">

```vue
<script setup>
const themes = [
  {
    name: 'light',
    icon: 'mdi-weather-sunny',
  },
  {
    name: 'dark',
    icon: 'mdi-weather-night',
  },
]
</script>

<template>
  <ThemeSwitcher :themes="themes" />
</template>
```

</code-block>
</code-group>
