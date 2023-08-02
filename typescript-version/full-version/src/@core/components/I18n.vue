<script setup lang="ts">
import type { I18nLanguage } from '@layouts/types'
import { themeConfig } from '@themeConfig'

const props = withDefaults(defineProps<Props>(), {
  location: 'bottom end',
})

interface Props {
  languages: I18nLanguage[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location?: any
}

const { locale } = useI18n({ useScope: 'global' })
const { appLocale, isAppRtl } = useThemeConfig()

// watch and change lang attribute of html on language change
watch(locale, val => {
  document.documentElement.setAttribute('lang', val as string)
})

// get current language from localstorage or use default
const currentLang = ref([localStorage.getItem(`${themeConfig.app.title}-language`) || appLocale.value])

// set isAppRtl value on mounted based on current language
onMounted(() => {
  props.languages.forEach(lang => {
    if (lang.i18nLang === currentLang.value[0])
      isAppRtl.value = lang.isRTL
  })
})

// change language and isAppRtl on click
const changeLang = (lang: I18nLanguage) => {
  appLocale.value = lang.i18nLang
  locale.value = lang.i18nLang
  isAppRtl.value = lang.isRTL
}
</script>

<template>
  <IconBtn>
    <VIcon icon="mdi-translate" />

    <!-- Menu -->
    <VMenu
      activator="parent"
      :location="props.location"
      offset="14px"
    >
      <!-- List -->
      <VList
        v-model:selected="currentLang"
        color="primary"
        min-width="175px"
      >
        <!-- List item -->
        <VListItem
          v-for="lang in props.languages"
          :key="lang.i18nLang"
          :value="lang.i18nLang"
          @click="changeLang(lang)"
        >
          <!-- Language label -->
          <VListItemTitle>{{ lang.label }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </IconBtn>
</template>
