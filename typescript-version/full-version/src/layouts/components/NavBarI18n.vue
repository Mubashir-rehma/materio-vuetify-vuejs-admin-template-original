<script lang="ts" setup>
import type { NavBarI18n as NavBarI18nType } from '@layouts/components'
import { NavBarI18n } from '@layouts/components'

const i18nCompLanguages: InstanceType<typeof NavBarI18nType>['languages'] = [
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
  {
    label: 'Arabic',
    flagpackClass: 'i-flagpack-ae',
    i18nLang: 'ar',
  },
]
</script>

<template>
  <NavBarI18n :languages="i18nCompLanguages" />
</template>
