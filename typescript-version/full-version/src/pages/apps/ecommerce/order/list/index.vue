<script setup lang="ts">
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import type { Order } from '@/@fake-db/types'
import { useEcommerceStore } from '@/views/apps/ecommerce/useEcommerceStore'
import type { Options } from '@core/types'
import mastercard from '@images/cards/logo-mastercard-small.png'
import paypal from '@images/cards/paypal_primary.png'

const widgetData = ref([
  { title: 'Pending Payment', value: 56, icon: 'mdi-calendar-clock-outline' },
  { title: 'Completed', value: 12689, icon: 'mdi-check-all' },
  { title: 'Refunded', value: 124, icon: 'mdi-wallet-outline' },
  { title: 'Failed', value: 32, icon: 'mdi-alert-octagon-outline' },
])

const EcommerceStore = useEcommerceStore()
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
  { title: 'Customers', key: 'customers' },
  { title: 'Payment', key: 'payment' },
  { title: 'Status', key: 'status' },
  { title: 'Method', key: 'method' },
  { title: 'Actions', key: 'actions' },
]

const resolvePaymentStatus = (status: number) => {
  if (status === 1)
    return { text: 'Paid', color: 'success' }
  if (status === 2)
    return { text: 'Pending', color: 'warning' }
  if (status === 3)
    return { text: 'Cancelled', color: 'secondary' }
  if (status === 4)
    return { text: 'Failed', color: 'error' }
}

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
  EcommerceStore.fetchOrders({
    q: searchQuery.value,
    options: options.value,
  }).then(res => {
    console.log(res)
    orders.value = res.data.orders
    totalOrder.value = res.data.total
  })
}

const deleteOrder = (id: number) => {
  EcommerceStore.deleteOrder(id)

  fetchOrders()
}

watchEffect(fetchOrders)
</script>

<template>
  <div>
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
                  <span class="text-h5 text-high-emphasis">{{ data.value }}</span>
                  <h6 class="text-base text-capitalize font-weight-medium">
                    {{ data.title }}
                  </h6>
                </div>

                <VAvatar
                  color="rgba(var(--v-theme-on-background), var(--v-hover-opacity))"
                  rounded
                  size="38"
                >
                  <VIcon
                    :icon="data.icon"
                    size="26"
                  />
                </VAvatar>
              </div>
            </VCol>
            <VDivider
              v-if="$vuetify.display.mdAndUp ? id !== widgetData.length - 1 : $vuetify.display.smAndUp ? id % 2 === 0 : false"
              vertical
              inset
              length="88"
            />
          </template>
        </VRow>
      </VCardText>
    </VCard>

    <VCard>
      <VCardText>
        <div class="d-flex justify-sm-space-between justify-start flex-wrap gap-4">
          <VTextField
            v-model="searchQuery"
            density="compact"
            placeholder="Serach Order"
            style=" min-width: 200px; max-width: 200px;"
          />
          <div class="d-flex align-center">
            <VSelect
              v-model="options.itemsPerPage"
              density="compact"
              :items="[10, 25, 50, 100]"
              class="me-4"
            />
            <VBtn prepend-icon="mdi-export-variant">
              Export
            </VBtn>
          </div>
        </div>
      </VCardText>
      <VDataTableServer
        v-model:items-per-page="options.itemsPerPage"
        v-model:page="options.page"
        :headers="headers"
        :items="orders"
        :items-length="totalOrder"
        show-select
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

        <!-- Customers  -->
        <template #item.customers="{ item }">
          <div class="d-flex align-center">
            <VAvatar
              size="34"
              :variant="!item.raw.avatar.length ? 'tonal' : undefined"
              :rounded="1"
              class="me-2"
            >
              <VImg
                v-if="item.raw.avatar"
                :src="item.raw.avatar"
              />

              <span
                v-else
                class="font-weight-medium"
              >{{ avatarText(item.raw.customer) }}</span>
            </VAvatar>

            <div class="d-flex flex-column">
              <span class="text-high-emphasis font-weight-medium">{{ item.raw.customer }}</span>
              <span class="text-sm">{{ item.raw.email }}</span>
            </div>
          </div>
        </template>

        <!-- Payments -->
        <template #item.payment="{ item }">
          <li
            :class="`text-${resolvePaymentStatus(item.raw.payment)?.color}`"
            class="font-weight-medium"
          >
            {{ resolvePaymentStatus(item.raw.payment)?.text }}
          </li>
        </template>

        <!-- Status -->
        <template #item.status="{ item }">
          <VChip
            v-bind="resolveStatus(item.raw.status)"
            density="comfortable"
          />
        </template>

        <!-- Method -->
        <template #item.method="{ item }">
          <div class="d-flex align-start gap-x-2">
            <VImg
              :src="item.raw.method === 'mastercard' ? mastercard : paypal"
              height="22"
              max-width="22"
            />
            <div>
              <VIcon
                icon="mdi-dots-horizontal"
                class="me-2"
              />
              <span v-if="item.raw.method === 'mastercard'">
                {{ item.raw.method_number }}
              </span>
              <span v-else>
                @gmail.com
              </span>
            </div>
          </div>
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
  </div>
</template>
