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
const selectI18nLocale = computed(() => props.languages.find(({ i18nLang }) => i18nLang === locale.value))
</script>

<template>
  <VBtn
    variant="text"
    color="default"
  >
    <div
      class="me-2"
      :class="[selectI18nLocale?.flagpackClass]"
    />
    <span>{{ selectI18nLocale?.label }}</span>

    <!-- Menu -->
    <VMenu activator="parent">
      <!-- List -->
      <VList density="compact">
        <!-- List item -->
        <VListItem
          v-for="lang in props.languages"
          :key="lang.i18nLang"
          :value="lang.i18nLang"
          @click="locale = lang.i18nLang; $emit('change', lang.i18nLang)"
        >
          <!-- Flag -->
          <VListItemAvatar start>
            <div :class="lang.flagpackClass" />
          </VListItemAvatar>
          <!-- Flag label -->
          <VListItemTitle>{{ lang.label }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </VBtn>
</template>
