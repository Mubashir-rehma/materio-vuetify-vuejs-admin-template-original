<script setup lang="ts">
import type { ThemeSwitcherTheme } from '@layouts/types'

const props = defineProps<{
  themes: ThemeSwitcherTheme[]
}>()

const { theme } = useThemeConfig()
const currentThemeName = ref(theme.value)

// Update icon if theme is changed from other sources
watch(theme, val => {
  currentThemeName.value = val
})
</script>

<template>
  <IconBtn>
    <VIcon :icon="props.themes.find(t => t.name === currentThemeName)?.icon" />
    <VTooltip
      activator="parent"
      open-delay="1000"
      scroll-strategy="close"
    >
      <span class="text-capitalize">{{ currentThemeName }}</span>
    </VTooltip>
    <VMenu activator="parent">
      <VList>
        <VListItem
          v-for="{ name, icon } in props.themes"
          :key="name"
          :prepend-icon="icon"
          class="text-capitalize"
          @click="() => { theme = name }"
        >
          {{ name }}
        </VListItem>
      </VList>
    </VMenu>
  </IconBtn>
</template>
