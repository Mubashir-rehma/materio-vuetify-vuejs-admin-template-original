<script setup lang="ts">
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import type { Order } from '@/@fake-db/types'

import type { Options } from '@core/types'

const orders = ref<Order[]>([])
const searchQuery = ref('')
const totalOrder = ref(0)

const options = ref<Options>({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

const headers = [
  { title: 'Order', key: 'order' },
  { title: 'Date', key: 'date' },
  { title: 'Status', key: 'status' },
  { title: 'Spent', key: 'spent' },
  { title: 'Actions', key: 'actions' },
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

const fetchOrders = async () => {
  const { data, error } = await useApi<any>(createUrl('/apps/ecommerce/orders', {
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
    orders.value = data.value.orders
    totalOrder.value = data.value.total
  }
}

const deleteOrder = async (id: number) => {
  await $api(`/apps/ecommerce/orders/${id}`, {
    method: 'DELETE',
  })
  fetchOrders()
}

watchEffect(fetchOrders)
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
      v-model:items-per-page="options.itemsPerPage"
      v-model:page="options.page"
      :headers="headers"
      :items="orders"
      :items-length="totalOrder"
      class="text-no-wrap"
      @update:options="options = $event"
    >
      <!-- Order ID -->
      <template #item.order="{ item }">
        <RouterLink :to="{ name: 'apps-ecommerce-order-details-id', params: { id: item.raw.order } }">
          #{{ item.raw.order }}
        </RouterLink>
      </template>

      <!-- Date -->
      <template #item.date="{ item }">
        {{ new Date(item.raw.date).toDateString() }}
      </template>

      <!-- Status -->
      <template #item.status="{ item }">
        <VChip
          density="comfortable"
          :color="resolveStatus(item.raw.status)?.color"
        >
          {{ item.raw.status }}
        </VChip>
      </template>

      <!-- Spent -->
      <template #item.spent="{ item }">
        ${{ item.raw.spent }}
      </template>

      <!-- Actions -->
      <template #item.actions="{ item }">
        <IconBtn>
          <VIcon icon="mdi-dots-vertical" />
          <VMenu activator="parent">
            <VList>
              <VListItem value="view">
                <RouterLink :to="{ name: 'apps-ecommerce-order-details-id', params: { id: item.raw.order } }">
                  View
                </RouterLink>
              </VListItem>
              <VListItem
                value="delete"
                @click="deleteOrder(item.raw.id)"
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
