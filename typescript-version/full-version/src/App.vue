<script setup lang="ts">
import { useThemeConfig } from '@core/composable/useThemeConfig'
const { syncInitialLoaderTheme, syncVuetifyThemeWithTheme, isAppRtl } = useThemeConfig()

// ℹ️ Sync current theme with initial loader theme
syncInitialLoaderTheme()

syncVuetifyThemeWithTheme()
</script>

<template>
  <!-- TODO: Remove this and use vuetify API for Adding RTL initial value -->
  <v-app :style="{ direction: isAppRtl ? 'rtl' : 'ltr' }">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
