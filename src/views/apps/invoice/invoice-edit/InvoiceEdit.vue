<template>
  <v-row class="app-invoice-preview">
    <v-col
      cols="12"
      md="9"
    >
      <invoice-editable :data="invoiceData">
      </invoice-editable>
    </v-col>

    <!-- Right Column: Invoice Action -->
    <v-col
      cols="12"
      md="3"
    >
      <v-card class="mb-6">
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
            Preview
          </v-btn>
          <v-btn
            class="mb-3"
            color="secondary"
            block
            outlined
          >
            Save
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

      <v-select
        v-model="invoiceData.paymentMethod"
        outlined
        :items="paymentMethods"
        dense
        placeholder="Accept Payment Via"
        :menu-props="{ offsetY: true }"
        hide-details="auto"
        class="mb-6"
      ></v-select>

      <div class="d-flex align-center justify-space-between">
        <span>Payment Terms</span>
        <v-switch
          hide-details="auto"
          :input-value="true"
        ></v-switch>
      </div>

      <div class="d-flex align-center justify-space-between">
        <span>Client Notes</span>
        <v-switch
          hide-details="auto"
          :input-value="false"
        ></v-switch>
      </div>
      <div class="d-flex align-center justify-space-between">
        <span>Payment Stub</span>
        <v-switch
          hide-details="auto"
          :input-value="false"
        ></v-switch>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mdiSendOutline, mdiCurrencyUsd } from '@mdi/js'
import { ref, onUnmounted } from '@vue/composition-api'
import store from '@/store'
import router from '@/router'
import InvoiceEditable from '../InvoiceEditable.vue'
import invoiceStoreModule from '../invoiceStoreModule'

export default {
  components: {
    InvoiceEditable,
  },
  setup() {
    const INVOICE_APP_STORE_MODULE_NAME = 'app-invoice'

    // Register module
    if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) {
      store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
    })

    const invoiceData = ref({})

    store
      .dispatch('app-invoice/fetchInvoice', { id: router.currentRoute.params.id })
      .then(response => {
        invoiceData.value = {
          invoiceData: response.data.invoice,
          paymentDetails: response.data.paymentDetails,

          // ? We are adding some extra data in response for data purpose
          // * Your response will contain this extra data
          // ? [Purpose is to make it more API friendly and less static as possible]
          purchasedProducts: [
            {
              itemTitle: 'App Design',
              cost: 24,
              qty: 2,
              description: 'Designed UI kit & app pages.',
            },
          ],
          note: 'It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!',
          paymentMethod: 'Bank Account',
          salesperson: 'Tom Cook',
          thanksNote: 'Thanks for your business',
        }
      })
      .catch(error => {
        if (error.response.status === 404) {
          invoiceData.value = undefined
        }
      })

    const paymentMethods = ['Bank Account', 'PayPal', 'UPI Transfer']

    return {
      invoiceData,
      paymentMethods,

      // Icons
      icons: {
        mdiSendOutline,
        mdiCurrencyUsd,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/apps/invoice.scss';
</style>
