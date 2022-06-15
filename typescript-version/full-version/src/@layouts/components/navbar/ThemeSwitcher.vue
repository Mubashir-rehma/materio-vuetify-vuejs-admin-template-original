<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core'

const { theme } = useThemeConfig()
const vuetifyTheme = useTheme()
const vuetifyThemesName = Object.keys(vuetifyTheme.themes.value)
const { state: activeTheme, next: getNextThemeName } = useCycleList(vuetifyThemesName)
const changeTheme = () => {
  theme.value = getNextThemeName()
}

const themeIcons = {
  light: 'mdi-weather-sunny',
  dark: 'mdi-weather-night',
  retro: 'mdi-gamepad-variant-outline',
}

const getThemeIcon = computed(() => {
  return themeIcons[getNextThemeName() as keyof typeof themeIcons] || 'mdi-format-paint'
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
