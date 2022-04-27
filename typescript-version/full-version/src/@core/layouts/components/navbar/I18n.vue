<script setup lang="ts">
import type { I18nLanguage } from '@layouts/types'

interface Props {
  languages: I18nLanguage[]
}

const props = defineProps<Props>()

const { locale } = useI18n({ useScope: 'global' })
const selectI18nLocale = computed(() => props.languages.find(({ i18nLang }) => i18nLang === locale.value))
</script>

<template>
  <v-btn variant="text">
    <div :class="[selectI18nLocale?.flagpackClass, 'me-2']" />
    <span>{{ selectI18nLocale?.label }}</span>

    <!-- Menu -->
    <v-menu activator="parent">
      <!-- List -->
      <v-list density="compact">
        <!-- List item -->
        <v-list-item
          v-for="lang in props.languages"
          :key="lang.i18nLang"
          :value="lang.i18nLang"
          @click="locale = lang.i18nLang"
        >
          <!-- Flag -->
          <v-list-item-avatar start>
            <div :class="lang.flagpackClass" />
          </v-list-item-avatar>
          <!-- Flag label -->
          <v-list-item-title>{{ lang.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>
