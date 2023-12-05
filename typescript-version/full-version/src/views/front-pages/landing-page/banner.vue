<script setup lang="ts">
import ctaDashborad from '@images/front-pages/landing-page/cta-dashboard.png'
</script>

<template>
  <div class="landing-cta position-relative bg-surface">
    <VContainer>
      <div>
        <h4 class="text-h4 text-primary font-weight-bold">
          Ready to Get Started?
        </h4>
        <div class="text-sm font-weight-medium mb-8">
          Start your project with a 14-day free trial
        </div>
        <VBtn
          color="primary"
          :append-icon="$vuetify.locale.isRtl ? 'mdi-arrow-left' : 'mdi-arrow-right'"
          :to="{ name: 'front-pages-payment' }"
        >
          Get Started
        </VBtn>
      </div>

      <VImg
        :src="ctaDashborad"
        max-width="600"
        cover
      />
    </VContainer>
  </div>
</template>

<style lang="scss">
.landing-cta {
  background-image: url("@images/front-pages/backgrounds/cta-bg.png");
  background-size: cover;
  margin-block: auto;
}
</style>
