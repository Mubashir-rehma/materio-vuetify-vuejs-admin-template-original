# Navbar I18n

> File: src/@layouts/components/navbar/I18n.vue

---

It accepts `languages` prop and will update the app language according to the selected language. This component is used in `src/layouts/components/NavBarI18n.vue` file.

Assume you want to change languages shown in the navbar i18n menu then you can update `src/layouts/components/NavBarI18n.vue` according to your needs. In below example, we will only allow english and arabic languages to be selected.

::: code-group

```vue [TS]
<script lang="ts" setup>
import NavBarI18n from '@core/components/I18n.vue'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import type { I18nLanguage } from '@layouts/types'

const { isAppRtl } = useThemeConfig()

const i18nCompLanguages: I18nLanguage[] = [
  {
    label: 'English',
    i18nLang: 'en',
  },
  {
    label: 'French',
    i18nLang: 'fr',
  },
  {
    label: 'Arabic',
    i18nLang: 'ar',
  },
]

const handleLangChange = (lang: string) => {
  isAppRtl.value = lang === 'ar'
}
</script>

<template>
  <NavBarI18n
    :languages="i18nCompLanguages"
    @change="handleLangChange"
  />
</template>
```

```vue [JS]
<script setup>
import NavBarI18n from '@core/components/I18n.vue'
import { useThemeConfig } from '@core/composable/useThemeConfig'

const { isAppRtl } = useThemeConfig()

const i18nCompLanguages = [
  {
    label: 'English',
    i18nLang: 'en',
  },
  {
    label: 'French',
    i18nLang: 'fr',
  },
  {
    label: 'Arabic',
    i18nLang: 'ar',
  },
]

const handleLangChange = (lang) => {
  isAppRtl.value = lang === 'ar'
}
</script>

<template>
 <NavBarI18n
    :languages="i18nCompLanguages"
    @change="handleLangChange"
  />
</template>
```

:::

This component also emits `change` event to when language is changed in `NavBarI18n` component. You can use this event to toggle text direction from LTR to RTL as shown in above code snippet via `handleLangChange` method.
