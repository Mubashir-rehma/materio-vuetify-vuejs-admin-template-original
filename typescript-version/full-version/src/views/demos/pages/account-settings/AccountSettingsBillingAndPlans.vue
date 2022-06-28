<script lang="ts" setup>
import masterCard from '@/assets/images/icons/payments/mastercard.png'
import visa from '@/assets/images/icons/payments/visa.png'
import AppPricing from '@core/components/AppPricing.vue'

const selectedPaymentMethod = ref('credit-debit-atm-card')

const isPricingPlanDialogVisible = ref(false)
const isConfirmDialogVisible = ref(false)
const isCardEditDialogVisible = ref(false)

const creditCards = [
  {
    name: 'Tom McBride',
    number: '5531234567899856',
    expiry: '12/23',
    isPrimary: true,
    type: 'visa',
    cvv: '456',
    image: visa,
  },
  {
    name: 'Mildred Wagner',
    number: '4851234567895896',
    expiry: '10/27',
    isPrimary: false,
    type: 'mastercard',
    cvv: '123',
    image: masterCard,
  },
]

const countryList = ['United States', 'Canada', 'United Kingdom', 'Australia', 'New Zealand', 'India', 'Russia', 'China', 'Japan']

const currentCardDetails = ref()

const openEditCardDialog = (cardDetails: Object) => {
  currentCardDetails.value = cardDetails

  isCardEditDialogVisible.value = true
}
</script>

