<script setup lang="ts">
import sectionTitleIcon from '@images/pages/section-title-icon.png'
import customListArrowIcon from '@images/svg/list-arrow-icon.svg'

const pricingPlans = [
  {
    title: 'Basic Plan',
    price: 20,
    features: [
      'Timeline',
      'Basic search',
      'Live chat widget',
      'Email marketing',
      'Custom Forms',
      'Traffic analytics',
    ],
    supportType: 'Basic',
    supportMedium: 'Only Email',
    respondTime: 'AVG. Time: 24h',
    current: false,
  },
  {
    title: 'Favourite Plan',
    price: 51,
    features: [
      'Everything in basic',
      'Timeline with database',
      'Advanced search',
      'Marketing automation',
      'Advanced chatbot',
      'Campaign management',
    ],
    supportType: 'Standard',
    supportMedium: 'Email & Chat',
    respondTime: 'AVG. Time: 6h',
    current: true,
  },
  {
    title: 'Standard Plan',
    price: 99,
    features: [
      'Campaign management',
      'Timeline with database',
      'Fuzzy search',
      'A/B testing sanbox',
      'Custom permissions',
      'Social media automation',
    ],
    supportType: 'Exclusive',
    supportMedium: 'Email, Chat & Google Meet',
    respondTime: 'Live Support',
    current: false,
  },
]
</script>

<template>
  <VContainer id="pricing-plan">
    <div class="pricing-plans">
      <!-- 👉 Headers  -->
      <div class="headers d-flex justify-center flex-column align-center mb-16">
        <h6 class="text-base mb-6 font-weight-medium my-auto d-flex gap-x-2">
          <img
            :src="sectionTitleIcon"
            alt="section title icon"
            height="20"
            width="20"
          >
          <span>
            PRICING PLANS
          </span>
        </h6>
        <h5 class="text-h5 mb-2">
          <span class="font-weight-bold">Tailored Pricing Plans</span> designed for you
        </h5>
        <p>
          All plans include 40+ advanced tools and features to boost your product.
          Choose the best plan to fit your needs.
        </p>
      </div>

      <div class="w-75 mx-auto">
        <VSlider
          max="999"
          model-value="458"
          color="primary"
          thumb-label="always"
          class="mb-16"
        />
      </div>

      <VRow>
        <VCol
          v-for="(plan, index) in pricingPlans"
          :key="index"
        >
          <VCard
            flat
            border
            :style="plan.current ? 'border:2px solid rgb(var(--v-theme-primary))' : ''"
          >
            <VCardText>
              <h5 class="text-h5 mb-5">
                {{ plan.title }}
              </h5>

              <div class="d-flex justify-space-between mb-8">
                <div class="d-flex align-start">
                  <span class="text-h6">
                    $
                  </span>
                  <span class="text-h3">
                    {{ plan.price }}
                  </span>
                </div>

                <div>
                  <div class="text-body-1">
                    Per month
                  </div>
                  <div class="text-caption">
                    10% off for yearly subscription
                  </div>
                </div>
              </div>

              <VList class="card-list">
                <VListItem
                  v-for="(item, i) in plan.features"
                  :key="i"
                >
                  <template #prepend>
                    <VIcon
                      :icon="customListArrowIcon"
                      size="20"
                      color="primary"
                    />
                    <div class="text-body-1 font-weight-medium text-high-emphasis">
                      {{ item }}
                    </div>
                  </template>
                </VListItem>
              </VList>

              <VDivider class="my-4" />

              <div class="d-flex align-center justify-space-between mb-8 flex-wrap">
                <div>
                  <div>{{ plan.supportType }}</div>
                  <div>{{ plan.supportMedium }}</div>
                </div>
                <VChip
                  variant="tonal"
                  color="primary"
                  density="comfortable"
                >
                  {{ plan.respondTime }}
                </VChip>
              </div>

              <VBtn
                block
                :variant="plan.current ? 'elevated' : 'outlined'"
                :to="{ name: 'front-pages-payment' }"
              >
                Get Started
              </VBtn>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </div>
  </VContainer>
</template>

<style lang="scss">
.card-list {
  --v-card-list-gap: 12px;
}

.pricing-plans {
  margin-block: 5.25rem;
}
</style>
