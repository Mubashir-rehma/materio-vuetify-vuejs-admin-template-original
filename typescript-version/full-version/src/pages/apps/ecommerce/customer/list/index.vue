<script setup lang="ts">
import ECommerceAddCustomerDrawer from '@/views/apps/ecommerce/ECommerceAddCustomerDrawer.vue'
import type { Customer } from '@db/apps/ecommerce/types'

const searchQuery = ref('')
const isAddCustomerDrawerOpen = ref(false)

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Data table Headers
const headers = [
  { title: 'Customer', key: 'customer' },
  { title: 'Customer Id', key: 'customerId' },
  { title: 'Country', key: 'country' },
  { title: 'Orders', key: 'orders' },
  { title: 'Total Spent', key: 'totalSpent' },
]

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// Fetch customers Data
const { data: customerData } = await useApi<any>(createUrl('/apps/ecommerce/customers',
  {
    query: {
      q: searchQuery,
      itemsPerPage,
      page,
      sortBy,
      orderBy,
    },
  }),
)

const customers = computed((): Customer[] => customerData.value.customers)
const totalCustomers = computed(() => customerData.value.total)
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
        v-model:items-per-page="itemsPerPage"
        :items="customers"
        item-value="customer"
        :headers="headers"
        :items-length="totalCustomers"
        show-select
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <template #item.customer="{ item }">
          <div class="d-flex align-center gap-x-3">
            <VAvatar
              size="34"
              :image="item.avatar"
            />
            <div class="d-flex flex-column">
              <RouterLink
                :to="{ name: 'apps-ecommerce-customer-details-id', params: { id: item.customerId } }"
                class="text-sm font-weight-medium"
              >
                {{ item.customer }}
              </RouterLink>
              <span class="text-xs">{{ item.email }}</span>
            </div>
          </div>
        </template>
        <template #item.customerId="{ item }">
          #{{ item.customerId }}
        </template>

        <template #item.orders="{ item }">
          {{ item.order }}
        </template>

        <template #item.country="{ item }">
          <div class="d-flex gap-x-2">
            <img
              :src="item.countryFlag"
              height="22"
              width="22"
            >
            <span class="text-body-1">{{ item.country }}</span>
          </div>
        </template>

        <template #item.totalSpent="{ item }">
          <span class="text-body-1 font-weight-medium text-high-emphasis">${{ item.totalSpent }}</span>
        </template>
      </VDataTableServer>
    </VCard>
    <ECommerceAddCustomerDrawer v-model:is-drawer-open="isAddCustomerDrawerOpen" />
  </div>
</template>
