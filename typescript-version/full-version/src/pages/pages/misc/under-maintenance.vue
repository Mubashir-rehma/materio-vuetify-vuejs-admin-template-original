<script setup lang="ts">
import miscUnderMaintenance from '@images/pages/misc-under-maintenance.png'
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
      <VImg
        :src="miscUnderMaintenance"
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
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/misc.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
