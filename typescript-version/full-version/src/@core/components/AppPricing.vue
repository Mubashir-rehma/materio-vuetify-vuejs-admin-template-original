<script setup lang="ts">
import starterLogo from '@/assets/images/icons/unicons/bookmark.png'
import enterpriseLogo from '@/assets/images/icons/unicons/briefcase-round.png'
import proLogo from '@/assets/images/icons/unicons/wallet-round.png'
import priceArrowDark from '@/assets/images/pages/pricing-arrow-dark.png'
import priceArrowLight from '@/assets/images/pages/pricing-arrow-light.png'
import { useThemeConfig } from '@core/composable/useThemeConfig'

interface ColumnsResponsiveProps {
  xs?: number | string
  sm?: number | string
  md?: string | number
  lg?: string | number
  xl?: string | number
}

const props = defineProps<ColumnsResponsiveProps>()

const { isDark } = useThemeConfig()

const annualMonthlyPlanPriceToggler = ref(true)

const pricingPlans = [
  {
    name: 'STARTER',
    logo: starterLogo,
    monthlyPrice: 0,
    yearlyPrice: 0,
    isExclusive: false,
    features: [
      'Rich landing pages',
      '100+ components',
      'Basic support on Github',
    ],
  },
  {
    name: 'PRO',
    logo: proLogo,
    monthlyPrice: 42,
    yearlyPrice: 499,
    isExclusive: true,
    features: [
      'Up to 5 users',
      '120+ components',
      'Basic support on Github',
      'Monthly updates',
      'Integrations',
    ],
  },
  {
    name: 'ENTERPRISE',
    logo: enterpriseLogo,
    monthlyPrice: 84,
    yearlyPrice: 999,
    isExclusive: false,
    features: [
      'Up to 10 users',
      '150+ components',
      'Basic support on Github',
      'Monthly updates',
      'Integrations',
      'Product Support',
      'API access',
      'Speedy build tooling',
    ],
  },
]

const exclusiveStyle = {
  border: 'primary',
  class: 'border-opacity-100',
}

const priceArrowTheme = controlledComputed(isDark, () => {
  return isDark.value ? priceArrowDark : priceArrowLight
})
</script>

<template>
  <!-- 👉 Title and subtitle -->
  <div class="text-center">
    <h3 class="text-h4 pricing-title font-weight-medium mb-4">
      Find the right plan for your site
    </h3>
    <p>
      Get started with us - it's perfect for individuals and teams. Choose a subscription plan that meets your needs.
    </p>
  </div>

  <!-- 👉 Annual and monthly price toggler -->
  <div class="d-flex justify-center align-center mt-15 mb-5 pt-10">
    <v-label
      for="pricing-plan-toggle"
      class="me-3 ms-15"
    >
      Monthly
    </v-label>
    <div>
      <v-switch
        id="pricing-plan-toggle"
        v-model="annualMonthlyPlanPriceToggler"
        inline
        label="Annual"
      />
    </div>
    <div
      class="d-flex align-center position-relative ms-n10"
      style="top: -1.8rem;"
    >
      <v-img
        :src="priceArrowTheme"
        width="30"
      />
      <v-chip
        color="primary"
        label
        size="small"
      >
        Save Upto 10%
      </v-chip>
    </div>
  </div>

  <!-- SECTION pricing plans -->
  <v-row>
    <v-col
      v-for="plan in pricingPlans"
      :key="plan.logo"
      cols="12"
      v-bind="props"
    >
      <!-- 👉  Card -->
      <v-card v-bind="plan.isExclusive ? exclusiveStyle : {}">
        <v-card-text
          style="height: 3.75rem;"
          class="text-end"
        >
          <!-- 👉 Exclusive -->
          <v-chip
            v-show="plan.isExclusive"
            color="primary"
            label
            size="small"
          >
            Exclusive
          </v-chip>
        </v-card-text>

        <!-- 👉 Plan name -->
        <v-card-text class="d-flex justify-center">
          <h3 class="text-h5 font-weight-bold">
            {{ plan.name }}
          </h3>
        </v-card-text>

        <!-- 👉 Plan logo -->
        <v-card-text>
          <v-img
            :src="plan.logo"
            height="80"
          />
        </v-card-text>

        <!-- 👉 Plan price  -->
        <v-card-text class="position-relative text-center my-6">
          <div class="d-flex justify-center align-center mb-2">
            <sup class="text-h6 font-weight-medium me-1 mt-4">$</sup>
            <h1 class="text-h3 font-weight-bold">
              {{ plan.monthlyPrice }}
            </h1>
            <sub class="text-body-1 font-weight-medium ms-1 mt-2">/month</sub>
          </div>
          <span
            v-show="annualMonthlyPlanPriceToggler"
            class="position-absolute text-body-1 font-weight-medium"
            style="inset-inline: 0;"
          >
            {{ plan.yearlyPrice === 0 ? 'free' : `$ ${plan.yearlyPrice}/year` }}
          </span>
        </v-card-text>

        <!-- 👉 Plan features -->
        <v-card-text>
          <v-list density="compact">
            <v-list-item
              v-for="feature in plan.features"
              :key="feature"
            >
              <v-list-item-avatar
                size="20"
                class="v-avatar-light-bg text-primary me-2"
              >
                <v-icon
                  size="13"
                  icon="mdi-check"
                />
              </v-list-item-avatar>
              <v-list-item-title>{{ feature }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>

        <!-- 👉 Plan actions -->
        <v-card-actions>
          <v-btn
            :variant="plan.isExclusive ? 'contained' : 'contained-text'"
            block
          >
            Get Started {{ plan.yearlyPrice === 0 ? 'for free' : '' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <!-- !SECTION  -->
</template>
