<script setup lang="ts">
import { useThemeConfig } from '@core/composable/useThemeConfig'
const { syncInitialLoaderTheme, syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme, syncRtlWithLocale } = useThemeConfig()

// ℹ️ Sync current theme with initial loader theme
syncInitialLoaderTheme()

syncRtlWithLocale()
syncConfigThemeWithVuetifyTheme()

const vApp = ref()
</script>

<template>
  <VApp
    ref="vApp"
    :style="{ overflow: 'unset' }"
  >
    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>
