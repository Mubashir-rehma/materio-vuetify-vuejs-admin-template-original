<script setup lang="ts">
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import type { Invoice } from '@/@fake-db/types'
import type { Options } from '@core/types'

type invoiceStatus = 'Downloaded' | 'Draft' | 'Paid' | 'Sent' | 'Partial Payment' | 'Past Due' | null

const searchQuery = ref('')
const dateRange = ref('')
const selectedStatus = ref()
const totalInvoices = ref(0)
const invoices = ref<Invoice[]>([])

const options = ref<Options>({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

const isLoading = ref(false)

// 👉 headers
const headers = [
  { title: '#ID', key: 'id' },
  { title: 'Trending', key: 'trending', sortable: false },
  { title: 'Total', key: 'total' },
  { title: 'Date', key: 'date' },
  { title: 'Balance', key: 'balance' },
  { title: 'Actions', key: 'actions', sortable: false },
]

// 👉 Fetch Invoices
const fetchInvoices = async (query: string, currentStatus: invoiceStatus, firstDate: string, lastDate: string, option: Options) => {
  isLoading.value = true

  const { data, error } = await useApi<any>(createUrl('/apps/invoice', {
    q: query,
    status: currentStatus,
    startDate: firstDate?.trim(),
    endDate: lastDate?.trim(),
    ...option,
    ...(option.sortBy
     && {
       sortBy: (option.sortBy)[0]?.key,
       orderBy: (option.sortBy)[0]?.order,
     }
    ),
  }))

  if (error.value) {
    console.log(error.value)
  }
  else {
    invoices.value = data.value.invoices
    totalInvoices.value = data.value.totalInvoices
  }

  isLoading.value = false
}

// 👉 Invoice balance variant resolver
const resolveInvoiceBalanceVariant = (balance: string | number, total: number) => {
  if (balance === total)
    return { status: 'Unpaid', chip: { color: 'error' } }

  if (balance === 0)
    return { status: 'Paid', chip: { color: 'success' } }

  return { status: balance, chip: { variant: 'text' } }
}

// 👉 Invoice status variant resolver
const resolveInvoiceStatusVariantAndIcon = (status: string) => {
  if (status === 'Partial Payment')
    return { variant: 'warning', icon: 'mdi-chart-timeline-variant' }
  if (status === 'Paid')
    return { variant: 'success', icon: 'mdi-check' }
  if (status === 'Downloaded')
    return { variant: 'info', icon: 'mdi-arrow-down' }
  if (status === 'Draft')
    return { variant: 'secondary', icon: 'mdi-content-save-outline' }
  if (status === 'Sent')
    return { variant: 'primary', icon: 'mdi-email-outline' }
  if (status === 'Past Due')
    return { variant: 'error', icon: 'mdi-alert-circle-outline' }

  return { variant: 'secondary', icon: 'mdi-close' }
}

const computedMoreList = computed(() => {
  return (paramId: number) => ([
    { title: 'Download', value: 'download', prependIcon: 'mdi-download-outline' },
    {
      title: 'Edit',
      value: 'edit',
      prependIcon: 'mdi-pencil-outline',
      to: { name: 'apps-invoice-edit-id', params: { id: paramId } },
    },
    { title: 'Duplicate', value: 'duplicate', prependIcon: 'mdi-layers-outline' },
  ])
})

// 👉 Delete Invoice
const deleteInvoice = async (id: number) => {
  const { error } = await $api(`/apps/invoice/${id}`, { method: 'DELETE' })

  if (error.value)
    console.log(error.value)

  fetchInvoices(
    searchQuery.value,
    selectedStatus.value,
    dateRange.value?.split('to')[0],
    dateRange.value?.split('to')[1],
    options.value,
  )
}

// 👉 watch for data table options like itemsPerPage,page,searchQuery,sortBy etc...
watchEffect(() => {
  const [start, end] = dateRange.value ? dateRange.value.split('to') : ''

  fetchInvoices(
    searchQuery.value,
    selectedStatus.value,
    start,
    end,
    options.value,
  )
})
</script>

<template>
  <section v-if="invoices">
    <VCard id="invoice-list">
      <VCardText class="d-flex align-center flex-wrap gap-4">
        <!-- 👉 Actions  -->
        <div class="me-3 text-h6">
          Invoice List
        </div>

        <VSpacer />

        <div class="d-flex align-center flex-wrap gap-4">
          <!-- 👉 Export invoice -->
          <VBtn prepend-icon="mdi-plus">
            Export
          </VBtn>
        </div>
      </VCardText>

      <VDivider />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-model:items-per-page="options.itemsPerPage"
        v-model:page="options.page"
        :loading="isLoading"
        :items-length="totalInvoices"
        :headers="headers"
        :items="invoices"
        class="text-no-wrap text-sm rounded-0"
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

        <!-- Total -->
        <template #item.total="{ item }">
          ${{ item.raw.total }}
        </template>

        <!-- issued Date -->
        <template #item.date="{ item }">
          {{ item.raw.issuedDate }}
        </template>

        <!-- Balance -->
        <template #item.balance="{ item }">
          <VChip
            v-if="typeof ((resolveInvoiceBalanceVariant(item.raw.balance, item.raw.total)).status) === 'string'"
            :color="resolveInvoiceBalanceVariant(item.raw.balance, item.raw.total).chip.color"
          >
            {{ (resolveInvoiceBalanceVariant(item.raw.balance, item.raw.total)).status }}
          </VChip>
          <span
            v-else
            class="text-sm text-high-emphasis"
          >
            {{ Number((resolveInvoiceBalanceVariant(item.raw.balance, item.raw.total)).status) > 0 ? `$${(resolveInvoiceBalanceVariant(item.raw.balance, item.raw.total)).status}` : `-$${Math.abs(Number((resolveInvoiceBalanceVariant(item.raw.balance, item.raw.total)).status))}` }}
          </span>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn @click="deleteInvoice(item.raw.id)">
            <VIcon icon="mdi-delete-outline" />
          </IconBtn>

          <IconBtn :to="{ name: 'apps-invoice-preview-id', params: { id: item.raw.id } }">
            <VIcon icon="mdi-eye-outline" />
          </IconBtn>

          <MoreBtn
            :menu-list="computedMoreList(item.raw.id)"
            item-props
          />
        </template>
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
