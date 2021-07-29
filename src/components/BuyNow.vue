<template>
  <v-btn
    color="error"
    class="product-buy-now"
    href="#"
    target="_blank"
    rel="nofollow"
  >
    Buy Now
  </v-btn>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.product-buy-now {
  bottom: 5%;
  right: 79px;
  position: fixed;
  .v-application &.v-btn.v-btn--is-elevated {
    box-shadow: 0 1px 20px 1px #ff4c51 !important;
    &:hover {
      box-shadow: none !important;
    }
  }
}
</style>
