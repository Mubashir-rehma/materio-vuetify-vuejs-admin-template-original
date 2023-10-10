<script setup lang="ts">
import { VDataTableServer } from 'vuetify/labs/VDataTable';

const searchQuery = ref('')
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

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
const { data: invoiceData, execute: fetchInvoices } = await useApi<any>(createUrl('/apps/invoice', {
  query: {
    q: searchQuery,
    status: selectedStatus,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const invoices = computed(() => invoiceData.value?.invoices)
const totalInvoices = computed(() => invoiceData.value?.totalInvoices)

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
// 👉 Delete Invoice
const deleteInvoice = async (id: number) => {
  await $api(`/apps/invoice/${id}`, { method: 'DELETE' })

  fetchInvoices()
}
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
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :loading="isLoading"
        :items-length="totalInvoices"
        :headers="headers"
        :items="invoices"
        class="text-no-wrap text-sm rounded-0"
        @update:options="updateOptions"
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
            #{{ item.id }}
          </RouterLink>
        </template>

        <!-- trending -->
        <template #item.trending="{ item }">
          <VTooltip>
            <template #activator="{ props }">
              <VAvatar
                :size="34"
                v-bind="props"
                :color="resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant"
                variant="tonal"
              >
                <VIcon
                  :size="20"
                  :icon="resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon"
                />
              </VAvatar>
            </template>
            <p class="mb-0">
              {{ item.invoiceStatus }}
            </p>
            <p class="mb-0">
              Balance: {{ item.balance }}
            </p>
            <p class="mb-0">
              Due date: {{ item.dueDate }}
            </p>
          </VTooltip>
        </template>

        <!-- Total -->
        <template #item.total="{ item }">
          ${{ item.total }}
        </template>

        <!-- issued Date -->
        <template #item.date="{ item }">
          {{ item.issuedDate }}
        </template>

        <!-- Balance -->
        <template #item.balance="{ item }">
          <VChip
            v-if="typeof ((resolveInvoiceBalanceVariant(item.balance, item.total)).status) === 'string'"
            :color="resolveInvoiceBalanceVariant(item.balance, item.total).chip.color"
          >
            {{ (resolveInvoiceBalanceVariant(item.balance, item.total)).status }}
          </VChip>
          <span
            v-else
            class="text-sm text-high-emphasis"
          >
            {{ Number((resolveInvoiceBalanceVariant(item.balance, item.total)).status) > 0 ? `$${(resolveInvoiceBalanceVariant(item.balance, item.total)).status}` : `-$${Math.abs(Number((resolveInvoiceBalanceVariant(item.balance, item.total)).status))}` }}
          </span>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn @click="deleteInvoice(item.id)">
            <VIcon icon="mdi-delete-outline" />
          </IconBtn>

          <IconBtn :to="{ name: 'apps-invoice-preview-id', params: { id: item.id } }">
            <VIcon icon="mdi-eye-outline" />
          </IconBtn>

          <MoreBtn
            :menu-list="computedMoreList(item.id)"
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
