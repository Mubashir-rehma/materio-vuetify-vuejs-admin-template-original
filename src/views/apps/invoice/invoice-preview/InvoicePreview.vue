<template>
  <v-row class="app-invoice-preview">
    <v-col
      cols="12"
      md="9"
    >
      <v-card v-if="invoiceData">
        <!-- Header -->
        <v-card-text class="py-9 px-8">
          <div class="invoice-header d-flex flex-wrap justify-space-between">
            <!-- Left Content -->
            <div>
              <div class="d-flex align-center mb-6">
                <v-img
                  :src="appLogo"
                  max-height="30px"
                  max-width="30px"
                  alt="logo"
                  contain
                  class="mr-3 "
                ></v-img>
                <span class="text--primary font-weight-bold text-xl">
                  {{ appName }}
                </span>
              </div>
              <span class="d-block">Office 149, 450 South Brand Brooklyn</span>
              <span class="d-block">San Diego County, CA 91905, USA</span>
              <span class="d-block">+1 (123) 456 7891, +44 (876) 543 2198</span>
            </div>
            <!-- Right Content -->
            <div>
              <p class="font-weight-medium text-xl text--primary mb-4">
                Invoice #{{ invoiceData.id }}
              </p>
              <p class="mb-2">
                <span>Date Issued: </span>
                <span class="font-weight-semibold">{{ invoiceData.issuedDate }}</span>
              </p>
              <p class="mb-2">
                <span>Date Due: </span>
                <span class="font-weight-semibold">{{ invoiceData.dueDate }}</span>
              </p>
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <!-- Payment Details -->
        <v-card-text class="py-9 px-8">
          <div class="d-flex justify-space-between flex-wrap">
            <div>
              <p class="font-weight-semibold payment-details-header">
                Invoice To:
              </p>
              <p class="mb-1">
                {{ invoiceData.client.name }}
              </p>
              <p class="mb-1">
                {{ invoiceData.client.company }}
              </p>
              <p class="mb-1">
                {{ invoiceData.client.address }}, {{ invoiceData.client.country }}
              </p>
              <p class="mb-1">
                {{ invoiceData.client.contact }}
              </p>
              <p class="mb-0">
                {{ invoiceData.client.companyEmail }}
              </p>
            </div>
            <div>
              <p class="font-weight-semibold payment-details-header">
                Bill To:
              </p>
              <table>
                <tr>
                  <td class="pe-6">
                    Total Due:
                  </td>
                  <td>
                    {{ paymentDetails.totalDue }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    Bank Name:
                  </td>
                  <td>
                    {{ paymentDetails.bankName }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    Country:
                  </td>
                  <td>
                    {{ paymentDetails.country }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    IBAN:
                  </td>
                  <td>
                    {{ paymentDetails.iban }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    SWIFT Code:
                  </td>
                  <td>
                    {{ paymentDetails.swiftCode }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </v-card-text>

        <!-- Table -->
        <v-simple-table class="purchased-items-table">
          <template v-slot:default>
            <thead>
              <tr>
                <th>
                  ITEM
                </th>
                <th>
                  DESCRIPTION
                </th>
                <th>
                  COST
                </th>
                <th>
                  QTY
                </th>
                <th>
                  PRICE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in purchasedProducts"
                :key="item.name"
              >
                <td>{{ item.name }}</td>
                <td>
                  {{ item.description }}
                </td>
                <td>
                  {{ item.cost }}
                </td>
                <td>
                  {{ item.qty }}
                </td>
                <td class="text-center">
                  {{ item.price }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <!-- Total -->
        <v-card-text class="py-9 px-8">
          <div class="d-flex justify-space-between">
            <div>
              <p class="mb-1">
                <span class="font-weight-semibold">Salesperson:</span> <span>Jenny Parker</span>
              </p>
              <p>Thanks for your business</p>
            </div>
            <div>
              <table>
                <tr>
                  <td class="pr-16">
                    Subtotal:
                  </td>
                  <th :class="$vuetify.rtl ? 'text-left' : 'text-right'">
                    $1800
                  </th>
                </tr>
                <tr>
                  <td class="pr-16">
                    Discount:
                  </td>
                  <th :class="$vuetify.rtl ? 'text-left' : 'text-right'">
                    $28
                  </th>
                </tr>
                <tr>
                  <td class="pr-16">
                    Tax:
                  </td>
                  <th :class="$vuetify.rtl ? 'text-left' : 'text-right'">
                    21%
                  </th>
                </tr>
              </table>
              <v-divider class="mt-4 mb-3"></v-divider>
              <table class="w-full">
                <tr>
                  <td class="pr-16">
                    Total:
                  </td>
                  <th :class="$vuetify.rtl ? 'text-left' : 'text-right'">
                    $1690
                  </th>
                </tr>
              </table>
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="px-8 py-6">
          <p class="mb-0">
            <span class="font-weight-semibold">Note: </span>
            <span>It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!</span>
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Right Column: Invoice Action -->
    <v-col
      cols="12"
      md="3"
    >
      <v-card>
        <v-card-text class="pt-5">
          <v-btn
            color="primary"
            class="mb-3"
            block
          >
            <v-icon
              class="mr-2"
              left
            >
              {{ icons.mdiSendOutline }}
            </v-icon>
            <span>Send Invoice</span>
          </v-btn>
          <v-btn
            class="mb-3"
            color="secondary"
            block
            outlined
          >
            Download
          </v-btn>
          <v-btn
            class="mb-3"
            color="secondary"
            block
            outlined
            @click="printInvoice"
          >
            Print
          </v-btn>
          <v-btn
            class="mb-3"
            color="secondary"
            block
            outlined
          >
            Edit Invoice
          </v-btn>
          <v-btn
            color="success"
            block
          >
            <v-icon
              class="mr-2"
              left
            >
              {{ icons.mdiCurrencyUsd }}
            </v-icon>
            <span>Add Payment</span>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { ref, onUnmounted } from '@vue/composition-api'
import store from '@/store'
import router from '@/router'
import { mdiSendOutline, mdiCurrencyUsd } from '@mdi/js'

import themeConfig from '@themeConfig'
import invoiceStoreModule from '../invoiceStoreModule'

// Local Components
// import Logo from '@core/layouts/components/Logo.vue'
// import InvoiceSidebarSendInvoice from '../InvoiceSidebarSendInvoice.vue'
// import InvoiceSidebarAddPayment from '../InvoiceSidebarAddPayment.vue'

export default {
  components: {
    // Logo,
    // InvoiceSidebarAddPayment,
    // InvoiceSidebarSendInvoice,
  },
  setup() {
    const invoiceData = ref(null)
    const paymentDetails = ref({})

    // Invoice Description
    // ? Your real data will contain this information
    const purchasedProducts = [
      {
        name: 'Vuexy Admin Template',
        description: 'HTML admin template',
        cost: 98,
        qty: 1,
        price: 32,
      },
      {
        name: 'Frest Admin Templatecream sandwich',
        description: 'Angular Admin Template',
        cost: 49,
        qty: 1,
        price: 28,
      },
      {
        name: 'Apex Admin Template',
        description: 'HTML Admin Template',
        cost: 30,
        qty: 1,
        price: 24,
      },
      {
        name: 'Robust Admin Template',
        description: 'React Admin Template',
        cost: 12,
        qty: 1,
        price: 22,
      },
    ]

    // ————————————————————————————————————
    //* ——— Store Registration
    // ————————————————————————————————————

    const INVOICE_APP_STORE_MODULE_NAME = 'app-invoice'

    // Register module
    if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) {
      store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
    })

    // ————————————————————————————————————
    //* ——— Invoice
    // ————————————————————————————————————

    store
      .dispatch('app-invoice/fetchInvoice', { id: router.currentRoute.params.id })
      .then(response => {
        invoiceData.value = response.data.invoice
        paymentDetails.value = response.data.paymentDetails

        // TODO: Remove console log
        console.log('response.data.invoice')
        console.log(JSON.stringify(response.data.invoice, null, 2))
        console.log('------------')
        console.log('response.data.paymentDetails')
        console.log(JSON.stringify(response.data.paymentDetails, null, 2))
      })
      .catch(error => {
        if (error.response.status === 404) {
          invoiceData.value = undefined
        }
      })

    const printInvoice = () => {
      window.print()
    }

    return {
      invoiceData,
      paymentDetails,
      purchasedProducts,

      // invoiceDescription,
      printInvoice,

      // themeConfig
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,

      icons: {
        mdiSendOutline,
        mdiCurrencyUsd,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';
@import '~@core/preset/preset/mixins.scss';

.app-invoice-preview {
  .payment-details-header {
    margin-bottom: 0.813rem;
  }

  .purchased-items-table {
    th {
      background-color: transparent !important;
    }

    @at-root {
      @include theme--child(v-data-table) using ($material) {
        &.purchased-items-table {
          > .v-data-table__wrapper > table > tbody > tr:last-child > td:not(.v-data-table__mobile-row),
          > .v-data-table__wrapper > table > tbody > tr:last-child > th:not(.v-data-table__mobile-row) {
            border-bottom: thin solid rgba(map-deep-get($material, 'primary-shade'), 0.14);
          }
        }
      }
    }
  }
}

@media print {
  .v-application {
    background: none !important;
  }

  .app-navigation-menu,
  .v-app-bar,
  .v-footer,
  .app-invoice-preview.row .col-12:last-child {
    display: none !important;
  }

  .app-invoice-preview.row .col-12:first-child {
    max-width: 100% !important;
    flex: 1 !important;
  }

  .v-main,
  .app-content-container {
    padding: 0px !important;
  }

  .v-card {
    box-shadow: none !important;
  }
}
</style>
