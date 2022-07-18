<script setup lang="ts">
import type { Invoice } from '@/@fake-db/types'
import { useInvoiceStore } from '@/views/apps/invoice/useInvoiceStore'
import { avatarText } from '@core/utils/formatters'

// 👉 Store
const invoiceListStore = useInvoiceStore()

const searchQuery = ref('')
const dateRange = ref('')
const selectedStatus = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalInvoices = ref(0)
const invoices = ref<Invoice[]>([])
const selectedRows = ref<string[]>([])
const selectAllInvoice = ref(false)

// 👉 Fetch Invoices
watchEffect(() => {
  const [start, end] = dateRange.value ? dateRange.value.split('to') : ''
  invoiceListStore.fetchInvoices(
    {
      q: searchQuery.value,
      status: selectedStatus.value,
      perPage: rowPerPage.value,
      currentPage: currentPage.value,
      startDate: start,
      endDate: end,
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

// 👉 Add/Remove all checkbox ids in/from array
const selectUnselectAll = () => {
  selectAllInvoice.value = !selectAllInvoice.value
  if (selectAllInvoice.value) {
    invoices.value.forEach(invoice => {
      if (!selectedRows.value.includes(`check${invoice.id}`))
        selectedRows.value.push(`check${invoice.id}`)
    })
  }
  else {
    selectedRows.value = []
  }
}

// 👉 watch if checkbox array is empty all checkbox should be uncheck
watch(selectedRows, () => {
  if (!selectedRows.value.length)
    selectAllInvoice.value = false
}, { deep: true })

// 👉 Add/Remove individual checkbox in/from array
const addRemoveIndividualCheckbox = (checkID: string) => {
  if (selectedRows.value.includes(checkID)) {
    const index = selectedRows.value.indexOf(checkID)
    selectedRows.value.splice(index, 1)
  }
  else {
    selectedRows.value.push(checkID)
    selectAllInvoice.value = true
  }
}
</script>

<template>
  <section v-if="invoices">
    <!-- 👉 Invoice Filters  -->
    <VCard class="mb-6">
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
              clearable
              :items="['Downloaded', 'Draft', 'Paid', 'Partial Payment', 'Past Due']"
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
              clearable
              :config="{ mode: 'range' }"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard id="invoice-list">
      <VCardText class="d-flex align-center">
        <!-- 👉 Actions  -->
        <div class="me-3">
          <VSelect
            density="compact"
            label="Actions"
            :items="['Delete', 'Edit', 'Send']"
            class="invoice-list-actions"
            :disabled="!selectedRows.length"
          />
        </div>

        <VSpacer />

        <!-- 👉 Search  -->
        <div class="invoice-list-search">
          <VTextField
            v-model="searchQuery"
            placeholder="Search Invoice"
            density="compact"
            class="me-3"
          />
        </div>

        <!-- 👉 Create invoice -->
        <VBtn
          prepend-icon="mdi-plus"
          :to="{ name: 'invoice-add' }"
        >
          Create invoice
        </VBtn>
      </VCardText>

      <VDivider />

      <!-- SECTION Table -->
      <VTable class="text-no-wrap invoice-list-table">
        <!-- 👉 Table head -->
        <thead>
          <tr>
            <!-- 👉 Check/Uncheck all checkbox -->
            <th class="text-start">
              <VCheckbox
                :model-value="selectAllInvoice"
                :indeterminate="(invoices.length !== selectedRows.length) && !!selectedRows.length"
                @click="selectUnselectAll"
              />
            </th>
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
              DATE
            </th>
            <th class="text-start">
              BALANCE
            </th>
            <th class="text-start">
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
            <!-- 👉 Individual checkbox -->
            <td>
              <div style="width: 1.875rem;">
                <VCheckbox
                  :id="`check${invoice.id}`"
                  :model-value="selectedRows.includes(`check${invoice.id}`)"
                  @click="addRemoveIndividualCheckbox(`check${invoice.id}`)"
                />
              </div>
            </td>

            <!-- 👉 Id -->
            <td>
              <RouterLink :to="{ name: 'invoice-preview-id', params: { id: invoice.id } }">
                #{{ invoice.id }}
              </RouterLink>
            </td>

            <!-- 👉 Trending -->
            <td>
              <VAvatar
                :size="30"
                :class="`v-avatar-light-bg text-${resolveInvoiceStatusVariantAndIcon(invoice.invoiceStatus).variant}`"
              >
                <VIcon
                  :size="20"
                  :icon="resolveInvoiceStatusVariantAndIcon(invoice.invoiceStatus).icon"
                />
              </VAvatar>
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
                  <p class="font-weight-semibold mb-0">
                    {{ invoice.client.name }}
                  </p>
                  <span class="text-caption">{{ invoice.client.companyEmail }}</span>
                </div>
              </div>
            </td>

            <!-- 👉 total -->
            <td>{{ invoice.total }}</td>

            <!-- 👉 Date -->
            <td>{{ invoice.issuedDate }}</td>

            <!-- 👉 Balance -->
            <td>
              <VChip v-bind="resolveInvoiceBalanceVariant(invoice.balance, invoice.total).chip">
                {{ resolveInvoiceBalanceVariant(invoice.balance, invoice.total).status }}
              </VChip>
            </td>

            <!-- 👉 Actions -->
            <td>
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
      <VCardText class="d-flex flex-wrap justify-end gap-4">
        <!-- 👉 Rows per page -->
        <div
          class="d-flex align-center me-3"
          style="width: 160px;"
        >
          <span class="text-no-wrap me-3">Rows per page:</span>
          <VSelect
            v-model="rowPerPage"
            density="compact"
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
