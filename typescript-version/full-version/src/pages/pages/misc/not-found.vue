<script setup lang="ts">
import pages404 from '@images/pages/404.png'

definePage({
  meta: {
    layout: 'blank',
  },
})
</script>

<template>
  <div class="misc-wrapper">
    <ErrorHeader
      status-code="404"
      title="Page Not Found ⚠️"
      description="We couldn't find the page you are looking for."
    />

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <VImg
        :src="pages404"
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
