<script setup lang="ts">
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'

import paypalDark from '@images/icons/payments/img/paypal-dark.png'
import paypalLight from '@images/icons/payments/img/paypal-light.png'
import visaDark from '@images/icons/payments/img/visa-dark.png'
import visaLight from '@images/icons/payments/img/visa-light.png'

import type { CustomInputContent } from '@core/types'

const visa = useGenerateImageVariant(visaLight, visaDark)
const paypal = useGenerateImageVariant(paypalLight, paypalDark)

definePage({
  meta: {
    layout: 'blank',
  },
})

const radioContent: CustomInputContent[] = [
  {
    title: 'Credit Card',
    value: 'credit card',
    images: visa.value,
  },
  {
    title: 'PayPal',
    value: 'paypal',
    images: paypal.value,
  },
]

const selectedRadio = ref('credit card')
const selectedCountry = ref('USA')
const isPricingPlanDialogVisible = ref(false)
</script>

<template>
  <!-- eslint-disable vue/attribute-hyphenation -->

  <div class="payment-page">
    <!-- 👉 Navbar -->
    <Navbar />

    <!-- 👉 Payment card  -->
    <VContainer>
      <div class="d-flex justify-center align-center payment-card">
        <VCard width="100%">
          <VRow>
            <VCol
              cols="12"
              md="8"
              :class="$vuetify.display.mdAndUp ? 'border-e' : 'border-b'"
            >
              <VCardText>
                <!-- Checkout header -->
                <div>
                  <div class="text-h5 mb-2">
                    Checkout
                  </div>
                  <div class="text-body-2">
                    All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs.
                  </div>
                </div>

                <CustomRadios
                  v-model:selected-radio="selectedRadio"
                  :radio-content="radioContent"
                  :grid-column="{ cols: '12', sm: '6' }"
                  class="my-8"
                >
                  <template #default="{ item }">
                    <div class="d-flex align-center gap-x-4">
                      <VImg
                        :src="item.images"
                        height="35"
                      />
                      <div class="font-weight-medium text-high-emphasis">
                        {{ item.title }}
                      </div>
                    </div>
                  </template>
                </CustomRadios>

                <!-- billing Details -->
                <div class="mb-8">
                  <h6 class="text-h6 mb-6">
                    Billing Details
                  </h6>
                  <VRow>
                    <VCol
                      cols="12"
                      md="6"
                    >
                      <VTextField
                        label="Email Address"
                        type="email"
                        placeholder="johndoe@email.com"
                      />
                    </VCol>

                    <VCol
                      cols="12"
                      md="6"
                    >
                      <VTextField
                        label="Password"
                        autocomplete="on"
                        type="password"
                        placeholder="············"
                      />
                    </VCol>

                    <VCol
                      cols="12"
                      md="6"
                    >
                      <VSelect
                        v-model="selectedCountry"
                        label="Billing Country"
                        :items="['USA', 'Canada', 'UK', 'AUS']"
                      />
                    </VCol>

                    <VCol
                      cols="12"
                      md="6"
                    >
                      <VTextField
                        label="Biling Zip/Postal Code"
                        type="number"
                        placeholder="129211"
                      />
                    </VCol>
                  </VRow>
                </div>

                <!-- Credit card info -->
                <div
                  class="mb-8"
                  :class="selectedRadio === 'paypal' ? 'd-none' : 'd-block'"
                >
                  <h6 class="text-h6 mb-6">
                    Credit Card Info
                  </h6>
                  <VRow>
                    <VCol cols="12">
                      <VTextField
                        label="Card Number"
                        placeholder="8787 2345 3458"
                        type="number"
                      />
                    </VCol>

                    <VCol
                      cols="12"
                      md="4"
                    >
                      <VTextField
                        label="Card Holder"
                        placeholder="John Doe"
                      />
                    </VCol>

                    <VCol
                      cols="12"
                      md="4"
                    >
                      <VTextField
                        label="Exp. date"
                        placeholder="05/2020"
                      />
                    </VCol>

                    <VCol
                      cols="12"
                      md="4"
                    >
                      <VTextField
                        label="CVV"
                        type="number"
                        placeholder="784"
                      />
                    </VCol>
                  </VRow>
                </div>
              </VCardText>
            </VCol>

            <VCol
              cols="12"
              md="4"
            >
              <VCardText>
                <!-- order summary -->
                <div class="mb-8">
                  <div class="text-h5 mb-2">
                    Order Summary
                  </div>
                  <div class="text-body-2">
                    It can help you manage and service orders before, during, and after fulfilment.
                  </div>
                </div>

                <VCard
                  flat
                  variant="tonal"
                >
                  <VCardText>
                    <div>
                      <div class="text-body-2">
                        A simple start for everyone
                      </div>
                      <div class="my-4">
                        <span class="text-h3">$59.99</span> / month
                      </div>
                      <VBtn
                        variant="outlined"
                        block
                        @click="isPricingPlanDialogVisible = !isPricingPlanDialogVisible"
                      >
                        Change Plan
                      </VBtn>
                    </div>
                  </VCardText>
                </VCard>

                <div class="my-5">
                  <div class="d-flex justify-space-between">
                    <span>Subscription</span>
                    <span>$85.99</span>
                  </div>
                  <div class="d-flex justify-space-between">
                    <span>Tax</span>
                    <span>$4.99</span>
                  </div>
                  <VDivider class="my-4" />
                  <div class="d-flex justify-space-between">
                    <span>Total</span>
                    <span>$90.98</span>
                  </div>
                </div>

                <VBtn
                  :append-icon="$vuetify.locale.isRtl ? 'ri-arrow-left-line' : 'ri-arrow-right-line'"
                  block
                  color="success"
                  class="mb-8"
                >
                  Proceed With Payment
                </VBtn>

                <div class="text-body-2">
                  By continuing, you accept to our Terms of Services and Privacy Policy. Please note that payments are non-refundable.
                </div>
              </VCardText>
            </VCol>
          </VRow>
        </VCard>
      </div>
    </VContainer>

    <!-- 👉 Footer -->
    <Footer />

    <PricingPlanDialog v-model:is-dialog-visible="isPricingPlanDialogVisible" />
  </div>
</template>

<style lang="scss" scoped>
.footer {
  position: static !important;
  inline-size: 100%;
  inset-block-end: 0;
}

.payment-card {
  margin-block: 6.25rem;
}

.payment-page {
  @media (min-width: 600px) and (max-width: 960px) {
    .v-container {
      padding-inline: 2rem !important;
    }
  }
}
</style>

<style lang="scss">
.payment-card {
  .custom-radio {
    .v-radio {
      margin-block-start: 0 !important;
    }
  }
}
</style>