<template>
  <v-row>
    <!-- 👉 Current Plan -->
    <v-col cols="12">
      <v-card title="Current Plan">
        <v-card-text>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <div>
                <h3>Your Current Plan is Basic</h3>
                <p>A simple start for everyone</p>
                <h3>Active until Dec 09, 2021</h3>
                <p>We will send you a notification upon Subscription expiration</p>
                <h3>
                  <span class="me-3">$199 Per Month</span>
                  <v-chip
                    color="primary"
                    size="small"
                    label
                  >
                    popular
                  </v-chip>
                </h3>
                <p>
                  Standard plan for small to medium businesses
                </p>
              </div>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-alert
                color="warning"
                variant="tonal"
              >
                <p class="text-body-1 text-warning font-weight-semibold mb-1">
                  We need your attention!
                </p>
                <span>Your plan requires update</span>
              </v-alert>

              <!-- progress -->
              <div class="d-flex font-weight-bold mt-8 mb-2">
                <span>Days</span>
                <v-spacer />
                <span>24 of 30 Days</span>
              </div>
              <v-progress-linear
                color="primary"
                rounded
                height="12"
                model-value="75"
              />
              <p class="font-weight-bold mt-2">
                6 days remaining until your plan requires update
              </p>
            </v-col>

            <v-col cols="12">
              <div class="d-flex flex-wrap gap-y-4">
                <v-btn
                  class="me-3"
                  @click="isPricingPlanDialogVisible = true"
                >
                  upgrade plan
                </v-btn>

                <v-btn
                  color="secondary"
                  variant="tonal"
                  @click="isConfirmDialogVisible = true"
                >
                  Cancel Subscription
                </v-btn>
              </div>
            </v-col>
          </v-row>

          <!-- 👉 Confirm Dialog -->
          <ConfirmDialog
            v-model="isConfirmDialogVisible"
            confirmation-msg="Are you sure to cancel your subscription?"
          />

          <!-- 👉 plan and pricing dialog -->
          <v-dialog
            v-model="isPricingPlanDialogVisible"
            class="v-dialog-xl"
          >
            <v-card class="pricing-dialog pa-5 pa-sm-15">
              <v-card-text>
                <AppPricing lg="4" />
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Payment Methods -->
    <v-col cols="12">
      <v-card title="Payment Methods">
        <v-card-text>
          <v-form>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-form @submit.prevent="() => {}">
                  <v-row>
                    <!-- 👉 card type switch -->
                    <v-col cols="12">
                      <v-radio-group
                        v-model="selectedPaymentMethod"
                        inline
                      >
                        <v-radio
                          value="credit-debit-atm-card"
                          label="Credit/Debit/ATM Card"
                          color="primary"
                        />
                        <v-radio
                          value="paypal-account"
                          label="Paypal account"
                          color="primary"
                        />
                      </v-radio-group>
                    </v-col>

                    <!-- 👉 Card Number -->
                    <v-col cols="12">
                      <v-text-field
                        label="Card Number"
                        :model-value="135632156548789"
                        type="number"
                      />
                    </v-col>

                    <!-- 👉 Name -->
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-text-field
                        label="Name"
                        model-value="john Doe"
                      />
                    </v-col>

                    <!-- 👉 Expiry date -->
                    <v-col
                      cols="6"
                      md="3"
                    >
                      <v-text-field
                        label="Expiry Date"
                        model-value="0524"
                      />
                    </v-col>

                    <!-- 👉 Cvv code -->
                    <v-col
                      cols="6"
                      md="3"
                    >
                      <v-text-field
                        type="password"
                        label="CVV Code"
                        model-value="0524"
                      />
                    </v-col>

                    <!-- 👉 Future Billing switch -->
                    <v-col cols="12">
                      <v-switch
                        density="compact"
                        label="Save card for future billing?"
                      />
                    </v-col>

                    <!-- 👉 Payment method action button -->
                    <v-col cols="12">
                      <v-btn
                        type="submit"
                        class="me-3"
                      >
                        Save changes
                      </v-btn>
                      <v-btn
                        type="reset"
                        color="secondary"
                        variant="tonal"
                      >
                        Reset
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-col>

              <!-- 👉 Saved Cards -->
              <v-col
                cols="12"
                md="6"
              >
                <p class="text-body-1 font-weight-medium">
                  My Cards
                </p>

                <div class="d-flex flex-column gap-y-4">
                  <v-card
                    v-for="card in creditCards"
                    :key="card.name"
                    class="bg-var-theme-background"
                    flat
                  >
                    <v-card-text class="d-flex flex-sm-row flex-column">
                      <div class="text-no-wrap">
                        <v-img
                          :src="card.image"
                          width="46"
                        />
                        <h4 class="my-3">
                          {{ card.name }}
                          <v-chip
                            v-if="card.isPrimary"
                            label
                            color="primary"
                            size="small"
                          >
                            Primary
                          </v-chip>
                        </h4>
                        <span class="text-body-1">**** **** **** {{ card.number.substring(card.number.length - 4) }}</span>
                      </div>

                      <v-spacer />

                      <div class="d-flex flex-column text-sm-end">
                        <div class="order-sm-0 order-1">
                          <v-btn
                            variant="tonal"
                            class="me-2"
                            @click="openEditCardDialog(card)"
                          >
                            Edit
                          </v-btn>
                          <v-btn
                            color="secondary"
                            variant="tonal"
                          >
                            Delete
                          </v-btn>
                        </div>
                        <span class="mt-sm-auto mb-sm-0 my-5 order-sm-1 order-0">Card expires at {{ card.expiry }}</span>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>

                <!-- 👉 Add Edit Card Dialog -->
                <CardAddEditDialog
                  v-model="isCardEditDialogVisible"
                  :card-details="currentCardDetails"
                  class="v-dialog-lg"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Billing Address -->
    <v-col cols="12">
      <v-card title="Billing Address">
        <v-card-text>
          <v-form @submit.prevent="() => {}">
            <v-row>
              <!-- 👉 Company name -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field label="Company Name" />
              </v-col>

              <!-- 👉 Billing Email -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field label="Billing Email" />
              </v-col>

              <!-- 👉 Tax ID -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field label="Tax ID" />
              </v-col>

              <!-- 👉 Vat Number -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field label="VAT Number" />
              </v-col>

              <!-- 👉 Mobile -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="Mobile"
                  type="number"
                />
              </v-col>

              <!-- 👉 Country -->
              <v-col
                cols="12"
                md="6"
              >
                <v-select
                  label="Country"
                  :items="countryList"
                />
              </v-col>

              <!-- 👉 Billing Address -->
              <v-col cols="12">
                <v-text-field label="Billing Address" />
              </v-col>

              <!-- 👉 State -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field label="State" />
              </v-col>

              <!-- 👉 Zip Code -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field label="Zip Code" />
              </v-col>

              <!-- 👉 Actions Button -->
              <v-col cols="12">
                <v-btn
                  type="submit"
                  class="me-3"
                >
                  Save changes
                </v-btn>
                <v-btn
                  type="reset"
                  color="secondary"
                  variant="tonal"
                >
                  Reset
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.pricing-title {
  font-size: 1.625rem !important;
}

.pricing-dialog {
  .v-card {
    /* stylelint-disable-next-line color-function-notation */
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    box-shadow: none;
  }
}
</style>
