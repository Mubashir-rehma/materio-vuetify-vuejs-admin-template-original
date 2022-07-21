<script setup lang="ts">
import type { I18nLanguage } from '@layouts/types'

const props = defineProps<Props>()

defineEmits<{
  (e: 'change', id: string): void
}>()

interface Props {
  languages: I18nLanguage[]
}
const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <VBtn
    variant="text"
    color="default"
    icon
  >
    <VIcon icon="mdi-translate" />
    <!-- Menu -->
    <VMenu activator="parent">
      <!-- List -->
      <VList min-width="175px">
        <!-- List item -->
        <VListItem
          v-for="lang in props.languages"
          :key="lang.i18nLang"
          :value="lang.i18nLang"
          @click="locale = lang.i18nLang; $emit('change', lang.i18nLang)"
        >
          <!-- Language label -->
          <VListItemTitle>{{ lang.label }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </VBtn>
</template>
