<script setup lang="ts">
import { useThemeConfig } from '@core'
import type { ThemeSwitcherTheme } from '@layouts/types'

const props = defineProps<{
  themes: ThemeSwitcherTheme[]
}>()

const { theme } = useThemeConfig()
const { next: getNextThemeName } = useCycleList(props.themes.map(t => t.name))
const changeTheme = () => {
  theme.value = getNextThemeName()
}

const getThemeIcon = computed(() => {
  return props.themes.find(t => t.name === theme.value)?.icon || 'mdi-format-paint'
})
</script>

<template>
  <v-btn
    icon
    variant="text"
    color="default"
    @click="changeTheme"
  >
    <v-icon :icon="getThemeIcon" />
  </v-btn>
</template>
