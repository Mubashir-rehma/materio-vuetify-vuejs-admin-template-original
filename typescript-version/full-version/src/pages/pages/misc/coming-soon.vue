<script setup lang="ts">
import comingSoonGuy from '@/assets/images/pages/misc-coming-soon.png'
import tree from '@/assets/images/pages/tree-2.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

const email = ref('')

const authThemeMask = useGenerateImageVariant('@/assets/images/pages/misc-mask.png')
</script>

<template>
  <div class="misc-wrapper">
    <div>
      <!-- 👉 Title and subtitle -->
      <div class="text-center mb-8">
        <h5 class="text-h5 font-weight-medium mb-3">
          We are launching soon 🚀
        </h5>
        <p>Our website is opening soon. Please register to get notified when it's ready!</p>
      </div>

      <!-- 👉 Email input -->
      <VForm
        class="d-flex align-center justify-center flex-wrap gap-4"
        @submit.prevent="() => {}"
      >
        <VTextField
          v-model="email"
          placeholder="Enter your email"
          class="misc-email-input"
        />
        <VBtn
          type="submit"
          size="large"
        >
          Notify
        </VBtn>
      </VForm>
    </div>

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 mt-10">
      <VImg
        :src="comingSoonGuy"
        alt="Coming Soon"
        :max-width="700"
        class="mx-auto"
      />
    </div>

    <!-- 👉 Footer -->
    <VImg
      :src="tree"
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

.misc-email-input {
  max-inline-size: 21.875rem;
  min-inline-size: 12.5rem;
}

.misc-footer-tree {
  inline-size: 21.875rem;
  inset-block-end: 0;
  inset-inline-start: 0;
}
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
