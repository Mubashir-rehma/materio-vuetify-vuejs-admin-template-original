<script setup lang="ts">
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { useEcommerceStore } from '@/views/apps/ecommerce/useEcommerceStore'
import type { Options } from '@core/types'

const EcommerceStore = useEcommerceStore()

const customers = ref([])
const totalCustomers = ref(0)
const searchQuery = ref('')

const options = ref<Options>({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

const fetchCustomers = () => {
  EcommerceStore.fetchCustomers({
    q: searchQuery.value,
    options: options.value,
  }).then(res => {
    console.log(res.data.customers)
    customers.value = res.data.customers
    totalCustomers.value = res.data.total
  })
}

const headers = [
  { title: 'Customer', key: 'customer' },
  { title: 'Customer Id', key: 'customerId' },
  { title: 'Country', key: 'country' },
  { title: 'Orders', key: 'orders' },
  { title: 'Total Spent', key: 'total_spent' },
]

watchEffect(fetchCustomers)
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between flex-wrap gap-y-4">
        <VTextField
          v-model="searchQuery"
          style=" min-width: 200px;max-width: 200px;"
          placeholder="Search .."
          density="compact"
        />
        <div class="d-flex flex-row gap-4 align-center flex-wrap">
          <VSelect
            v-model="options.itemsPerPage"
            :items="[10, 25, 50, 100]"
            density="compact"
          />
          <VBtn
            prepend-icon="mdi-export-variant"
            variant="outlined"
            color="secondary"
          >
            Export
          </VBtn>
          <VBtn prepend-icon="mdi-plus">
            Add Product
          </VBtn>
        </div>
      </div>
    </VCardText>

    <VDataTableServer
      v-model:items-per-page="options.itemsPerPage"
      v-model:page="options.page"
      :items="customers"
      :headers="headers"
      :items-length="totalCustomers"
      show-select
      class="text-no-wrap"
      @update:options="options = $event"
    >
      <template #item.customer="{ item }">
        <div class="d-flex align-center gap-x-3">
          <VAvatar
            size="34"
            :image="item.raw.avatar"
          />
          <div class="d-flex flex-column">
            <span class="text-sm font-weight-medium">{{ item.raw.customer }}</span>
            <span class="text-xs">{{ item.raw.email }}</span>
          </div>
        </div>
      </template>
      <template #item.customerId="{ item }">
        #{{ item.raw.customer_id }}
      </template>

      <template #item.orders="{ item }">
        {{ item.raw.order }}
      </template>

      <template #item.total_spent="{ item }">
        <span class="text-body-1 font-weight-medium text-high-emphasis">{{ item.raw.total_spent }}</span>
      </template>
    </VDataTableServer>
  </VCard>
</template>
