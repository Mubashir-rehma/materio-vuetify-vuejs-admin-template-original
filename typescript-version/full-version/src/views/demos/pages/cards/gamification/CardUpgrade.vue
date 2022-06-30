<script setup lang="ts">
import poseM9 from '@/assets/images/cards/pose-m-9.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

const triangleBg = useGenerateImageVariant('@/assets/images/misc/triangle.png')
</script>

<template>
  <v-card
    title="Upgrade Account 👩🏻‍💻"
    subtitle="Add 15 team members"
    class="position-relative"
  >
    <v-card-text>
      <h5 class="text-h5 font-family-semibold text-primary">
        $199
      </h5>
      <p>40% OFF 🤩</p>
      <v-btn>Upgrade Plan</v-btn>
    </v-card-text>

    <!-- Triangle Background -->
    <v-img
      :src="triangleBg"
      class="triangle-bg"
    />

    <!-- Trophy -->
    <v-img
      :src="poseM9"
      class="illustration"
    />
  </v-card>
</template>

<style lang="scss">
.triangle-bg {
  position: absolute;
  inline-size: 10.375rem;
  inset-block-end: 0;
  inset-inline-end: 0;
}

.illustration {
  position: absolute;
  inline-size: 3rem;
  inset-block-end: 1rem;
  inset-inline-end: 3rem;
}
</style>
