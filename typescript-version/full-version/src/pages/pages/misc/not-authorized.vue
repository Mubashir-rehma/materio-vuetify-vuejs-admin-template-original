<script setup lang="ts">
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

const authThemeMask = useGenerateImageVariant('@/assets/images/pages/misc-mask.png')
</script>

<template>
  <div class="misc-wrapper">
    <ErrorHeader
      error-code="401"
      error-title="You are not authorized! 🔐"
      error-description="You don't have permission to access this page. Go Home!"
    />

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <VImg
        :src="dynamicImgImport('@/assets/images/pages/401.png')"
        alt="Coming Soon"
        :max-width="800"
        class="mx-auto"
      />
      <VBtn
        to="/"
        class="mt-10"
      >
        Back to Home
      </VBtn>
    </div>

    <!-- 👉 Footer -->
    <VImg
      :src="dynamicImgImport('@/assets/images/pages/tree-2.png')"
      class="misc-footer-tree d-none d-md-block"
    />

    <VImg
      :src="authThemeMask"
      class="misc-footer-img d-none d-md-block"
    />
  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/misc.scss";

.misc-footer-tree {
  inline-size: 18.75rem;
  inset-block-end: 3.5rem;
  inset-inline-start: 0.375rem;
}
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
