<script setup lang="ts">
import trophy from '@/assets/images/misc/trophy.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

const triangleBg = useGenerateImageVariant('@/assets/images/misc/triangle.png')
</script>

<template>
  <VCard
    title="Congratulations John! 🥳"
    subtitle="Best seller of the month"
    class="position-relative"
  >
    <VCardText>
      <h5 class="text-2xl font-family-semibold text-primary">
        $42.8k
      </h5>
      <p>78% of target 🚀</p>
      <VBtn>View Sales</VBtn>
    </VCardText>

    <!-- Triangle Background -->
    <VImg
      :src="triangleBg"
      class="triangle-bg"
    />

    <!-- Trophy -->
    <VImg
      :src="trophy"
      class="trophy"
    />
  </VCard>
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
