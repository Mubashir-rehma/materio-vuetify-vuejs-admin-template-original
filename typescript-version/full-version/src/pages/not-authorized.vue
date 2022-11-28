<script setup lang="ts">
import page401 from '@images/pages/401.png'
</script>

<template>
  <div class="misc-wrapper">
    <div class="misc-center-content text-center mb-4">
      <!-- 👉 Title and subtitle -->
      <h1 class="text-h1 font-weight-medium">
        401
      </h1>
      <h5 class="text-h5 font-weight-medium mb-3">
        You are not authorized! 🔐
      </h5>
      <p>You don't have permission to access this page. Go Home!</p>
    </div>

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <VImg
        :src="page401"
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
  action: read
  subject: Auth
</route>
