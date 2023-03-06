<script setup lang="ts">
const { y } = useWindowScroll()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <VScaleTransition style="transform-origin: center;">
    <VBtn
      v-show="y > 200"
      icon
      density="comfortable"
      class="scroll-to-top"
      @click="scrollToTop"
    >
      <VIcon
        size="22"
        icon="mdi-arrow-up"
      />
    </VBtn>
  </VScaleTransition>
</template>

<style lang="scss">
.scroll-to-top {
  position: fixed;

  // To keep button on top of v-layout. E.g. Email app
  z-index: 999;
  inset-block-end: 5%;
  inset-inline-end: 25px;
}
</style>
