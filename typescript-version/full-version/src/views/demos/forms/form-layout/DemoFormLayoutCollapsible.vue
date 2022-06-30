<script lang="ts" setup>
const stateList = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
]
const radios = ref('home')
const deliveryOption = ref('standard')
const paymentMethod = ref('credit-debit-card')
const panel = ref(0)
const paymentMethods = [
  {
    radioValue: 'credit-debit-card',
    radioLabel: 'Credit/Debit/ATM Card',
    icon: 'mdi-credit-card-outline',
  },
  {
    radioValue: 'cash-on-delivery',
    radioLabel: 'Cash On Delivery',
    icon: 'mdi-help-circle-outline',
  },
]
</script>

<template>
  <v-expansion-panels v-model="panel">
    <!-- SECTION Delivery Address -->
    <v-expansion-panel>
      <v-expansion-panel-title>Delivery Address</v-expansion-panel-title>

      <v-expansion-panel-text>
        <v-form
          class="mt-3"
          @submit.prevent="() => {}"
        >
          <v-row>
            <!-- 👉 Full Name -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field label="Full Name" />
            </v-col>

            <!-- 👉 Phone No -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field label="Phone No" />
            </v-col>

            <!-- 👉 Address -->
            <v-col cols="12">
              <v-textarea
                label="Address"
                rows="3"
              />
            </v-col>

            <!-- 👉 Pincode -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field label="Pincode" />
            </v-col>

            <!-- 👉 Landmark -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field label="Landmark" />
            </v-col>

            <!-- 👉 City -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field label="City" />
            </v-col>

            <!-- 👉 State -->
            <v-col
              cols="12"
              md="6"
            >
              <v-select
                :items="stateList"
                label="State"
              />
            </v-col>

            <!-- 👉 Address Type  -->
            <v-col cols="12">
              <label>Address Type</label>
              <v-radio-group
                v-model="radios"
              >
                <v-radio
                  label="Home (All day delivery)"
                  value="home"
                />
                <v-radio
                  label="Office (Delivery between 10 AM - 5 PM)"
                  value="office"
                />
              </v-radio-group>
            </v-col>
          </v-row>
        </v-form>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <!-- !SECTION Delivery Address -->

    <!-- SECTION Delivery Options -->
    <v-expansion-panel>
      <v-expansion-panel-title>Delivery Options</v-expansion-panel-title>

      <v-expansion-panel-text>
        <!-- 👉 Radio Group -->
        <v-radio-group
          v-model="deliveryOption"
        >
          <div
            class="delivery-option"
            :class="deliveryOption === 'standard' ? 'active' : ''"
          >
            <div class="d-flex justify-space-between">
              <v-radio value="standard">
                <template #label>
                  <span class="font-weight-medium">Standard 3-5 Days</span>
                </template>
              </v-radio>
              <span class="text-h6 font-weight-bold">Free</span>
            </div>
            <span class="ms-10">Friday, 15 Nov - Monday, 18 Nov</span>
          </div>
          <div
            class="delivery-option"
            :class="deliveryOption === 'express' ? 'active' : ''"
          >
            <div class="d-flex justify-space-between">
              <v-radio value="express">
                <template #label>
                  <span class="font-weight-medium">Express</span>
                </template>
              </v-radio>
              <span class="text-h6 font-weight-bold">$5.00</span>
            </div>
            <span class="ms-10">Friday, 15 Nov - Sunday, 17 Nov</span>
          </div>
          <div
            class="delivery-option"
            :class="deliveryOption === 'overnight' ? 'active' : ''"
          >
            <div class="d-flex justify-space-between">
              <v-radio value="overnight">
                <template #label>
                  <span class="font-weight-medium">Overnight</span>
                </template>
              </v-radio>
              <span class="text-h6 font-weight-bold">$10.00</span>
            </div>
            <span class="ms-10">Friday, 15 Nov - Saturday, 16 Nov</span>
          </div>
        </v-radio-group>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <!-- !SECTION Delivery Options -->

    <!-- SECTION Payment Method -->
    <v-expansion-panel>
      <v-expansion-panel-title>Payment Method</v-expansion-panel-title>

      <v-expansion-panel-text>
        <v-row>
          <v-col
            md="6"
            cols="12"
          >
            <v-form>
              <v-row>
                <!-- 👉 Payment Method -->
                <v-col cols="12">
                  <v-radio-group
                    v-model="paymentMethod"
                  >
                    <v-radio
                      v-for="payment in paymentMethods"
                      :key="payment.radioValue"
                      :value="payment.radioValue"
                    >
                      <template #label>
                        <span class="me-1">{{ payment.radioLabel }}</span>
                        <v-icon
                          size="18"
                          :icon="payment.icon"
                        />
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>

                <!-- 👉 Card Number -->
                <v-col cols="12">
                  <v-text-field label="Card Number" />
                </v-col>

                <!-- 👉 Name -->
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field label="Name" />
                </v-col>

                <!-- 👉 Expire Date -->
                <v-col
                  cols="6"
                  md="3"
                >
                  <v-text-field label="Expiry Date" />
                </v-col>

                <!-- 👉 CVV Code -->
                <v-col
                  cols="6"
                  md="3"
                >
                  <v-text-field label="CVV Code" />
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>

        <v-divider class="my-5" />

        <!-- 👉 Place Order -->
        <v-btn class="me-5">
          Place Order
        </v-btn>
        <v-btn color="secondary">
          Cancel
        </v-btn>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <!-- !SECTION Payment Method -->
  </v-expansion-panels>
</template>

<style lang="scss" scoped>
.delivery-option {
  padding: 2rem;

  /* stylelint-disable-next-line color-function-notation */
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

  &.active {
    border-color: rgb(var(--v-theme-primary));
  }
}
</style>
