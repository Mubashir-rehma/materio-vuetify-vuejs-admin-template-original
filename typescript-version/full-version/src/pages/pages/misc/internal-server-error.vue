<script setup lang="ts">
import pages500 from '@/assets/images/pages/500.png'
import ErrorHeader from '@core/components/ErrorHeader.vue'
</script>

<template>
  <div class="misc-wrapper">
    <ErrorHeader
      error-code="500"
      error-title="Internal server error 👨🏻‍💻"
      error-description="Oops, something went wrong!"
    />

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <VImg
        :src="pages500"
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
