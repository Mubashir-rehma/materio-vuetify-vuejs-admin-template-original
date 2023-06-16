<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'

import product1 from '@images/ecommerce-images/product-1.png'
import product10 from '@images/ecommerce-images/product-10.png'
import product11 from '@images/ecommerce-images/product-11.png'
import product12 from '@images/ecommerce-images/product-12.png'
import product2 from '@images/ecommerce-images/product-2.png'
import product4 from '@images/ecommerce-images/product-4.png'
import product5 from '@images/ecommerce-images/product-5.png'
import product7 from '@images/ecommerce-images/product-7.png'
import product8 from '@images/ecommerce-images/product-8.png'
import product9 from '@images/ecommerce-images/product-9.png'

const category_data = [
  {
    category_title: 'Smart Phone',
    description: 'Choose from wide range of smartphones online at best prices.',
    total_product: 12548,
    total_earning: 98784,
    image: product1,
  },
  {
    category_title: 'Clothing, Shoes, and jewellery',
    description: 'Fashion for a wide selection of clothing, shoes, jewellery and watches.',
    total_product: 4689,
    total_earning: 45627,
    image: product9,
  },
  {
    category_title: 'Home and Kitchen',
    description: 'Browse through the wide range of Home and kitchen products.',
    total_product: 12548,
    total_earning: 98784,
    image: product10,
  },
  {
    category_title: 'Beauty and Personal Care',
    description: 'Explore beauty and personal care products, shop makeup and etc.',
    total_product: 12548,
    total_earning: 98784,
    image: product4,
  },
  {
    category_title: 'Books',
    description: 'Over 25 million titles across categories such as business  and etc.',
    total_product: 12548,
    total_earning: 98784,
    image: product5,
  },
  {
    category_title: 'Games',
    description: 'Every month, get exclusive in-game loot, free games, a free subscription.',
    total_product: 12548,
    total_earning: 98784,
    image: product12,
  },
  {
    category_title: 'Baby Products',
    description: 'Buy baby products across different categories from top brands.',
    total_product: 12548,
    total_earning: 98784,
    image: product7,
  },
  {
    category_title: 'Growsari',
    description: 'Shop grocery Items through at best prices in India.',
    total_product: 12548,
    total_earning: 98784,
    image: product8,
  },
  {
    category_title: 'Computer Accessories',
    description: 'Enhance your computing experience with our range of computer accessories.',
    total_product: 9876,
    total_earning: 65421,
    image: product9,
  },
  {
    category_title: 'Fitness Tracker',
    description: 'Monitor your health and fitness goals with our range of advanced fitness trackers.',
    total_product: 1987,
    total_earning: 32067,
    image: product10,
  },
  {
    category_title: 'Smart Home Devices',
    description: 'Transform your home into a smart home with our innovative smart home devices.',
    total_product: 2345,
    total_earning: 87654,
    image: product11,
  },
  {
    category_title: 'Audio Speakers',
    description: 'Immerse yourself in rich audio quality with our wide range of speakers.',
    total_product: 5678,
    total_earning: 32145,
    image: product2,
  },

]

const headers = [
  { title: 'Category', key: 'category_title' },
  { title: 'Total Products', key: 'total_product' },
  { title: 'Total Earning', key: 'total_earning' },
  { title: 'Action', key: 'actions' },
]

const computedMoreList = computed(() => {
  return () => ([
    { title: 'Download', value: 'download', prependIcon: 'mdi-download-outline' },
    {
      title: 'Edit',
      value: 'edit',
      prependIcon: 'mdi-pencil-outline',
    },
    { title: 'Duplicate', value: 'duplicate', prependIcon: 'mdi-layers-outline' },
  ])
})

const itemsPerPage = ref(10)
const searchQuery = ref('')
const isAddProductDrawerOpen = ref(false)
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-md-space-between flex-wrap gap-y-4 justify-center mb-6">
        <VTextField
          v-model="searchQuery"
          placeholder="Search"
          density="compact"
          style=" min-width: 200px;max-width: 200px;"
        />

        <div class="d-flex align-center  flex-wrap gap-4">
          <VSelect
            v-model="itemsPerPage"
            :items="[10, 25, 50, 100]"
            density="compact"
          />
          <VBtn
            prepend-icon="mdi-export-variant"
            color="secondary"
            variant="outlined"
          >
            Export
          </VBtn>
          <VBtn
            prepend-icon="mdi-plus"
            @click="isAddProductDrawerOpen = !isAddProductDrawerOpen"
          >
            Add Product
          </VBtn>
        </div>
      </div>

      <VDataTable
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="category_data"
        :search="searchQuery"
        show-select
      >
        <template #item.actions>
          <IconBtn>
            <VIcon icon="mdi-pencil-outline" />
          </IconBtn>
          <MoreBtn
            :menu-list="computedMoreList()"
            item-props
          />
        </template>

        <template #item.category_title="{ item }">
          <div class="d-flex gap-x-3">
            <VAvatar
              variant="tonal"
              rounded
              size="38"
            >
              <img
                :src="item.raw.image"
                :alt="item.raw.category_title"
                width="38"
                height="38"
              >
            </VAvatar>
            <div>
              <div class="text-sm text-high-emphasis font-weight-medium">
                {{ item.raw.category_title }}
              </div>
              <div class="text-caption">
                {{ item.raw.description }}
              </div>
            </div>
          </div>
        </template>

        <template #item.total_earning="{ item }">
          {{ (item.raw.total_earning).toLocaleString("en-IN", { style: "currency", currency: 'USD' }) }}
        </template>
        <template #item.total_product="{ item }">
          {{ (item.raw.total_product).toLocaleString() }}
        </template>
      </VDataTable>
    </VCardText>
  </VCard>

  <VNavigationDrawer
    v-model="isAddProductDrawerOpen"
    temporary
    location="end"
    width="370"
  >
    <div class="d-flex justify-space-between pa-6">
      <h6 class="text-h6">
        Add Category
      </h6>
      <IconBtn
        density="comfortable"
        @click="isAddProductDrawerOpen = !isAddProductDrawerOpen"
      >
        <VIcon icon="mdi-close" />
      </IconBtn>
    </div>

    <VDivider class="mb-3" />

    <div class="px-6">
      <VRow>
        <VCol cols="12">
          <VTextField
            label="Title"
            placeholder="Enter Category Title"
          />
        </VCol>
        <VCol cols="12">
          <VTextField
            label="Slug"
            placeholder="Enter Slug"
          />
        </VCol>
        <VCol cols="12">
          <VTextField
            type="file"
            label="Attachment"
          />
        </VCol>
        <VCol cols="12">
          <VSelect
            label="Parent Category"
            placeholder="Select Parent Category"
            :items="['HouseHold', 'Management', 'Electronics', 'Office', 'Accessories']"
          />
        </VCol>
        <VCol cols="12">
          <VTextarea placeholder="Write A comment" />
        </VCol>
        <VCol>
          <VSelect
            placeholder="Select Category Status"
            label="Parent Status"
            :items="['Published', 'Inactive', 'Scheduled']"
          />
        </VCol>
      </VRow>

      <div class="d-flex justify-start mt-6">
        <VBtn
          color="primary"
          class="me-4"
        >
          Add
        </VBtn>
        <VBtn
          color="error"
          variant="outlined"
          @click="isAddProductDrawerOpen = !isAddProductDrawerOpen"
        >
          Discard
        </VBtn>
      </div>
    </div>
  </VNavigationDrawer>
</template>
