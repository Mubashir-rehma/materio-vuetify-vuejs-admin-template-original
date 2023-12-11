<script setup lang="ts">
import type { Invoice } from '@db/apps/invoice/types'

type invoiceStatus = 'Downloaded' | 'Draft' | 'Paid' | 'Sent' | 'Partial Payment' | 'Past Due' | null

const searchQuery = ref('')
const dateRange = ref('')
const selectedStatus = ref<invoiceStatus>(null)
const selectedRows = ref<string[]>([])

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

const widgetData = ref([
  { title: 'Clients', value: 24, icon: 'ri-user-line' },
  { title: 'Invoices', value: 165, icon: 'ri-clipboard-line' },
  { title: 'Paid', value: '$2.46k', icon: 'ri-money-dollar-circle-line' },
  { title: 'Unpaid', value: '$876', icon: 'ri-money-dollar-circle-line-off' },
])

// 👉 headers
const headers = [
  { title: '#ID', key: 'id' },
  { title: 'Trending', key: 'trending', sortable: false },
  { title: 'Client', key: 'client' },
  { title: 'Total', key: 'total' },
  { title: 'Date', key: 'date' },
  { title: 'Balance', key: 'balance' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const selectedDateRange = computed(() => {
  const [start, end] = dateRange.value ? dateRange.value.split('to') : ''

  return {
    start,
    end,
  }
})

// 👉 Fetch Invoices
const { data: invoiceData, execute: fetchInvoices } = await useApi<any>(createUrl('/apps/invoice', {
  query: {
    q: searchQuery,
    status: selectedStatus,
    selectedDateRange,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const invoices = computed((): Invoice[] => invoiceData.value.invoices)
const totalInvoices = computed(() => invoiceData.value.totalInvoices)

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
    return { variant: 'warning', icon: 'ri-line-chart-line' }
  if (status === 'Paid')
    return { variant: 'success', icon: 'ri-check-line' }
  if (status === 'Downloaded')
    return { variant: 'info', icon: 'ri-arrow-down-line' }
  if (status === 'Draft')
    return { variant: 'secondary', icon: 'ri-save-line' }
  if (status === 'Sent')
    return { variant: 'primary', icon: 'ri-mail-line' }
  if (status === 'Past Due')
    return { variant: 'error', icon: 'ri-error-warning-line' }

  return { variant: 'secondary', icon: 'ri-close-line' }
}

const computedMoreList = computed(() => {
  return (paramId: number) => ([
    { title: 'Download', value: 'download', prependIcon: 'ri-download-line' },
    {
      title: 'Edit',
      value: 'edit',
      prependIcon: 'ri-pencil-line',
      to: { name: 'apps-invoice-edit-id', params: { id: paramId } },
    },
    { title: 'Duplicate', value: 'duplicate', prependIcon: 'ri-stack-line' },
  ])
})

// 👉 Delete Invoice
const deleteInvoice = async (id: number) => {
  await $api(`/apps/invoice/${id}`, { method: 'DELETE' })

  fetchInvoices()
}
</script>

<template>
  <section v-if="invoices">
    <!-- 👉 Invoice Widgets -->
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
                  <span class="text-base text-capitalize">{{ data.title }}</span>
                </div>

                <VAvatar
                  color="rgba(var(--v-theme-on-background), var(--v-hover-opacity))"
                  rounded
                  class="text-high-emphasis"
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
            />
          </template>
        </VRow>
      </VCardText>
    </VCard>
    <!-- 👉 Invoice Filters  -->
    <VCard
      title="Filters"
      class="mb-6"
    >
      <VCardText>
        <VRow>
          <!-- 👉 Status filter -->
          <VCol
            cols="12"
            md="6"
          >
            <VSelect
              v-model="selectedStatus"
              label="Select Status"
              placeholder="Select Status"
              clearable
              clear-icon="ri-close-line"
              :items="['Downloaded', 'Draft', 'Sent', 'Paid', 'Partial Payment', 'Past Due']"
            />
          </VCol>

          <!-- 👉 DateRange filter -->
          <VCol
            cols="12"
            md="6"
          >
            <AppDateTimePicker
              v-model="dateRange"
              label="Invoice Date"
              clear-icon="ri-close-line"
              clearable
              :config="{ mode: 'range' }"
              placeholder="Select Date"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard id="invoice-list">
      <VCardText class="d-flex align-center flex-wrap gap-4">
        <!-- 👉 Actions  -->
        <div class="me-3">
          <VSelect
            label="Actions"
            placeholder="Select"
            :items="['Delete', 'Edit', 'Send']"
            class="invoice-list-actions"
            :disabled="!selectedRows.length"
          />
        </div>

        <VSpacer />

        <div class="d-flex align-center flex-wrap gap-4">
          <!-- 👉 Search  -->
          <div class="invoice-list-search">
            <VTextField
              v-model="searchQuery"
              placeholder="Search Invoice"
            />
          </div>

          <!-- 👉 Create invoice -->
          <VBtn
            prepend-icon="ri-add-line"
            :to="{ name: 'apps-invoice-add' }"
          >
            Create invoice
          </VBtn>
        </div>
      </VCardText>

      <VDivider />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        show-select
        :items-length="totalInvoices"
        :headers="headers"
        :items="invoices"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- Trending Header -->
        <template #header.trending>
          <VIcon
            size="22"
            icon="ri-pulse-line"
          />
        </template>

        <!-- id -->
        <template #item.id="{ item }">
          <RouterLink :to="{ name: 'apps-invoice-preview-id', params: { id: item.id } }">
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

        <!-- client -->
        <template #item.client="{ item }">
          <div class="d-flex align-center">
            <VAvatar
              size="34"
              :color="!item.avatar.length ? resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant : undefined"
              :variant="!item.avatar.length ? 'tonal' : undefined"
              class="me-3"
            >
              <VImg
                v-if="item.avatar.length"
                :src="item.avatar"
              />
              <span v-else>{{ avatarText(item.client.name) }}</span>
            </VAvatar>
            <div class="d-flex flex-column">
              <RouterLink
                :to="{ name: 'pages-user-profile-tab', params: { tab: 'profile' } }"
                class="client-title font-weight-medium mb-0"
              >
                {{ item.client.name }}
              </RouterLink>
              <span class="text-caption">{{ item.client.companyEmail }}</span>
            </div>
          </div>
        </template>

        <!-- Total -->
        <template #item.total="{ item }">
          ${{ item.total }}
        </template>

        <!-- Date -->
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
          <div class="text-no-wrap">
            <IconBtn @click="deleteInvoice(item.id)">
              <VIcon icon="ri-delete-bin-line" />
            </IconBtn>

            <IconBtn :to="{ name: 'apps-invoice-preview-id', params: { id: item.id } }">
              <VIcon icon="ri-eye-line" />
            </IconBtn>

            <MoreBtn
              :menu-list="computedMoreList(item.id)"
              item-props
            />
          </div>
        </template>
      </VDataTableServer>
      <!-- !SECTION -->
    </VCard>
  </section>
  <section v-else>
    <VCard>
      <VCardTitle>No Invoice Found</VCardTitle>
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

<style lang="scss" scoped>
.client-title{
  &:not(:hover){
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity)) !important;
  }
}
</style>
