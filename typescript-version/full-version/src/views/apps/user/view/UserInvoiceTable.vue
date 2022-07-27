<script setup lang="ts">
import type { Invoice } from '@/@fake-db/types'
import { useInvoiceStore } from '@/views/apps/invoice/useInvoiceStore'
import { avatarText } from '@core/utils/formatters'

// 👉 Store
const invoiceListStore = useInvoiceStore()

const searchQuery = ref('')
const selectedStatus = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalInvoices = ref(0)
const invoices = ref<Invoice[]>([])
const selectedRows = ref<string[]>([])

// 👉 Fetch Invoices
watchEffect(() => {
  invoiceListStore.fetchInvoices(
    {
      q: searchQuery.value,
      status: selectedStatus.value,
      perPage: rowPerPage.value,
      currentPage: currentPage.value,
    },
  ).then(response => {
    invoices.value = response.data.invoices
    totalPage.value = response.data.totalPage
    totalInvoices.value = response.data.totalInvoices
  }).catch(error => {
    console.log(error)
  })
})

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = invoices.value.length ? ((currentPage.value - 1) * rowPerPage.value) + 1 : 0
  const lastIndex = invoices.value.length + ((currentPage.value - 1) * rowPerPage.value)

  return `${firstIndex}-${lastIndex} of ${totalInvoices.value}`
})

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
    return { variant: 'success', icon: 'mdi-check-circle-outline' }
  if (status === 'Downloaded')
    return { variant: 'info', icon: 'mdi-download-circle-outline' }
  if (status === 'Draft')
    return { variant: 'secondary', icon: 'mdi-content-save-outline' }
  if (status === 'Sent')
    return { variant: 'primary', icon: 'mdi-email-outline' }
  if (status === 'Past Due')
    return { variant: 'error', icon: 'mdi-alert-circle-outline' }

  return { variant: 'secondary', icon: 'mdi-close' }
}
</script>

