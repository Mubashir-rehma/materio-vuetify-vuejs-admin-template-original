<script setup lang="ts">
import trophy from '@/assets/images/misc/trophy.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

const triangleBg = useGenerateImageVariant('@/assets/images/misc/triangle.png')
</script>

<template>
  <v-card
    title="Congratulations John! 🥳"
    subtitle="Best seller of the month"
    class="position-relative"
  >
    <v-card-text>
      <h5 class="text-h5 font-family-semibold text-primary">
        $42.8k
      </h5>
      <p>78% of target 🚀</p>
      <v-btn>View Sales</v-btn>
    </v-card-text>

    <!-- Triangle Background -->
    <v-img
      :src="triangleBg"
      class="triangle-bg"
    />

    <!-- Trophy -->
    <v-img
      :src="trophy"
      class="trophy"
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

.trophy {
  position: absolute;
  inline-size: 5.188rem;
  inset-block-end: 1rem;
  inset-inline-end: 1rem;
}
</style>
