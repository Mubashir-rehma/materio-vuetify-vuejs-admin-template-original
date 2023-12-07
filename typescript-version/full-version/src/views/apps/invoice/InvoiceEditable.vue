<script setup lang="ts">
import InvoiceProductEdit from './InvoiceProductEdit.vue'
import type { InvoiceData, PurchasedProduct } from './types'
import type { Client } from '@db/apps/invoice/types'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

interface Props {
  data: InvoiceData
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'push', value: PurchasedProduct): void
  (e: 'remove', id: number): void
}>()

const invoice = ref(props.data.invoice)
const salesperson = ref(props.data.salesperson)
const thanksNote = ref(props.data.thanksNote)
const note = ref(props.data.note)

// 👉 Clients
const clients = ref<Client[]>([])

// 👉 fetchClients
const fetchClients = async () => {
  const { data, error } = await useApi<any>('/apps/invoice/clients')

  if (error.value)
    console.log(error.value)
  else
    clients.value = data.value
}

fetchClients()

// 👉 Add item function
const addItem = () => {
  emit('push', {
    title: 'App Design',
    cost: 24,
    hours: 1,
    description: 'Designed UI kit & app pages.',
  })
}

// 👉 Remove Product edit section
const removeProduct = (id: number) => {
  emit('remove', id)
}
</script>

<template>
  <VCard>
    <!-- SECTION Header -->

    <VCardText class="d-flex flex-wrap justify-space-between gap-y-5 flex-column flex-sm-row">
      <!-- 👉 Left Content -->
      <div class="mb-6">
        <div class="d-flex align-center mb-6">
          <!-- 👉 Logo -->
          <VNodeRenderer
            :nodes="themeConfig.app.logo"
            class="me-3"
          />

          <!-- 👉 Title -->
          <h6 class="font-weight-medium text-xl text-uppercase">
            {{ themeConfig.app.title }}
          </h6>
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
        <h6 class="d-flex align-center font-weight-medium justify-sm-end text-xl mb-3">
          <span
            class="me-3"
            style="inline-size: 6rem;"
          >Invoice:</span>
          <span>
            <VTextField
              v-model="invoice.id"
              disabled
              prefix="#"
              density="compact"
              style="inline-size: 9.5rem;"
            />
          </span>
        </h6>

        <!-- 👉 Issue Date -->
        <div class="d-flex align-center justify-sm-end mb-3">
          <span
            class="me-3"
            style="inline-size: 6rem;"
          >Date Issued:</span>

          <span style="inline-size: 9.5rem;">
            <AppDateTimePicker
              v-model="invoice.issuedDate"
              density="compact"
              placeholder="YYYY-MM-DD"
              :config="{ position: 'auto right' }"
            />
          </span>
        </div>

        <!-- 👉 Due Date -->
        <div class="d-flex align-center justify-sm-end mb-0">
          <span
            class="me-3"
            style="inline-size: 6rem;"
          >Due Date:</span>
          <span style="min-inline-size: 9.5rem;">
            <AppDateTimePicker
              v-model="invoice.dueDate"
              density="compact"
              placeholder="YYYY-MM-DD"
              :config="{ position: 'auto right' }"
            />
          </span>
        </div>
      </div>
    </VCardText>
    <!-- !SECTION -->

    <VDivider class="mb-2" />

    <VCardText class="d-flex flex-wrap justify-space-between flex-column flex-sm-row gap-y-5">
      <div
        class="mb-4 mb-sm-0"
        style="inline-size: 15.5rem;"
      >
        <h6 class="text-sm font-weight-medium mb-3">
          Invoice To:
        </h6>

        <VSelect
          v-model="invoice.client"
          :items="clients"
          item-title="name"
          item-value="name"
          placeholder="Select Client"
          return-object
          class="mb-6"
          density="compact"
        />
        <p class="mb-1">
          {{ invoice.client.name }}
        </p>
        <p class="mb-1">
          {{ invoice.client.company }}
        </p>
        <p
          v-if="invoice.client.address"
          class="mb-1"
        >
          {{ invoice.client.address }}, {{ invoice.client.country }}
        </p>
        <p class="mb-1">
          {{ invoice.client.contact }}
        </p>
        <p class="mb-1">
          {{ invoice.client.companyEmail }}
        </p>
      </div>

      <div>
        <h6 class="text-sm font-weight-medium mb-3">
          Bill To:
        </h6>

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
        prepend-icon="ri-add-line"
        @click="addItem"
      >
        Add Item
      </VBtn>
    </VCardText>

    <VDivider class="my-2" />

    <!-- 👉 Total Amount -->
    <VCardText class="d-flex justify-space-between flex-wrap flex-column flex-sm-row">
      <div class="mb-6 mb-sm-0">
        <div class="d-flex align-center mb-4">
          <h6 class="text-sm font-weight-medium me-2">
            Salesperson:
          </h6>
          <VTextField
            v-model="salesperson"
            style="inline-size: 8rem;"
            placeholder="John Doe"
          />
        </div>

        <VTextField
          v-model="thanksNote"
          placeholder="Thanks for your business"
        />
      </div>

      <div>
        <table class="w-100">
          <tbody>
            <tr>
              <td class="pe-16">
                Subtotal:
              </td>
              <td :class="$vuetify.locale.isRtl ? 'text-start' : 'text-end'">
                <h6 class="text-sm">
                  $1800
                </h6>
              </td>
            </tr>
            <tr>
              <td class="pe-16">
                Discount:
              </td>
              <td :class="$vuetify.locale.isRtl ? 'text-start' : 'text-end'">
                <h6 class="text-sm">
                  $28
                </h6>
              </td>
            </tr>
            <tr>
              <td class="pe-16">
                Tax:
              </td>
              <td :class="$vuetify.locale.isRtl ? 'text-start' : 'text-end'">
                <h6 class="text-sm">
                  21%
                </h6>
              </td>
            </tr>
          </tbody>
        </table>

        <VDivider class="mt-4 mb-3" />

        <table class="w-100">
          <tbody>
            <tr>
              <td class="pe-16">
                Total:
              </td>
              <td :class="$vuetify.locale.isRtl ? 'text-start' : 'text-end'">
                <h6 class="text-sm">
                  $1690
                </h6>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </VCardText>

    <VDivider class="mt-2" />

    <VCardText>
      <p class="font-weight-medium mb-2">
        Note:
      </p>
      <VTextarea
        v-model="note"
        placeholder="Write note here..."
        :rows="2"
      />
    </VCardText>
  </VCard>
</template>
