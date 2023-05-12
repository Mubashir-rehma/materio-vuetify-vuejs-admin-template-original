<script setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { useInvoiceStore } from '@/views/apps/invoice/useInvoiceStore'
import { avatarText } from '@core/utils/formatters'

const invoiceListStore = useInvoiceStore()
const searchQuery = ref('')
const dateRange = ref('')
const selectedStatus = ref()
const totalPage = ref(1)
const totalInvoices = ref(0)
const invoices = ref([])
const selectedRows = ref([])

const options = ref({
  page: 1,
  itemsPerPage: 8,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

const isLoading = ref(false)

// 👉 headers
const headers = [
  {
    title: '#ID',
    key: 'id',
  },
  {
    title: 'TRENDING',
    key: 'trending',
    sortable: false,
  },
  {
    title: 'CLIENT',
    key: 'client',
  },
  {
    title: 'TOTAL',
    key: 'total',
  },
  {
    title: 'BALANCE',
    key: 'balance',
  },
]

// 👉 Fetch Invoices
const fetchInvoices = (query, currentStatus, firstDate, lastDate, option) => {
  isLoading.value = true
  invoiceListStore.fetchInvoices({
    q: query,
    status: currentStatus,
    startDate: firstDate,
    endDate: lastDate,
    options: option,
  }).then(response => {
    invoices.value = response.data.invoices
    totalPage.value = response.data.totalPage
    totalInvoices.value = response.data.totalInvoices
  }).catch(error => {
    console.log(error)
  })
  isLoading.value = false
}

// 👉 Invoice balance variant resolver
const resolveInvoiceBalanceVariant = (balance, total) => {
  if (balance === total)
    return {
      status: 'Unpaid',
      chip: { color: 'error' },
    }
  if (balance === 0)
    return {
      status: 'Paid',
      chip: { color: 'success' },
    }
  
  return {
    status: balance,
    chip: { variant: 'text' },
  }
}

const resolveInvoiceStatusVariantAndIcon = status => {
  if (status === 'Partial Payment')
    return {
      variant: 'warning',
      icon: 'mdi-chart-timeline-variant',
    }
  if (status === 'Paid')
    return {
      variant: 'success',
      icon: 'mdi-check',
    }
  if (status === 'Downloaded')
    return {
      variant: 'info',
      icon: 'mdi-arrow-down',
    }
  if (status === 'Draft')
    return {
      variant: 'secondary',
      icon: 'mdi-content-save-outline',
    }
  if (status === 'Sent')
    return {
      variant: 'primary',
      icon: 'mdi-email-outline',
    }
  if (status === 'Past Due')
    return {
      variant: 'error',
      icon: 'mdi-alert-circle-outline',
    }
  
  return {
    variant: 'secondary',
    icon: 'mdi-close',
  }
}

// 👉 watch for data table options like itemsPerPage,page,searchQuery,sortBy etc...
watchEffect(() => {
  const [start, end] = dateRange.value ? dateRange.value.split('to') : ''

  fetchInvoices(searchQuery.value, selectedStatus.value, start, end, options.value)
})
</script>

<template>
  <section v-if="invoices">
    <!-- 👉 Invoice Filters  -->

    <VCard id="invoice-list">
      <!-- SECTION Datatable -->
      <VDataTableServer
        v-model="selectedRows"
        v-model:items-per-page="options.itemsPerPage"
        v-model:page="options.page"
        :loading="isLoading"
        :items-length="totalInvoices"
        :headers="headers"
        :items="invoices"
        class="text-no-wrap text-sm"
        @update:options="options = $event"
      >
        <!-- Trending Header -->
        <template #column.trending>
          <VIcon
            size="22"
            icon="mdi-trending-up"
          />
        </template>

        <!-- id -->
        <template #item.id="{ item }">
          <RouterLink :to="{ name: 'apps-invoice-preview-id', params: { id: item.value } }">
            #{{ item.raw.id }}
          </RouterLink>
        </template>

        <!-- trending -->
        <template #item.trending="{ item }">
          <VTooltip>
            <template #activator="{ props }">
              <VAvatar
                :size="34"
                v-bind="props"
                :color="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).variant"
                variant="tonal"
              >
                <VIcon
                  :size="20"
                  :icon="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).icon"
                />
              </VAvatar>
            </template>
            <p class="mb-0">
              {{ item.raw.invoiceStatus }}
            </p>
            <p class="mb-0">
              Balance: {{ item.raw.balance }}
            </p>
            <p class="mb-0">
              Due date: {{ item.raw.dueDate }}
            </p>
          </VTooltip>
        </template>

        <!-- client -->
        <template #item.client="{ item }">
          <div class="d-flex align-center">
            <VAvatar
              size="34"
              :color="!item.raw.avatar.length ? resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).variant : undefined"
              :variant="!item.raw.avatar.length ? 'tonal' : undefined"
              class="me-3"
            >
              <VImg
                v-if="item.raw.avatar.length"
                :src="item.raw.avatar"
              />
              <span v-else>{{ avatarText(item.raw.client.name) }}</span>
            </VAvatar>
            <div class="d-flex flex-column">
              <h6 class="text-sm font-weight-medium mb-0">
                {{ item.raw.client.name }}
              </h6>
              <span class="text-caption">{{ item.raw.client.companyEmail }}</span>
            </div>
          </div>
        </template>

        <!-- Total -->
        <template #item.total="{ item }">
          ${{ item.raw.total }}
        </template>

        <!-- Balance -->
        <template #item.balance="{ item }">
          <VChip
            v-if="typeof ((resolveInvoiceBalanceVariant(item.raw.balance, item.raw.total)).status) === 'string'"
            :color="resolveInvoiceBalanceVariant(item.raw.balance, item.raw.total).chip.color"
            density="comfortable"
          >
            {{ (resolveInvoiceBalanceVariant(item.raw.balance, item.raw.total)).status }}
          </VChip>

          <span
            v-else
            class="text-high-emphasis"
          >
            {{ Number((resolveInvoiceBalanceVariant(item.raw.balance, item.raw.total)).status) > 0 ? `$${(resolveInvoiceBalanceVariant(item.raw.balance, item.raw.total)).status}` : `-$${Math.abs(Number((resolveInvoiceBalanceVariant(item.raw.balance, item.raw.total)).status))}` }}
          </span>
        </template>

        <!-- Pagination -->
        <template #bottom />
      </VDataTableServer>
      <!-- !SECTION -->
      <VDivider />
    </VCard>
  </section>
</template>

<style lang="scss">
#invoice-list {
  .invoice-list-actions {
    inline-size: 8rem;
  }

  .invoice-list-search {
    inline-size: 12rem;
  }
}
</style>
