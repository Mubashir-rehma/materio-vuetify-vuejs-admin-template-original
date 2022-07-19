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
  <VExpansionPanels v-model="panel">
    <!-- SECTION Delivery Address -->
    <VExpansionPanel>
      <VExpansionPanelTitle>Delivery Address</VExpansionPanelTitle>

      <VExpansionPanelText>
        <VForm
          class="mt-3"
          @submit.prevent="() => {}"
        >
          <VRow>
            <!-- 👉 Full Name -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField label="Full Name" />
            </VCol>

            <!-- 👉 Phone No -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField label="Phone No" />
            </VCol>

            <!-- 👉 Address -->
            <VCol cols="12">
              <VTextarea
                label="Address"
                rows="3"
              />
            </VCol>

            <!-- 👉 Pincode -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField label="Pincode" />
            </VCol>

            <!-- 👉 Landmark -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField label="Landmark" />
            </VCol>

            <!-- 👉 City -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField label="City" />
            </VCol>

            <!-- 👉 State -->
            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                :items="stateList"
                label="State"
              />
            </VCol>

            <!-- 👉 Address Type  -->
            <VCol cols="12">
              <label>Address Type</label>
              <VRadioGroup
                v-model="radios"
              >
                <VRadio
                  label="Home (All day delivery)"
                  value="home"
                />
                <VRadio
                  label="Office (Delivery between 10 AM - 5 PM)"
                  value="office"
                />
              </VRadioGroup>
            </VCol>
          </VRow>
        </VForm>
      </VExpansionPanelText>
    </VExpansionPanel>
    <!-- !SECTION Delivery Address -->

    <!-- SECTION Delivery Options -->
    <VExpansionPanel>
      <VExpansionPanelTitle>Delivery Options</VExpansionPanelTitle>

      <VExpansionPanelText>
        <!-- 👉 Radio Group -->
        <VRadioGroup
          v-model="deliveryOption"
        >
          <div
            class="delivery-option"
            :class="deliveryOption === 'standard' ? 'active' : ''"
          >
            <div class="d-flex justify-space-between">
              <VRadio value="standard">
                <template #label>
                  <span class="font-weight-medium">Standard 3-5 Days</span>
                </template>
              </VRadio>
              <span class="text-h6 font-weight-bold">Free</span>
            </div>
            <span class="ms-10">Friday, 15 Nov - Monday, 18 Nov</span>
          </div>
          <div
            class="delivery-option"
            :class="deliveryOption === 'express' ? 'active' : ''"
          >
            <div class="d-flex justify-space-between">
              <VRadio value="express">
                <template #label>
                  <span class="font-weight-medium">Express</span>
                </template>
              </VRadio>
              <span class="text-h6 font-weight-bold">$5.00</span>
            </div>
            <span class="ms-10">Friday, 15 Nov - Sunday, 17 Nov</span>
          </div>
          <div
            class="delivery-option"
            :class="deliveryOption === 'overnight' ? 'active' : ''"
          >
            <div class="d-flex justify-space-between">
              <VRadio value="overnight">
                <template #label>
                  <span class="font-weight-medium">Overnight</span>
                </template>
              </VRadio>
              <span class="text-h6 font-weight-bold">$10.00</span>
            </div>
            <span class="ms-10">Friday, 15 Nov - Saturday, 16 Nov</span>
          </div>
        </VRadioGroup>
      </VExpansionPanelText>
    </VExpansionPanel>
    <!-- !SECTION Delivery Options -->

    <!-- SECTION Payment Method -->
    <VExpansionPanel>
      <VExpansionPanelTitle>Payment Method</VExpansionPanelTitle>

      <VExpansionPanelText>
        <VRow>
          <VCol
            md="6"
            cols="12"
          >
            <VForm>
              <VRow>
                <!-- 👉 Payment Method -->
                <VCol cols="12">
                  <VRadioGroup
                    v-model="paymentMethod"
                  >
                    <VRadio
                      v-for="payment in paymentMethods"
                      :key="payment.radioValue"
                      :value="payment.radioValue"
                    >
                      <template #label>
                        <span class="me-1">{{ payment.radioLabel }}</span>
                        <VIcon
                          size="18"
                          :icon="payment.icon"
                        />
                      </template>
                    </VRadio>
                  </VRadioGroup>
                </VCol>

                <!-- 👉 Card Number -->
                <VCol cols="12">
                  <VTextField label="Card Number" />
                </VCol>

                <!-- 👉 Name -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField label="Name" />
                </VCol>

                <!-- 👉 Expire Date -->
                <VCol
                  cols="6"
                  md="3"
                >
                  <VTextField label="Expiry Date" />
                </VCol>

                <!-- 👉 CVV Code -->
                <VCol
                  cols="6"
                  md="3"
                >
                  <VTextField label="CVV Code" />
                </VCol>
              </VRow>
            </VForm>
          </VCol>
        </VRow>

        <VDivider class="my-5" />

        <!-- 👉 Place Order -->
        <VBtn class="me-5">
          Place Order
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
        >
          Cancel
        </VBtn>
      </VExpansionPanelText>
    </VExpansionPanel>
    <!-- !SECTION Payment Method -->
  </VExpansionPanels>
</template>

<style lang="scss" scoped>
.delivery-option {
  padding: 2rem;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

  &.active {
    border-color: rgb(var(--v-theme-primary));
  }
}
</style>
