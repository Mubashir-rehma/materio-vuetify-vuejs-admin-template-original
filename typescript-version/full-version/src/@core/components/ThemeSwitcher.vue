<script setup lang="ts">
import type { ThemeSwitcherTheme } from '@layouts/types';

const props = defineProps<{
  themes: ThemeSwitcherTheme[]
}>()

const { theme } = useThemeConfig()
const currentThemeName = ref(theme.value)

const selectedItem = ref([theme.value])

// Update icon if theme is changed from other sources
watch(theme, val => {
  currentThemeName.value = val

  selectedItem.value = [theme.value]
}, { deep: true })
</script>

<template>
  <IconBtn color="rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))">
    <VIcon :icon="props.themes.find(t => t.name === currentThemeName)?.icon" />
    <VTooltip
      activator="parent"
      open-delay="1000"
      scroll-strategy="close"
    >
      <span class="text-capitalize">{{ currentThemeName }}</span>
    </VTooltip>
    <VMenu activator="parent">
      <VList v-model:selected="selectedItem">
        <VListItem
          v-for="{ name, icon } in props.themes"
          :key="name"
          :value="name"
          :prepend-icon="icon"
          color="primary"
          class="text-capitalize"
          @click="() => { theme = name }"
        >
          {{ name }}
        </VListItem>
      </VList>
    </VMenu>
  </IconBtn>
</template>
