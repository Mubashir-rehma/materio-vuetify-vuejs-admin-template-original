<script setup lang="ts">
import miscComingSoon from '@images/pages/misc-coming-soon.png'

const email = ref('')
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
        :src="miscComingSoon"
        alt="Coming Soon"
        :max-width="700"
        class="mx-auto"
      />
    </div>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/misc.scss";

.misc-email-input {
  max-inline-size: 21.875rem;
  min-inline-size: 12.5rem;
}
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
