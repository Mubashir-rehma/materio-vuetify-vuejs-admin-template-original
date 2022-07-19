<script setup lang="ts">
import InvoiceProductEdit from './InvoiceProductEdit.vue'
import type { InvoiceData } from './types'
import { useInvoiceStore } from './useInvoiceStore'
import { themeConfig } from '@themeConfig'
import type { Client } from '@/@fake-db/types'

interface Props {
  data: InvoiceData
}

const props = defineProps<Props>()

const invoiceListStore = useInvoiceStore()

// 👉 Clients
const clients = ref<Client[]>([])

// 👉 fetchClients
invoiceListStore.fetchClients().then(response => {
  clients.value = response.data
}).catch(err => {
  console.log(err)
})

// 👉 Add item function
const addItem = () => {
  // eslint-disable-next-line vue/no-mutating-props
  props.data.purchasedProducts.push({
    title: 'App Design',
    cost: 24,
    hours: 1,
    description: 'Designed UI kit & app pages.',
  })
}

// 👉 Remove Product edit section
const removeProduct = (id: number) => {
  // eslint-disable-next-line vue/no-mutating-props
  props.data.purchasedProducts.splice(id, 1)
}
</script>

<template>
  <VCard>
    <!-- SECTION Header -->
    <!--  eslint-disable vue/no-mutating-props -->
    <VCardText class="d-flex flex-wrap justify-space-between flex-column flex-sm-row">
      <!-- 👉 Left Content -->
      <div class="mb-6">
        <div class="d-flex align-center mb-6">
          <!-- 👉 Logo -->
          <div
            class="text-primary me-3"
            v-html="themeConfig.app.logo"
          />

          <!-- 👉 Title -->
          <span class="font-weight-bold text-xl text-uppercase">
            {{ themeConfig.app.title }}
          </span>
        </div>

        <!-- 👉 Address -->
        <p class="mb-0">
          Office 149, 450 South Brand Brooklyn
        </p>
        <p class="mb-0">
          San Diego County, CA 91905, USA
        </p>
        <p class="mb-0">
          +1 (123) 456 7891, +44 (876) 543 2198
        </p>
      </div>

      <!-- 👉 Right Content -->
      <div class="mb-3">
        <!-- 👉 Invoice Id -->
        <p class="d-flex align-center font-weight-medium justify-sm-end text-xl mb-3">
          <span class="me-3">Invoice:</span>
          <span>
            <VTextField
              v-model="props.data.invoice.id"
              disabled
              prefix="#"
              density="compact"
              style="width: 8rem;"
            />
          </span>
        </p>

        <!-- 👉 Issue Date -->
        <p class="d-flex align-center justify-sm-end mb-3">
          <span class="me-3">Date Issued:</span>
          <span>
            <AppDateTimePicker
              v-model="props.data.invoice.issuedDate"
              density="compact"
              style="width: 8rem;"
            />
          </span>
        </p>

        <!-- 👉 Due Date -->
        <p class="d-flex align-center justify-sm-end mb-0">
          <span class="me-3">Due Date:</span>
          <span>
            <AppDateTimePicker
              v-model="props.data.invoice.dueDate"
              density="compact"
              style="width: 8rem;"
            />
          </span>
        </p>
      </div>
    </VCardText>
    <!-- !SECTION -->

    <VDivider class="mb-2" />

    <VCardText class="d-flex flex-wrap justify-space-between flex-column flex-sm-row">
      <div
        class="mb-4 mb-sm-0"
        style="width: 15.5rem;"
      >
        <p class="font-weight-medium">
          Invoice To:
        </p>

        <VSelect
          v-model="props.data.invoice.client"
          :items="clients"
          item-title="name"
          item-value="name"
          placeholder="Select Customer"
          return-object
          class="mb-6"
          density="compact"
        />
        <p class="mb-1">
          {{ props.data.invoice.client.name }}
        </p>
        <p class="mb-1">
          {{ props.data.invoice.client.company }}
        </p>
        <p
          v-if="props.data.invoice.client.address"
          class="mb-1"
        >
          {{ props.data.invoice.client.address }}, {{ props.data.invoice.client.country }}
        </p>
        <p class="mb-1">
          {{ props.data.invoice.client.contact }}
        </p>
        <p class="mb-1">
          {{ props.data.invoice.client.companyEmail }}
        </p>
      </div>

      <div>
        <p class="font-weight-medium">
          Bill To:
        </p>
        <table>
          <tbody>
            <tr>
              <td class="pe-6">
                Total Due:
              </td>
              <td>{{ props.data.paymentDetails.totalDue }}</td>
            </tr>
            <tr>
              <td class="pe-6">
                Bank Name:
              </td>
              <td>{{ props.data.paymentDetails.bankName }}</td>
            </tr>
            <tr>
              <td class="pe-6">
                Country:
              </td>
              <td>{{ props.data.paymentDetails.country }}</td>
            </tr>
            <tr>
              <td class="pe-6">
                IBAN:
              </td>
              <td>{{ props.data.paymentDetails.iban }}</td>
            </tr>
            <tr>
              <td class="pe-6">
                SWIFT Code:
              </td>
              <td>{{ props.data.paymentDetails.swiftCode }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </VCardText>

    <VDivider />

    <!-- 👉 Add purchased products -->
    <VCardText class="add-products-form">
      <div
        v-for="(product, index) in props.data.purchasedProducts"
        :key="product.title"
        class="mb-4"
      >
        <InvoiceProductEdit
          :id="index"
          :data="product"
          @remove-product="removeProduct"
        />
      </div>

      <VBtn
        size="small"
        prepend-icon="mdi-plus"
        @click="addItem"
      >
        Add Item
      </VBtn>
    </VCardText>

    <VDivider />

    <!-- 👉 Total Amount -->
    <VCardText class="d-flex justify-space-between flex-wrap flex-column flex-sm-row">
      <div class="mb-6 mb-sm-0">
        <div class="d-flex align-center mb-4">
          <span class="font-weight-semibold me-2">Salesperson:</span>
          <VTextField
            v-model="props.data.salesperson"
            style="width: 8rem;"
          />
        </div>

        <VTextField
          v-model="props.data.thanksNote"
          placeholder="Thanks for your business"
        />
      </div>

      <div>
        <table class="w-100">
          <tr>
            <td class="pe-16">
              Subtotal:
            </td>
            <th :class="$vuetify.rtl.isRtl ? 'text-start' : 'text-end'">
              $1800
            </th>
          </tr>
          <tr>
            <td class="pe-16">
              Discount:
            </td>
            <th :class="$vuetify.rtl.isRtl ? 'text-start' : 'text-end'">
              $28
            </th>
          </tr>
          <tr>
            <td class="pe-16">
              Tax:
            </td>
            <th :class="$vuetify.rtl.isRtl ? 'text-start' : 'text-end'">
              21%
            </th>
          </tr>
        </table>

        <VDivider class="mt-4 mb-3" />

        <table class="w-100">
          <tr>
            <td>Total:</td>
            <th :class="$vuetify.rtl.isRtl ? 'text-start' : 'text-end'">
              $1690
            </th>
          </tr>
        </table>
      </div>
    </VCardText>

    <VDivider />

    <VCardText>
      <p class="font-weight-semibold mb-2">
        Note:
      </p>
      <VTextarea
        v-model="props.data.note"
        :rows="2"
        auto-grow
      />
    </VCardText>
  </VCard>
</template>
