<script setup lang="ts">
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import ECommerceAddCustomerDrawer from '@/views/apps/ecommerce/ECommerceAddCustomerDrawer.vue'

import type { Options } from '@core/types'

const customers = ref([])
const totalCustomers = ref(0)
const searchQuery = ref('')
const isAddCustomerDrawerOpen = ref(false)

const options = ref<Options>({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

const fetchCustomers = async () => {
  const { data, error } = await useApi<any>(createUrl('/apps/ecommerce/customers', {
    q: searchQuery.value,
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
    customers.value = data.value.customers
    totalCustomers.value = data.value.total
  }
}

const headers = [
  { title: 'Customer', key: 'customer' },
  { title: 'Customer Id', key: 'customerId' },
  { title: 'Country', key: 'country' },
  { title: 'Orders', key: 'orders' },
  { title: 'Total Spent', key: 'total_spent' },
]

watch([searchQuery, options], fetchCustomers, { deep: true, immediate: true })
</script>

<template>
  <div>
    <VCard>
      <VCardText>
        <div class="d-flex justify-space-between flex-wrap gap-y-4">
          <VTextField
            v-model="searchQuery"
            style="max-inline-size: 200px; min-inline-size: 200px;"
            placeholder="Search .."
            density="compact"
          />
          <div class="d-flex flex-row gap-4 align-center flex-wrap">
            <VSelect
              v-model="options.itemsPerPage"
              density="compact"
              :items="[5, 10, 20, 50, 100]"
            />

            <VBtn
              prepend-icon="mdi-export-variant"
              variant="outlined"
              color="secondary"
            >
              Export
            </VBtn>
            <VBtn
              prepend-icon="mdi-plus"
              @click="isAddCustomerDrawerOpen = !isAddCustomerDrawerOpen"
            >
              Add Customer
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
              <RouterLink
                :to="{ name: 'apps-ecommerce-customer-details-id', params: { id: item.raw.customer_id } }"
                class="text-sm font-weight-medium"
              >
                {{ item.raw.customer }}
              </RouterLink>
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

        <template #item.country="{ item }">
          <div class="d-flex gap-x-2">
            <img
              :src="item.raw.country_flag"
              height="22"
              width="22"
            >
            <span class="text-body-1">{{ item.raw.country }}</span>
          </div>
        </template>

        <template #item.total_spent="{ item }">
          <span class="text-body-1 font-weight-medium text-high-emphasis">${{ item.raw.total_spent }}</span>
        </template>
      </VDataTableServer>
    </VCard>
    <ECommerceAddCustomerDrawer v-model:is-drawer-open="isAddCustomerDrawerOpen" />
  </div>
</template>
