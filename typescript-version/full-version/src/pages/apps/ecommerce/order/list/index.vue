<script setup lang="ts">
import type { Order } from '@db/apps/ecommerce/types'
import mastercard from '@images/cards/logo-mastercard-small.png'
import paypal from '@images/cards/paypal-primary.png'

const widgetData = ref([
  { title: 'Pending Payment', value: 56, icon: 'mdi-calendar-clock-outline' },
  { title: 'Completed', value: 12689, icon: 'mdi-check-all' },
  { title: 'Refunded', value: 124, icon: 'mdi-wallet-outline' },
  { title: 'Failed', value: 32, icon: 'mdi-alert-octagon-outline' },
])

const searchQuery = ref('')

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Data table Headers
const headers = [
  { title: 'Order', key: 'order' },
  { title: 'Date', key: 'date' },
  { title: 'Customers', key: 'customers' },
  { title: 'Payment', key: 'payment', sortable: false },
  { title: 'Status', key: 'status' },
  { title: 'Method', key: 'method', sortable: false },
  { title: 'Actions', key: 'actions', sortable: false },
]

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

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

const resolveStatus = (status: string) => {
  if (status === 'Delivered')
    return { text: 'Delivered', color: 'success' }
  if (status === 'Out for Delivery')
    return { text: 'Out for Delivery', color: 'primary' }
  if (status === 'Ready to Pickup')
    return { text: 'Ready to Pickup', color: 'info' }
  if (status === 'Dispatched')
    return { text: 'Dispatched', color: 'warning' }
}

// Fetch Orders
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

const orders = computed((): Order[] => ordersData.value.orders)
const totalOrder = computed(() => ordersData.value.total)

// Delete Orders
const deleteOrder = async (id: number) => {
  await $api(`/apps/ecommerce/orders/${id}`, {
    method: 'DELETE',
  })
  fetchOrders()
}
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
                  variant="tonal"
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

    <VCard>
      <VCardText>
        <div class="d-flex justify-sm-space-between justify-start flex-wrap gap-4">
          <VTextField
            v-model="searchQuery"
            density="compact"
            placeholder="Serach Order"
            style=" max-inline-size: 200px; min-inline-size: 200px;"
          />

          <VBtn prepend-icon="mdi-export-variant">
            Export
          </VBtn>
        </div>
      </VCardText>
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="orders"
        item-value="order"
        :items-length="totalOrder"
        show-select
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

        <!-- Customers  -->
        <template #item.customers="{ item }">
          <div class="d-flex align-center">
            <VAvatar
              size="34"
              :variant="!item.avatar.length ? 'tonal' : undefined"
              :rounded="1"
              class="me-2"
            >
              <VImg
                v-if="item.avatar"
                :src="item.avatar"
              />

              <span
                v-else
                class="font-weight-medium"
              >{{ avatarText(item.customer) }}</span>
            </VAvatar>

            <div class="d-flex flex-column">
              <RouterLink :to="{ name: 'pages-user-profile-tab', params: { tab: 'profile' } }">
                <div class="text-high-emphasis font-weight-medium">
                  {{ item.customer }}
                </div>
              </RouterLink>
              <span class="text-sm">{{ item.email }}</span>
            </div>
          </div>
        </template>

        <!-- Payments -->
        <template #item.payment="{ item }">
          <li
            :class="`text-${resolvePaymentStatus(item.payment)?.color}`"
            class="font-weight-medium"
          >
            {{ resolvePaymentStatus(item.payment)?.text }}
          </li>
        </template>

        <!-- Status -->
        <template #item.status="{ item }">
          <VChip
            v-bind="resolveStatus(item.status)"
            density="comfortable"
          />
        </template>

        <!-- Method -->
        <template #item.method="{ item }">
          <div class="d-flex align-start gap-x-2">
            <VImg
              :src="item.method === 'mastercard' ? mastercard : paypal"
              height="22"
              max-width="22"
            />
            <div>
              <VIcon
                icon="mdi-dots-horizontal"
                class="me-2"
              />
              <span v-if="item.method === 'mastercard'">
                {{ item.methodNumber }}
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
  </div>
</template>

<style lang="scss" scoped>
#customer-link{
  &:hover{
    color: '#000' !important
  }
}
</style>
