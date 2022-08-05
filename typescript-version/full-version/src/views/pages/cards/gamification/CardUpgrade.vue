<script setup lang="ts">
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

const triangleBg = useGenerateImageVariant('@/assets/images/misc/triangle.png')
</script>

<template>
  <VCard
    title="Upgrade Account 👩🏻‍💻"
    subtitle="Add 15 team members"
    class="position-relative"
  >
    <VCardText>
      <h5 class="text-2xl font-family-semibold text-primary">
        $199
      </h5>
      <p>40% OFF 🤩</p>
      <VBtn>Upgrade Plan</VBtn>
    </VCardText>

    <!-- Triangle Background -->
    <VImg
      :src="triangleBg"
      class="triangle-bg flip-in-rtl"
    />

    <!-- Trophy -->
    <VImg
      :src="dynamicImgImport('@/assets/images/cards/pose-m-9.png')"
      class="illustration flip-in-rtl"
    />
  </VCard>
</template>

<style lang="scss">
@use "@layouts/styles/mixins" as layoutsMixins;

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

// for rtl only
.flip-in-rtl {
  @include layoutsMixins.rtl {
    transform: scaleX(-1);
  }
}
</style>
