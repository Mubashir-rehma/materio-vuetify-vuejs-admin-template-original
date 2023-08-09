<script setup lang="ts">
import { useTheme } from 'vuetify'
import BuyNow from '@core/components/BuyNow.vue'
import ScrollToTop from '@core/components/ScrollToTop.vue'
import initCore from '@core/initCore'
import { hexToRgb } from '@layouts/utils'

const { isAppRtl } = useThemeConfig()

const { global } = useTheme()

// ℹ️ Sync current theme with initial loader theme
initCore()
</script>

<template>
  <VLocaleProvider :rtl="isAppRtl">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
      <RouterView />
      <BuyNow />
      <ScrollToTop />
    </VApp>
  </VLocaleProvider>
</template>