<template>
  <VCard
    v-if="invoices"
    id="invoice-list"
  >
    <VCardItem>
      <VCardTitle>Invoice List</VCardTitle>
      <template #append>
        <VBtn
          color="primary"
          append-icon="mdi-chevron-down"
        >
          Export
          <VMenu activator="parent">
            <VList>
              <VListItem
                v-for="(item, index) in ['PDF', 'XLSX', 'CSV']"
                :key="index"
                :value="index"
              >
                <VListItemTitle>{{ item }}</VListItemTitle>
              </VListItem>
            </VList>
          </VMenu>
        </VBtn>
      </template>
    </VCardItem>

    <VDivider />

    <!-- SECTION Table -->
    <VTable class="text-no-wrap invoice-list-table">
      <!-- 👉 Table head -->
      <thead>
        <tr>
          <th class="text-start">
            #ID
          </th>
          <th class="text-start">
            <VIcon icon="mdi-trending-up" />
          </th>
          <th class="text-start">
            CLIENT
          </th>
          <th class="text-start">
            TOTAL
          </th>
          <th class="text-start">
            ISSUED DATE
          </th>
          <th class="text-start">
            BALANCE
          </th>
          <th class="text-center">
            ACTIONS
          </th>
        </tr>
      </thead>

      <!-- 👉 Table Body -->
      <tbody>
        <tr
          v-for="invoice in invoices"
          :key="invoice.id"
        >
          <!-- 👉 Id -->
          <td>
            <RouterLink :to="{ name: 'invoice-preview-id', params: { id: invoice.id } }">
              #{{ invoice.id }}
            </RouterLink>
          </td>

          <!-- 👉 Trending -->
          <td>
            <VTooltip>
              <template #activator="{ props }">
                <VAvatar
                  :size="30"
                  v-bind="props"
                  :class="`v-avatar-light-bg text-${resolveInvoiceStatusVariantAndIcon(invoice.invoiceStatus).variant}`"
                >
                  <VIcon
                    :size="20"
                    :icon="resolveInvoiceStatusVariantAndIcon(invoice.invoiceStatus).icon"
                  />
                </VAvatar>
              </template>
              <p class="mb-0">
                {{ invoice.invoiceStatus }}
              </p>
              <p class="mb-0">
                Balance: {{ invoice.balance }}
              </p>
              <p class="mb-0">
                Due date: {{ invoice.dueDate }}
              </p>
            </VTooltip>
          </td>

          <!-- 👉 Client Avatar and Email -->
          <td>
            <div class="d-flex align-center">
              <VAvatar
                size="33"
                :class="`v-avatar-light-bg text-${resolveInvoiceStatusVariantAndIcon(invoice.invoiceStatus).variant} me-3`"
              >
                <VImg
                  v-if="invoice.avatar.length"
                  :src="invoice.avatar"
                />
                <span v-else>{{ avatarText(invoice.client.name) }}</span>
              </VAvatar>
              <div class="d-flex flex-column">
                <h6 class="text-sm font-weight-medium mb-0">
                  {{ invoice.client.name }}
                </h6>
                <span class="text-caption">{{ invoice.client.companyEmail }}</span>
              </div>
            </div>
          </td>

          <!-- 👉 total -->
          <td>${{ invoice.total }}</td>

          <!-- 👉 Date -->
          <td>{{ invoice.issuedDate }}</td>

          <!-- 👉 Balance -->
          <td>
            <VChip v-bind="resolveInvoiceBalanceVariant(invoice.balance, invoice.total).chip">
              {{ resolveInvoiceBalanceVariant(invoice.balance, invoice.total).status }}
            </VChip>
          </td>

          <!-- 👉 Actions -->
          <td class="text-center">
            <VBtn
              variant="text"
              color="secondary"
              icon
              size="small"
            >
              <VIcon
                icon="mdi-delete-outline"
                :size="20"
              />
            </VBtn>

            <VBtn
              variant="text"
              color="secondary"
              icon
              size="small"
              :to="{ name: 'invoice-preview-id', params: { id: invoice.id } }"
            >
              <VIcon
                :size="20"
                icon="mdi-eye-outline"
              />
            </VBtn>

            <VBtn
              icon
              variant="text"
              color="secondary"
              size="small"
            >
              <VIcon
                :size="20"
                icon="mdi-dots-vertical"
              />
              <VMenu activator="parent">
                <VList>
                  <VListItem value="#">
                    <VListItemIcon
                      size="20"
                      class="me-3"
                      icon="mdi-download-outline"
                    />
                    <VListItemTitle>Download</VListItemTitle>
                  </VListItem>

                  <VListItem :to="{ name: 'invoice-edit-id', params: { id: invoice.id } }">
                    <VListItemIcon
                      size="20"
                      class="me-3"
                      icon="mdi-pencil-outline"
                    />
                    <VListItemTitle>Edit</VListItemTitle>
                  </VListItem>
                  <VListItem value="#">
                    <VListItemIcon
                      size="20"
                      class="me-3"
                      icon="mdi-layers-outline"
                    />
                    <VListItemTitle>Duplicate</VListItemTitle>
                  </VListItem>
                </VList>
              </VMenu>
            </VBtn>
          </td>
        </tr>
      </tbody>

      <!-- 👉 table footer  -->
      <tfoot v-show="!invoices.length">
        <tr>
          <td
            colspan="8"
            class="text-center text-body-1"
          >
            No data available
          </td>
        </tr>
      </tfoot>
    </VTable>
    <!-- !SECTION -->

    <VDivider />

    <!-- SECTION Pagination -->
    <VCardText class="d-flex flex-wrap justify-end justify-sm-space-between gap-4 pa-2">
      <!-- 👉 Rows per page -->
      <div
        class="d-flex align-center mx-3"
        style="width: 175px;"
      >
        <span class="text-no-wrap me-3">Rows per page:</span>

        <VSelect
          v-model="rowPerPage"
          variant="underlined"
          :items="[10, 20, 30, 50]"
        />
      </div>

      <!-- 👉 Pagination and pagination meta -->
      <div class="d-flex align-center">
        <span>{{ paginationData }}</span>

        <VPagination
          v-model="currentPage"
          size="x-small"
          :total-visible="1"
          :length="totalPage"
          @next="selectedRows = []"
          @prev="selectedRows = []"
        />
      </div>
    </VCardText>
  <!-- !SECTION -->
  </VCard>
</template>

<style lang="scss">
#invoice-list {
  .invoice-list-status {
    inline-size: 15rem;
  }

  .invoice-list-search {
    inline-size: 12rem;
  }
}
</style>
