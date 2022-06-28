<script lang="ts" setup>
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { NavBarI18n } from '@layouts/components'
import type { I18nLanguage } from '@layouts/types'
const { isAppRtl } = useThemeConfig()

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
  {
    label: 'Arabic',
    flagpackClass: 'i-flagpack-ae',
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
