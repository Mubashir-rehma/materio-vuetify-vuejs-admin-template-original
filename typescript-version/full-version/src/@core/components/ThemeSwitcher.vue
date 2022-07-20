<script setup lang="ts">
import { useThemeConfig } from '@core/composable/useThemeConfig'
import type { ThemeSwitcherTheme } from '@layouts/types'

const props = defineProps<{
  themes: ThemeSwitcherTheme[]
}>()

const { theme } = useThemeConfig()
const { next: getNextThemeName, index: currentThemeIndex } = useCycleList(props.themes.map(t => t.name), { initialValue: theme.value })
const changeTheme = () => {
  theme.value = getNextThemeName()
}

const getThemeIcon = computed(() => {
  const nextThemeIndex = currentThemeIndex.value + 1 === props.themes.length ? 0 : currentThemeIndex.value + 1

  return props.themes[nextThemeIndex].icon
})
</script>

<template>
  <VBtn
    icon
    variant="text"
    color="default"
    @click="changeTheme"
  >
    <VIcon :icon="getThemeIcon" />
  </VBtn>
</template>
