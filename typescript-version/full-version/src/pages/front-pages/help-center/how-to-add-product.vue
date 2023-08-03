<script setup lang="ts">
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import checkoutImg from '@images/front-pages/misc/checkout-image.png'
import productImg from '@images/front-pages/misc/product-image.png'

definePage({
  meta: {
    layout: 'blank',
  },
})
</script>

<template>
  <div class="bg-surface">
    <Navbar />

    <VContainer>
      <VRow class="mt-4">
        <VCol
          cols="12"
          md="8"
        >
          <div class="mt-16">
            <VBreadcrumbs
              class="px-0 py-3"
              :items="[{ title: 'Help Center', to: { name: 'front-pages-help-center' } }, { title: 'how to add product in cart' }]"
            />
            <h5 class="text-h5 mb-3">
              How to add product in cart?
            </h5>
            <div class="text-sm">
              1 month ago  -  Updated
            </div>
          </div>
          <VDivider class="my-8" />
          <div class="mb-8">
            <p>
              If you're after only one item, simply choose the 'Buy Now' option on the item page. This will take you directly to Checkout.
            </p>
            <p>
              If you want several items, use the 'Add to Cart' button and then choose 'Keep Browsing' to continue shopping or 'Checkout' to finalize your purchase.
            </p>
          </div>
          <VImg
            class="rounded-lg"
            :src="productImg"
          />
          <p class="my-8">
            You can go back to your cart at any time by clicking on the shopping cart icon at the top right side of the page.
          </p>
          <VImg
            class="rounded-lg"
            :src="checkoutImg"
          />
        </VCol>
        <VCol
          cols="12"
          md="4"
        >
          <div class="mt-16">
            <VTextField
              prepend-inner-icon="mdi-magnify"
              placeholder="Search..."
              class="pt-2 mb-8"
            />
            <div>
              <h6
                class="text-h6 px-4 py-2 mb-4 rounded"
                style="background: rgba(58, 53, 65, 4%);"
              >
                Articles in this section
              </h6>
              <VList class="card-list">
                <VListItem
                  v-for="(item, index) in [
                    'Template Kits',
                    'Elementor Template Kits: PHP Zip Extends',
                    'Envato Elements Template Kits',
                    'Envato Elements Template Kits',
                    'How to use the template in WordPress',
                    'How to use the Template Kit Import',
                  ]"
                  :key="index"
                  link
                  append-icon="mdi-chevron-right"
                >
                  {{ item }}
                </VListItem>
              </VList>
            </div>
          </div>
        </VCol>
      </VRow>
    </VContainer>
    <Footer class="mt-15" />
  </div>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1rem;
}
</style>
