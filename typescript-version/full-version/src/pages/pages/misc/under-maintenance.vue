<script setup lang="ts">
import miscMaskDark from '@/assets/images/pages/misc-mask-dark.png'
import miscMaskLight from '@/assets/images/pages/misc-mask-light.png'
import miscUnderMaintenance from '@/assets/images/pages/misc-under-maintenance.png'
import tree from '@/assets/images/pages/tree-3.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)
</script>

<template>
  <div class="misc-wrapper">
    <div class="text-center mb-4">
      <!-- 👉 Title and subtitle -->
      <h5 class="text-h5 font-weight-medium mb-3">
        Under Maintenance! 🚧
      </h5>
      <p>Sorry for the inconvenience but we're performing some maintenance at the moment</p>
    </div>

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <v-img
        :src="miscUnderMaintenance"
        alt="Coming Soon"
        :max-width="800"
        class="mx-auto"
      />
      <v-btn
        to="/"
        class="mt-10"
      >
        Back to Home
      </v-btn>
    </div>

    <!-- 👉 Footer -->
    <v-img
      :src="tree"
      class="misc-footer-tree d-none d-md-block"
    />

    <v-img
      :src="authThemeMask"
      class="misc-footer-img d-none d-md-block"
    />
  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/misc.scss";

.misc-footer-tree {
  inline-size: 15.625rem;
  inset-block-end: 3.5rem;
  inset-inline-start: 0.375rem;
}
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
