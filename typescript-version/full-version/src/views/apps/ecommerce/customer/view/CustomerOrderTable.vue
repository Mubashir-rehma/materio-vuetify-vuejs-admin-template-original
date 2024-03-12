<script setup lang="ts">
import type { Order } from '@db/apps/ecommerce/types'

const searchQuery = ref('')

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = (options: any) => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = [
  { title: 'Order', key: 'order' },
  { title: 'Date', key: 'date' },
  { title: 'Status', key: 'status' },
  { title: 'Spent', key: 'spent' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const resolveStatus = (status: string) => {
  if (status === 'Delivered')
    return { color: 'success' }
  if (status === 'Out for Delivery')
    return { color: 'primary' }
  if (status === 'Ready to Pickup')
    return { color: 'info' }
  if (status === 'Dispatched')
    return { color: 'warning' }
}

const { data: ordersData, execute: fetchOrders } = await useApi<any>(createUrl('/apps/ecommerce/orders',
  {
    query: {
      q: searchQuery,
      page,
      itemsPerPage,
      sortBy,
      orderBy,
    },
  },
))

const orders = computed((): Order[] => ordersData.value?.orders || [])
const totalOrder = computed(() => ordersData.value?.total || 0)

const deleteOrder = async (id: number) => {
  await $api(`/apps/ecommerce/orders/${id}`, {
    method: 'DELETE',
  })
  fetchOrders()
}
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-sm-space-between justify-start flex-wrap gap-4">
        <div class="text-h6">
          Orders placed
        </div>
        <VTextField
          v-model="searchQuery"
          density="compact"
          placeholder="Serach Order"
          style=" max-inline-size: 200px; min-inline-size: 200px;"
        />
      </div>
    </VCardText>
    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      v-model:page="page"
      :headers="headers"
      :items="orders"
      item-value="id"
      :items-length="totalOrder"
      class="text-no-wrap"
      @update:options="updateOptions"
    >
      <!-- Order ID -->
      <template #item.order="{ item }">
        <RouterLink :to="{ name: 'apps-ecommerce-order-details-id', params: { id: item.order } }">
          #{{ item.order }}
        </RouterLink>
      </template>

      <!-- Date -->
      <template #item.date="{ item }">
        {{ new Date(item.date).toDateString() }}
      </template>

      <!-- Status -->
      <template #item.status="{ item }">
        <VChip
          density="comfortable"
          :color="resolveStatus(item.status)?.color"
        >
          {{ item.status }}
        </VChip>
      </template>

      <!-- Spent -->
      <template #item.spent="{ item }">
        ${{ item.spent }}
      </template>

      <!-- Actions -->
      <template #item.actions="{ item }">
        <IconBtn>
          <VIcon icon="mdi-dots-vertical" />
          <VMenu activator="parent">
            <VList>
              <VListItem value="view">
                <RouterLink
                  :to="{ name: 'apps-ecommerce-order-details-id', params: { id: item.order } }"
                  class="text-high-emphasis"
                >
                  View
                </RouterLink>
              </VListItem>
              <VListItem
                value="delete"
                @click="deleteOrder(item.id)"
              >
                Delete
              </VListItem>
            </VList>
          </VMenu>
        </IconBtn>
      </template>
    </VDataTableServer>
  </VCard>
</template>
