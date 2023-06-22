<script setup lang="ts">
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import type { Order } from '@/@fake-db/types'
import { useECommerceStore } from '@/views/apps/ecommerce/useECommerceStore'
import type { Options } from '@core/types'

const ECommerceStore = useECommerceStore()
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

const resolveStatus = (status: number) => {
  if (status === 1)
    return { text: 'Delivered', color: 'success' }
  if (status === 2)
    return { text: 'Out for Delivery', color: 'primary' }
  if (status === 3)
    return { text: 'Ready to Pickup', color: 'info' }
  if (status === 4)
    return { text: 'Dispatched', color: 'warning' }
}

const fetchOrders = () => {
  ECommerceStore.fetchOrders({
    q: searchQuery.value,
    options: options.value,
  }).then(res => {
    console.log(res)
    orders.value = res.data.orders
    totalOrder.value = res.data.total
  })
}

const deleteOrder = (id: number) => {
  ECommerceStore.deleteOrder(id)

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
          style=" min-width: 200px; max-width: 200px;"
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
          v-bind="resolveStatus(item.raw.status)"
          density="comfortable"
        />
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
