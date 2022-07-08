<script setup lang="ts">
import { useTheme } from 'vuetify'
import starterLogo from '@/assets/images/icons/unicons/bookmark.png'
import enterpriseLogo from '@/assets/images/icons/unicons/briefcase-round.png'
import proLogo from '@/assets/images/icons/unicons/wallet-round.png'
import priceArrowDark from '@/assets/images/pages/pricing-arrow-dark.png'
import priceArrowLight from '@/assets/images/pages/pricing-arrow-light.png'

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

const vuetifyTheme = useTheme()
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
    <VLabel
      for="pricing-plan-toggle"
      class="me-3 ms-15"
    >
      Monthly
    </VLabel>
    <div>
      <VSwitch
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
      <VImg
        :src="vuetifyTheme.current.value.dark ? priceArrowDark : priceArrowLight"
        width="30"
      />
      <VChip
        color="primary"
        label
        size="small"
      >
        Save Upto 10%
      </VChip>
    </div>
  </div>

  <!-- SECTION pricing plans -->
  <VRow>
    <VCol
      v-for="plan in pricingPlans"
      :key="plan.logo"
      cols="12"
      v-bind="props"
    >
      <!-- 👉  Card -->
      <VCard v-bind="plan.isExclusive ? exclusiveStyle : {}">
        <VCardText
          style="height: 3.75rem;"
          class="text-end"
        >
          <!-- 👉 Exclusive -->
          <VChip
            v-show="plan.isExclusive"
            color="primary"
            label
            size="small"
          >
            Exclusive
          </VChip>
        </VCardText>

        <!-- 👉 Plan name -->
        <VCardText class="d-flex justify-center">
          <h3 class="text-h5 font-weight-bold">
            {{ plan.name }}
          </h3>
        </VCardText>

        <!-- 👉 Plan logo -->
        <VCardText>
          <VImg
            :src="plan.logo"
            height="80"
          />
        </VCardText>

        <!-- 👉 Plan price  -->
        <VCardText class="position-relative text-center my-6">
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
        </VCardText>

        <!-- 👉 Plan features -->
        <VCardText>
          <VList density="compact">
            <VListItem
              v-for="feature in plan.features"
              :key="feature"
            >
              <VListItemAvatar
                size="20"
                class="v-avatar-light-bg text-primary me-2"
              >
                <VIcon
                  size="13"
                  icon="mdi-check"
                />
              </VListItemAvatar>
              <VListItemTitle>{{ feature }}</VListItemTitle>
            </VListItem>
          </VList>
        </VCardText>

        <!-- 👉 Plan actions -->
        <VCardActions>
          <VBtn
            :variant="plan.isExclusive ? 'elevated' : 'tonal'"
            block
          >
            Get Started {{ plan.yearlyPrice === 0 ? 'for free' : '' }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VCol>
  </VRow>
  <!-- !SECTION  -->
</template>
