# Navbar I18n

> File: src/@layouts/components/navbar/I18n.vue

---

It accepts `languages` prop and will update the app language according to the selected language. This component is used in `src/layouts/components/NavBarI18n.vue` file.

Assume you want to change languages shown in the navbar i18n menu then you can update `src/layouts/components/NavBarI18n.vue` according to your needs. In below example, we will only allow english and french languages to be selected.

<code-group>
<code-block title="TS">

```vue
<script lang="ts" setup>
import { NavBarI18n } from '@layouts/components'
import type { I18nLanguage } from '@layouts/types'

const i18nCompLanguages: I18nLanguage[] = [
  {
    label: 'English',
    flagpackClass: 'i-flagpack-us',
    i18nLang: 'en',
  },
  {
    label: 'French',
    flagpackClass: 'i-flagpack-fr',
    i18nLang: 'fr',
  },
]
</script>

<template>
  <NavBarI18n :languages="i18nCompLanguages" />
</template>
```

</code-block>

<code-block title="JS">

```vue
<script setup>
import { NavBarI18n } from '@layouts/components'

const i18nCompLanguages = [
  {
    label: 'English',
    flagpackClass: 'i-flagpack-us',
    i18nLang: 'en',
  },
  {
    label: 'French',
    flagpackClass: 'i-flagpack-fr',
    i18nLang: 'fr',
  },
]
</script>

<template>
  <NavBarI18n :languages="i18nCompLanguages" />
</template>
```

</code-block>
</code-group>
