<script setup lang="ts">
import ECommerceAddCategoryDrawer from '@/views/apps/ecommerce/EcommerceAddCategoryDrawer.vue'

import product1 from '@images/ecommerce-images/product-1.png'
import product10 from '@images/ecommerce-images/product-10.png'
import product11 from '@images/ecommerce-images/product-11.png'
import product12 from '@images/ecommerce-images/product-12.png'
import product14 from '@images/ecommerce-images/product-14.png'
import product17 from '@images/ecommerce-images/product-17.png'
import product19 from '@images/ecommerce-images/product-19.png'
import product2 from '@images/ecommerce-images/product-2.png'
import product25 from '@images/ecommerce-images/product-25.png'
import product28 from '@images/ecommerce-images/product-28.png'
import product9 from '@images/ecommerce-images/product-9.png'

const categoryData = [
  {
    categoryTitle: 'Smart Phone',
    description: 'Choose from wide range of smartphones online at best prices.',
    totalProduct: 12548,
    totalEarning: 98784,
    image: product1,
  },
  {
    categoryTitle: 'Clothing, Shoes, and jewellery',
    description: 'Fashion for a wide selection of clothing, shoes, jewellery and watches.',
    totalProduct: 4689,
    totalEarning: 45627,
    image: product9,
  },
  {
    categoryTitle: 'Home and Kitchen',
    description: 'Browse through the wide range of Home and kitchen products.',
    totalProduct: 12548,
    totalEarning: 98784,
    image: product10,
  },
  {
    categoryTitle: 'Beauty and Personal Care',
    description: 'Explore beauty and personal care products, shop makeup and etc.',
    totalProduct: 12548,
    totalEarning: 98784,
    image: product19,
  },
  {
    categoryTitle: 'Books',
    description: 'Over 25 million titles across categories such as business  and etc.',
    totalProduct: 12548,
    totalEarning: 98784,
    image: product25,
  },
  {
    categoryTitle: 'Games',
    description: 'Every month, get exclusive in-game loot, free games, a free subscription.',
    totalProduct: 12548,
    totalEarning: 98784,
    image: product12,
  },
  {
    categoryTitle: 'Baby Products',
    description: 'Buy baby products across different categories from top brands.',
    totalProduct: 12548,
    totalEarning: 98784,
    image: product14,
  },
  {
    categoryTitle: 'Growsari',
    description: 'Shop grocery Items through at best prices in India.',
    totalProduct: 12548,
    totalEarning: 98784,
    image: product28,
  },
  {
    categoryTitle: 'Computer Accessories',
    description: 'Enhance your computing experience with our range of computer accessories.',
    totalProduct: 9876,
    totalEarning: 65421,
    image: product17,
  },
  {
    categoryTitle: 'Fitness Tracker',
    description: 'Monitor your health and fitness goals with our range of advanced fitness trackers.',
    totalProduct: 1987,
    totalEarning: 32067,
    image: product10,
  },
  {
    categoryTitle: 'Smart Home Devices',
    description: 'Transform your home into a smart home with our innovative smart home devices.',
    totalProduct: 2345,
    totalEarning: 87654,
    image: product11,
  },
  {
    categoryTitle: 'Audio Speakers',
    description: 'Immerse yourself in rich audio quality with our wide range of speakers.',
    totalProduct: 5678,
    totalEarning: 32145,
    image: product2,
  },

]

const headers = [
  { title: 'Category', key: 'categoryTitle' },
  { title: 'Total Products', key: 'totalProduct' },
  { title: 'Total Earning', key: 'totalEarning' },
  { title: 'Action', key: 'actions', sortable: false },
]

const itemsPerPage = ref(10)
const searchQuery = ref('')
const isAddProductDrawerOpen = ref(false)
</script>

<template>
  <div>
    <VCard>
      <VCardText>
        <div class="d-flex justify-md-space-between flex-wrap gap-4 justify-center">
          <VTextField
            v-model="searchQuery"
            placeholder="Search"
            density="compact"
            style="max-inline-size: 200px; min-inline-size: 200px;"
          />

          <div class="d-flex align-center flex-wrap gap-4">
            <VBtn
              prepend-icon="ri-upload-2-line"
              color="secondary"
              variant="outlined"
            >
              Export
            </VBtn>
            <VBtn
              prepend-icon="ri-add-line"
              @click="isAddProductDrawerOpen = !isAddProductDrawerOpen"
            >
              Add Category
            </VBtn>
          </div>
        </div>
      </VCardText>

      <VDataTable
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="categoryData"
        item-value="categoryTitle"
        :search="searchQuery"
        show-select
        class="text-no-wrap"
      >
        <template #item.actions>
          <IconBtn>
            <VIcon icon="ri-pencil-line" />
          </IconBtn>
          <MoreBtn
            :menu-list="[
              { title: 'Download', value: 'download', prependIcon: 'ri-download-line' },
              {
                title: 'Edit',
                value: 'edit',
                prependIcon: 'ri-pencil-line',
              },
              { title: 'Duplicate', value: 'duplicate', prependIcon: 'ri-stack-line' },
            ]"
            item-props
          />
        </template>

        <template #item.categoryTitle="{ item }">
          <div class="d-flex gap-x-3">
            <VAvatar
              variant="tonal"
              rounded
              size="38"
            >
              <img
                :src="item.image"
                :alt="item.categoryTitle"
                width="38"
                height="38"
              >
            </VAvatar>
            <div>
              <div class="text-sm text-high-emphasis font-weight-medium">
                {{ item.categoryTitle }}
              </div>
              <div class="text-caption">
                {{ item.description }}
              </div>
            </div>
          </div>
        </template>

        <template #item.totalEarning="{ item }">
          {{ (item.totalEarning).toLocaleString("en-IN", { style: "currency", currency: 'USD' }) }}
        </template>
        <template #item.totalProduct="{ item }">
          {{ (item.totalProduct).toLocaleString() }}
        </template>
      </VDataTable>
    </VCard>

    <ECommerceAddCategoryDrawer v-model:isDrawerOpen="isAddProductDrawerOpen" />
  </div>
</template>

<style lang="scss">
.ProseMirror-focused{
  border: none;
}
</style>
