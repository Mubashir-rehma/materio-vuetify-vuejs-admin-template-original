<script setup lang="ts">
import BuyNow from '@core/components/BuyNow.vue'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { useLayouts } from '@layouts'
const { syncInitialLoaderTheme, syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme } = useThemeConfig()

// ℹ️ Sync current theme with initial loader theme
syncInitialLoaderTheme()
syncConfigThemeWithVuetifyTheme()
const { isAppRtl } = useLayouts()
</script>

<template>
  <VLocaleProvider :rtl="isAppRtl">
    <VApp>
      <VMain>
        <RouterView />
        <BuyNow />
      </VMain>
    </VApp>
  </VLocaleProvider>
</template>
