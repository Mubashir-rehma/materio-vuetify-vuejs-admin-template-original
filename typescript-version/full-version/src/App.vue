<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { useLayouts } from '@layouts'
const { isDark } = useThemeConfig()
const { isAppRtl } = useLayouts()

/*
  ℹ️ Set current theme's surface color in localStorage

  Why? Because when initial loader is shown (before vue is ready) we need to what's the current theme's surface color.
  We will use color stored in localStorage to set the initial loader's background color.

  With this we will be able to show correct background color for the initial loader even before vue identify the current theme.
*/
const { getTheme } = useTheme()

watch(isDark, value => {
  const currentTheme = getTheme(value ? 'dark' : 'light')
  localStorage.setItem('initial-loader-bg', currentTheme.colors.surface)
}, {
  immediate: true,
})
</script>

<template>
  <!-- TODO: Remove this and use vuetify API for Adding RTL initial value -->
  <v-app
    :style="{ direction: isAppRtl ? 'rtl' : 'ltr' }"
  >
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
