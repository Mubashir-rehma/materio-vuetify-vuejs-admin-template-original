<script setup lang="ts">
import basicLogo from '@/assets/images/misc/pricing-tree-1.png'
import standardLogo from '@/assets/images/misc/pricing-tree-2.png'
import enterpriseLogo from '@/assets/images/misc/pricing-tree-3.png'

interface ColumnsResponsiveProps {
  xs?: number | string
  sm?: number | string
  md?: string | number
  lg?: string | number
  xl?: string | number
}

const props = defineProps<ColumnsResponsiveProps>()

const annualMonthlyPlanPriceToggler = ref(true)

const pricingPlans = [
  {
    name: 'Basic',
    tagLine: 'A simple start for everyone',
    logo: basicLogo,
    monthlyPrice: 0,
    yearlyPrice: 0,
    isPopular: false,
    current: true,
    features: [
      '100 responses a month',
      'Unlimited forms and surveys',
      'Unlimited fields',
      'Basic form creation tools',
      'Up to 2 subdomains',
    ],
  },
  {
    name: 'Standard',
    tagLine: 'For small to medium businesses',
    logo: standardLogo,
    monthlyPrice: 42,
    yearlyPrice: 499,
    isPopular: true,
    current: false,
    features: [
      'Unlimited responses',
      'Unlimited forms and surveys',
      'Instagram profile page',
      'Google Docs integration',
      'Custom “Thank you” page',
    ],
  },
  {
    name: 'Enterprise',
    tagLine: 'Solution for big organizations',
    logo: enterpriseLogo,
    monthlyPrice: 84,
    yearlyPrice: 999,
    isPopular: false,
    current: false,
    features: [
      'PayPal payments',
      'Logic Jumps',
      'File upload with 5GB storage',
      'Custom domain support',
      'Stripe integration',
    ],
  },
]
</script>

<template>
  <!-- 👉 Title and subtitle -->
  <div class="text-center">
    <h3 class="text-h4 pricing-title font-weight-medium mb-4">
      Pricing Plans
    </h3>
    <p class="mb-0">
      All plans include 40+ advanced tools and features to boost your product.
    </p>
    <p>Choose the best plan to fit your needs.</p>
  </div>

  <!-- 👉 Annual and monthly price toggler -->
  <div class="d-flex align-center justify-center mx-auto mb-10">
    <v-label
      for="pricing-plan-toggle"
      class="me-3"
    >
      Monthly
    </v-label>

    <div>
      <v-switch
        id="pricing-plan-toggle"
        v-model="annualMonthlyPlanPriceToggler"
        label="Annual"
        color="secondary"
      />
    </div>
  </div>

  <!-- SECTION pricing plans -->
  <v-row>
    <v-col
      v-for="plan in pricingPlans"
      :key="plan.logo"
      v-bind="props"
      cols="12"
    >
      <!-- 👉  Card -->
      <v-card
        flat
        border
        class="border-opacity-100"
        :class="plan.isPopular ? 'border-primary' : ''"
      >
        <v-card-text
          style="height: 3.75rem;"
          class="text-end"
        >
          <!-- 👉 Popular -->
          <v-chip
            v-show="plan.isPopular"
            color="primary"
            size="small"
          >
            Popular
          </v-chip>
        </v-card-text>

        <!-- 👉 Plan logo -->
        <v-card-text class="text-center">
          <v-img
            :height="200"
            :src="plan.logo"
          />

          <!-- 👉 Plan name -->
          <h3 class="text-h5 font-weight-medium mb-2">
            {{ plan.name }}
          </h3>
          <p class="mb-0">
            {{ plan.tagLine }}
          </p>
        </v-card-text>

        <!-- 👉 Plan price  -->
        <v-card-text class="position-relative text-center">
          <div class="d-flex justify-center align-center">
            <sup class="text-body-2 font-weight-medium me-1">$</sup>
            <h1 class="text-h3 font-weight-bold text-primary">
              {{ plan.monthlyPrice }}
            </h1>
            <sub class="text-body-2 font-weight-medium ms-2  mt-2"> /month</sub>
          </div>

          <!-- 👉 Annual Price -->
          <span
            v-show="annualMonthlyPlanPriceToggler"
            class="position-absolute text-caption font-weight-medium"
            style="inset-inline: 0;"
          >
            {{ plan.yearlyPrice === 0 ? 'free' : `USD ${plan.yearlyPrice}/Year` }}
          </span>
        </v-card-text>

        <!-- 👉 Plan features -->
        <v-card-text class="pt-4">
          <v-list density="compact">
            <v-list-item
              v-for="feature in plan.features"
              :key="feature"
            >
              <v-list-item-icon
                :size="14"
                icon="mdi-circle-outline"
                class="me-3"
              />
              <v-list-item-title class="text-body-2">
                {{ feature }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>

        <!-- 👉 Plan actions -->
        <v-card-actions>
          <v-btn
            block
            :color="plan.current ? 'success' : 'primary'"
            :variant="plan.isPopular ? 'elevated' : 'tonal'"
          >
            {{ plan.yearlyPrice === 0 ? 'Your Current Plan' : 'Upgrade' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <!-- !SECTION  -->
</template>
