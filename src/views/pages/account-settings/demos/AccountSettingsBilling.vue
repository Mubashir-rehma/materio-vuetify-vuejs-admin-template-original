<template>
  <v-card
    flat
    class="pa-3"
  >
    <v-card-text>
      <v-form class="multi-col-validation">
        <v-row>
          <v-col
            cols="12"
            md="8"
            sm="6"
          >
            <v-row>
              <v-col cols="12">
                <span class="text-xs">Payment Method</span>
                <v-radio-group
                  v-model="selectedPaymentMethod"
                  row
                  hide-details
                  class="mt-2"
                >
                  <v-radio
                    value="credit-debit-atm-card"
                    label="Credit/Debit/ATM Card"
                  ></v-radio>
                  <v-radio
                    value="cod-cheque"
                    label="COD/Cheque"
                  ></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Name"
                  value="john Doe"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Card Number"
                  value="13563 21565 48789"
                  outlined
                >
                </v-text-field>
              </v-col>

              <v-col
                cols="6"
                md="4"
              >
                <v-text-field
                  label="Expiry Date"
                  value="0524"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col
                cols="6"
                md="4"
              >
                <v-text-field
                  type="password"
                  label="CVV Code"
                  value="0524"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>

          <v-col
            cols="12"
            md="4"
            sm="6"
          >
            <v-card outlined>
              <v-card-text>
                <v-checkbox
                  v-model="currentPlan"
                  class="mt-0"
                >
                  <template #label>
                    <h3 class="text-xl font-weight-semibold">
                      Your Current Plan
                    </h3>
                  </template>
                </v-checkbox>

                <v-chip
                  small
                  color="primary"
                  class="v-chip-light-bg primary--text font-weight-semibold"
                >
                  Basic Plan
                </v-chip>

                <v-list dense>
                  <v-list-item>
                    <v-icon size="20">
                      {{ icons.mdiAccountOutline }}
                    </v-icon>
                    <span class="ms-2">5 Users</span>
                  </v-list-item>
                  <v-list-item>
                    <v-icon size="20">
                      {{ icons.mdiCloudOutline }}
                    </v-icon>
                    <span class="ms-2">10 GB storage</span>
                  </v-list-item>
                  <v-list-item>
                    <v-icon size="20">
                      {{ icons.mdiHelpCircleOutline }}
                    </v-icon>
                    <span class="ms-2">Basic Support</span>
                  </v-list-item>
                </v-list>

                <v-btn
                  color="primary"
                  block
                  class="mt-2"
                >
                  Upgrade Plan
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-btn
              color="primary"
              class="me-3 mt-3"
            >
              Save changes
            </v-btn>
            <v-btn
              color="secondary"
              outlined
              class="mt-3"
            >
              Cancel
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiAccountOutline, mdiCloudOutline, mdiHelpCircleOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selectedPaymentMethod = ref('credit-debit-atm-card')
    const currentPlan = ref(true)

    return {
      selectedPaymentMethod,
      currentPlan,
      icons: {
        mdiAccountOutline,
        mdiCloudOutline,
        mdiHelpCircleOutline,
      },
    }
  },
}
</script>
