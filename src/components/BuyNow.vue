<template>
  <v-btn
    color="error"
    class="product-buy-now"
    :href="buyNowUrl"
    target="_blank"
    rel="nofollow"
  >
    Buy Now
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      buyNowUrl: this.$root.buyNowUrl || 'https://themeselection.com/products/materio-vuetify-vuejs-admin-template',
    }
  },
  watch: {
    buyNowUrl(val) {
      this.$root.buyNowUrl = val
    },
  },
  created() {
    const { marketplace } = this.$route.query
    if (marketplace === 'vuetify') {
      this.buyNowUrl = 'https://store.vuetifyjs.com/products/materio-vuetify-vuejs-admin-template'
    }
  },
}
</script>

<style lang="scss" scoped>
.product-buy-now {
  z-index: 4;
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
