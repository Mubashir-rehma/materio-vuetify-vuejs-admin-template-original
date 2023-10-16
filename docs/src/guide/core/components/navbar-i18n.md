# Navbar I18n

> File: src/@core/components/I18n.vue

---

It accepts `languages` prop and will update the app language according to the selected language. This component is defined in `src/layouts/components/I18n.vue` file.

Assume you want to change languages shown in the navbar i18n menu then you can update `src/layouts/components/NavBarI18n.vue` according to your needs. In below example, we will only allow english and arabic languages to be selected.

::: code-group

```vue [TS]
<script lang="ts" setup>
import NavBarI18n from '@core/components/I18n.vue'
import type { I18nLanguage } from '@layouts/types'

const i18nCompLanguages: I18nLanguage[] = [
  {
    label: 'English',
    i18nLang: 'en',
    isRTL: false,
  },
  {
    label: 'Arabic',
    i18nLang: 'ar',
    isRTL: true,
  },
]
</script>

<template>
  <NavBarI18n :languages="i18nCompLanguages" />
</template>
```

```vue [JS]
<script lang="ts" setup>
import NavBarI18n from '@core/components/I18n.vue'
import type { I18nLanguage } from '@layouts/types'

const i18nCompLanguages: I18nLanguage[] = [
  {
    label: 'English',
    i18nLang: 'en',
    isRTL: false,
  },
  {
    label: 'Arabic',
    i18nLang: 'ar',
    isRTL: true,
  },
]
</script>

<template>
  <NavBarI18n :languages="i18nCompLanguages" />
</template>
```

:::
