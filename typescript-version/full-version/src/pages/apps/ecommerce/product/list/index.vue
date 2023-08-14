<script setup lang="ts">
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import type { ECommerceProduct } from '@/plugins/fake-api/handlers/apps/ecommerce/type'
import type { Options } from '@core/types'

definePage({
  alias: '/dashboards/ecommerce',
})

const products = ref<ECommerceProduct[]>([])

const totalProduct = ref(0)

const widgetData = ref([
  { title: 'In-Store Sales', value: '$5,345.43', icon: 'mdi-home-outline', desc: '5k orders', change: 5.7 },
  { title: 'Website Sales', value: '$674,347.12', icon: 'mdi-laptop', desc: '21k orders', change: 12.4 },
  { title: 'Discount', value: '$14,235.12', icon: 'mdi-wallet-giftcard', desc: '6k orders' },
  { title: 'Affiliate', value: '$8,345.23', icon: 'mdi-currency-usd', desc: '150 orders', change: -3.5 },
])

const headers = [
  { title: 'Product', key: 'product' },
  { title: 'Category', key: 'category' },
  { title: 'Stock', key: 'stock', sortable: false },
  { title: 'SKU', key: 'sku' },
  { title: 'Price', key: 'price' },
  { title: 'QTY', key: 'qty' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const selectedStatus = ref()
const selectedCategory = ref()
const selectedStock = ref<boolean | undefined>()
const searchQuery = ref('')

const status = ref([
  { title: 'Scheduled', value: 'Scheduled' },
  { title: 'Publish', value: 'Published' },
  { title: 'Inactive', value: 'Inactive' },
])

const categories = ref([
  { title: 'Accessories', value: 'Accessories' },
  { title: 'Home Decor', value: 'Home Decor' },
  { title: 'Electronics', value: 'Electronics' },
  { title: 'Shoes', value: 'Shoes' },
  { title: 'Office', value: 'Office' },
  { title: 'Games', value: 'Games' },
])

const stockStatus = ref([
  { title: 'In Stock', value: true },
  { title: 'Out of Stock', value: false },
])

const options = ref<Options>({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

const resolveCategory = (category: string) => {
  if (category === 'Accessories')
    return { color: 'error', icon: 'mdi-watch' }
  if (category === 'Home Decor')
    return { color: 'info', icon: 'mdi-home-outline' }
  if (category === 'Electronics')
    return { color: 'primary', icon: 'mdi-desktop-mac' }
  if (category === 'Shoes')
    return { color: 'success', icon: 'mdi-shoe-formal' }
  if (category === 'Office')
    return { color: 'warning', icon: 'mdi-briefcase-outline' }
  if (category === 'Games')
    return { color: 'primary', icon: 'mdi-controller-classic-outline' }
}

const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'Scheduled')
    return { text: 'Scheduled', color: 'warning' }
  if (statusMsg === 'Published')
    return { text: 'Publish', color: 'success' }
  if (statusMsg === 'Inactive')
    return { text: 'Inactive', color: 'error' }
}

const fetchProducts = async () => {
  const { data, error } = await useApi<any>(createUrl('/apps/ecommerce/products', {
    q: searchQuery.value,
    stock: selectedStock.value,
    category: selectedCategory.value,
    status: selectedStatus.value,
    ...options.value,
    ...(options.value.sortBy
     && {
       sortBy: (options.value.sortBy)[0]?.key,
       orderBy: (options.value.sortBy)[0]?.order,
     }
    ),
  }))

  if (error.value) {
    console.log(error.value)
  }
  else {
    products.value = data.value.products
    totalProduct.value = data.value.total
  }
}

watch([searchQuery, selectedStock, selectedCategory, selectedStatus, options], fetchProducts, { deep: true, immediate: true })
</script>

<template>
  <div>
    <!-- 👉 widgets -->
    <VCard class="mb-6">
      <VCardText>
        <VRow>
          <template
            v-for="(data, id) in widgetData"
            :key="id"
          >
            <VCol
              cols="12"
              sm="6"
              md="3"
              class="px-6"
            >
              <div class="d-flex justify-space-between">
                <div class="d-flex flex-column gap-y-1">
                  <span class="text-base text-capitalize">{{ data.title }}</span>

                  <span class="text-h5 text-high-emphasis">{{ data.value }}</span>

                  <div>
                    <span class="me-2">
                      {{ data.desc }}
                    </span>

                    <VChip
                      v-if="data.change"
                      density="comfortable"
                      :color="data.change > 0 ? 'success' : 'error'"
                    >
                      {{ prefixWithPlus(data.change) }}%
                    </VChip>
                  </div>
                </div>

                <VAvatar
                  color="rgba(var(--v-theme-on-background), var(--v-hover-opacity))"
                  rounded
                  size="38"
                >
                  <VIcon
                    :icon="data.icon"
                    size="28"
                  />
                </VAvatar>
              </div>
            </VCol>

            <VDivider
              v-if="$vuetify.display.mdAndUp ? id !== widgetData.length - 1
                : $vuetify.display.smAndUp ? id % 2 === 0
                  : false"
              vertical
              inset
              length="88"
            />
          </template>
        </VRow>
      </VCardText>
    </VCard>

    <!-- 👉 products -->
    <VCard
      title="Filters"
      class="mb-6"
    >
      <VCardText>
        <VRow>
          <!-- 👉 Select Status -->
          <VCol
            cols="12"
            sm="4"
          >
            <VSelect
              v-model="selectedStatus"
              label="Select Status"
              placeholder="Select Status"
              :items="status"
              clearable
              clear-icon="mdi-close"
            />
          </VCol>

          <!-- 👉 Select Category -->
          <VCol
            cols="12"
            sm="4"
          >
            <VSelect
              v-model="selectedCategory"
              label="Category"
              placeholder="Select Category"
              :items="categories"
              clearable
              clear-icon="mdi-close"
            />
          </VCol>

          <!-- 👉 Select Stock Status -->
          <VCol
            cols="12"
            sm="4"
          >
            <VSelect
              v-model="selectedStock"
              label="Stock"
              placeholder="Stock"
              :items="stockStatus"
              clearable
              clear-icon="mdi-close"
            />
          </VCol>
        </VRow>
      </VCardText>
      <VDivider class="my-4" />

      <div class="d-flex flex-wrap gap-4 mx-5">
        <div class="d-flex align-center">
          <!-- 👉 Search  -->
          <VTextField
            v-model="searchQuery"
            placeholder="Search Product"
            density="compact"
            style="inline-size: 200px;"
            class="me-3"
          />
        </div>

        <VSpacer />
        <div class="d-flex gap-x-4">
          <!-- 👉 Export button -->
          <VBtn
            variant="outlined"
            color="secondary"
            prepend-icon="mdi-tray-arrow-up"
          >
            Export
          </VBtn>

          <VBtn
            color="primary"
            prepend-icon="mdi-plus"
          >
            Add Product
          </VBtn>
        </div>
      </div>

      <!-- 👉 Datatable  -->
      <VDataTableServer
        v-model:items-per-page="options.itemsPerPage"
        v-model:page="options.page"
        :headers="headers"
        show-select
        :items="products"
        :items-length="totalProduct"
        class="text-no-wrap"
        @update:options="options = $event"
      >
        <!-- product  -->
        <template #item.product="{ item }">
          <div class="d-flex align-center gap-x-2">
            <VAvatar
              v-if="item.raw.image"
              size="38"
              variant="tonal"
              rounded
              :image="item.raw.image"
            />
            <div class="d-flex flex-column">
              <span class="text-high-emphasis font-weight-medium">{{ item.raw.product_name }}</span>
              <span class="text-xs">{{ item.raw.product_brand }}</span>
            </div>
          </div>
        </template>

        <!-- category -->
        <template #item.category="{ item }">
          <VAvatar
            size="30"
            variant="tonal"
            :color="resolveCategory(item.raw.category)?.color"
            class="me-2"
          >
            <VIcon
              :icon="resolveCategory(item.raw.category)?.icon"
              size="18"
            />
          </VAvatar>
          <span class="font-weight-medium text-high-emphasis">{{ item.raw.category }}</span>
        </template>

        <!-- stock -->
        <template #item.stock="{ item }">
          <VSwitch v-model="item.raw.stock" />
        </template>

        <!-- status -->
        <template #item.status="{ item }">
          <VChip
            v-bind="resolveStatus(item.raw.status)"
            density="comfortable"
          />
        </template>

        <!-- Actions -->
        <template #item.actions>
          <IconBtn>
            <VIcon icon="mdi-pencil-outline" />
          </IconBtn>
          <MoreBtn
            :menu-list="[
              { title: 'Download', value: 'download', prependIcon: 'mdi-download-outline' },
              {
                title: 'Edit',
                value: 'edit',
                prependIcon: 'mdi-pencil-outline',
              },
              { title: 'Duplicate', value: 'duplicate', prependIcon: 'mdi-layers-outline' },
            ]"
            item-props
          />
        </template>
      </VDataTableServer>
    </VCard>
  </div>
</template>
