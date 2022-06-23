<script setup lang="ts">
import sittingGirlWithLaptopDark from '@/assets/images/illustrations/sitting-girl-with-laptop-dark.png'
import sittingGirlWithLaptopLight from '@/assets/images/illustrations/sitting-girl-with-laptop-light.png'
import AppPricing from '@core/components/AppPricing.vue'
import { useThemeConfig } from '@core/composable/useThemeConfig'

const { isDark } = useThemeConfig()

const features = [
  {
    feature: '14-days free trial',
    starter: true,
    pro: true,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'No user limit',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'Product Support',
    starter: false,
    pro: true,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'Email Support',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: true,
      enterprise: false,
    },
  },
  {
    feature: 'Integrations',
    starter: false,
    pro: true,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'Removal of Front branding',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: true,
      enterprise: false,
    },
  },
  {
    feature: 'Active maintenance & support',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'Data storage for 365 days',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
]

const faqList = [
  {
    question: 'What counts towards the 100 responses limit?',
    answer: 'We count all responses submitted through all your forms in a month. If you already received 100 responses this month, you won’t be able to receive any more of them until next month when the counter resets.',
  },
  {
    question: 'How do you process payments?',
    answer: 'We accept Visa®, MasterCard®, American Express®, and PayPal®. So you can be confident that your credit card information will be kept safe and secure.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: '2Checkout accepts all types of credit and debit cards.',
  },
  {
    question: 'Do you have a money-back guarantee?',
    answer: 'Yes. You may request a refund within 30 days of your purchase without any additional explanations.',
  },
  {
    question: 'I have more questions. Where can I get help?',
    answer: 'Please contact us if you have any other questions or concerns. We’re here to help!',
  },
]

const bannerGirlThemeImage = controlledComputed(isDark, () => {
  return isDark.value ? sittingGirlWithLaptopDark : sittingGirlWithLaptopLight
})
</script>

<template>
  <v-card class="page-pricing-bg">
    <v-card-text class="pt-12 mb-16">
      <!-- 👉 App Pricing components -->
      <AppPricing md="4" />
    </v-card-text>

    <!-- 👉 Free Banner -->
    <div class="d-flex align-center flex-md-row flex-column page-pricing-free-banner-bg pb-0 pa-14">
      <div>
        <v-img
          :src="bannerGirlThemeImage"
          :width="350"
        />
      </div>

      <v-spacer />

      <div class="text-md-end text-center mt-4">
        <h3 class="text-h5 text-primary">
          Still not convinced? Start with a 14-day FREE trial!
        </h3>
        <p>
          You will get full access to all the features for 14 days.
        </p>
        <v-btn class="my-16">
          Start-14-day FREE trial
        </v-btn>
      </div>
    </div>

    <!-- 👉 Plans -->
    <v-card-text class="text-center pt-12">
      <v-chip
        label
        color="primary"
        size="small"
      >
        Plans
      </v-chip>
      <h4 class="text-h4 font-weight-medium my-4">
        Pick a plan that works best for you
      </h4>
      <p>Stay cool, we have a 48-hour money back guarantee!</p>
    </v-card-text>

    <!-- 👉 Features & Tables -->
    <v-card-text class="mb-16">
      <v-table class="text-no-wrap">
        <thead>
          <tr>
            <th>
              <p class="text-h6 mb-1">
                FEATURES
              </p>
              <small class="text-caption">NATIVE FRONT FEATURES</small>
            </th>
            <th class="text-center">
              <p class="text-h6 mb-1">
                STARTER
              </p>
              <small class="text-caption">FREE</small>
            </th>
            <th class="text-center">
              <p class="text-h6 mb-1">
                PRO
                <v-avatar
                  size="22"
                  color="primary"
                  class="mt-n2"
                >
                  <v-icon
                    size="16"
                    icon="mdi-star"
                  />
                </v-avatar>
              </p>

              <small class="text-caption">$7.5/MONTH</small>
            </th>
            <th class="text-center">
              <p class="text-h6 mb-1">
                ENTERPRISE
              </p>
              <small class="text-caption">$16/MONTH</small>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="feature in features"
            :key="feature.feature"
          >
            <td>{{ feature.feature }}</td>
            <td class="text-center">
              <v-chip
                v-if="!feature.addOnAvailable.starter"
                pill
                size="30"
                class="pa-1"
                :color="feature.starter ? 'primary' : 'secondary'"
              >
                <v-icon
                  size="15"
                  :icon="feature.starter ? 'mdi-check' : 'mdi-close'"
                />
              </v-chip>

              <v-chip
                v-if="feature.addOnAvailable.starter"
                color="primary"
                label
                size="small"
              >
                ADD-ON AVAILABLE
              </v-chip>
            </td>

            <td class="text-center">
              <v-chip
                v-if="!feature.addOnAvailable.pro"
                pill
                size="30"
                class="pa-1"
                :color="feature.pro ? 'primary' : 'secondary'"
              >
                <v-icon
                  size="15"
                  :icon="feature.pro ? 'mdi-check' : 'mdi-close'"
                />
              </v-chip>

              <v-chip
                v-if="feature.addOnAvailable.pro"
                color="primary"
                label
                size="small"
              >
                ADD-ON AVAILABLE
              </v-chip>
            </td>

            <td class="text-center">
              <v-chip
                v-if="!feature.addOnAvailable.enterprise"
                pill
                size="30"
                class="pa-1"
                :color="feature.enterprise ? 'primary' : 'secondary'"
              >
                <v-icon
                  size="15"
                  :icon="feature.enterprise ? 'mdi-check' : 'mdi-close'"
                />
              </v-chip>

              <v-chip
                v-if="feature.addOnAvailable.enterprise"
                color="primary"
                label
                size="small"
              >
                ADD-ON AVAILABLE
              </v-chip>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td />
            <td class="text-center">
              <v-btn variant="contained-text">
                Choose Plan
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn>
                Choose Plan
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn variant="contained-text">
                Choose Plan
              </v-btn>
            </td>
          </tr>
        </tfoot>
      </v-table>
    </v-card-text>

    <!-- 👉 FAQ -->
    <v-card-text class="bg-var-theme-background py-16">
      <div class="text-center py-8">
        <v-chip
          label
          color="primary"
          size="small"
        >
          FAQ
        </v-chip>
        <h2 class="text-h4 font-weight-medium my-4">
          Frequently Asked Questions
        </h2>
        <p>
          Let us help answer the most common questions you might have.
        </p>
      </div>

      <v-expansion-panels
        variant="popout"
        class="pb-8"
      >
        <v-expansion-panel
          v-for="faq in faqList"
          :key="faq.question"
          :title="faq.question"
          :text="faq.answer"
        />
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
@use "@core/scss/mixins" as mixins;

.page-pricing-free-banner-bg {
  /* stylelint-disable-next-line color-function-notation */
  background-color: rgba(var(--v-theme-primary), var(--v-pressed-opacity));
}

@media (min-width: 960px) {
  /* stylelint-disable-next-line no-duplicate-selectors */
  .page-pricing-bg {
    // generate images variants for themes
    &::before {
      @include mixins.gen-img-variants(
        $property:"background-image",
        $light: url("@/assets/images/illustrations/pricing-illustration-light.png"),
        $dark: url("@/assets/images/illustrations/pricing-illustration-light.png"),
        $important: false,
      );

      display: block;
      background-size: cover;
      block-size: 54rem;
      content: "";
      inline-size: 100%;
      inset-block-end: 0;
      margin-block-end: -54rem;
    }
  }
}
</style>
