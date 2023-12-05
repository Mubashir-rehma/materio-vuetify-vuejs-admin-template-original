<script setup lang="ts">
import sectionTitleIcon from '@images/pages/section-title-icon.png'
import listArrowIcon from '@images/svg/list-arrow-icon.svg?url'
import vectorIcon from '@images/svg/vector.svg?url'

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
    <div class="pricing-plans d-flex flex-column gap-12">
      <!-- 👉 Headers  -->
      <div class="headers d-flex justify-center flex-column align-center">
        <h6 class="text-base mb-6 font-weight-medium my-auto d-flex gap-x-2">
          <img
            :src="sectionTitleIcon"
            alt="section title icon"
            height="25"
            width="25"
          >
          <span>
            PRICING PLANS
          </span>
        </h6>
        <h5 class="text-h5 mb-2">
          <span class="font-weight-bold">Tailored Pricing Plans</span> designed for you
        </h5>
        <p
          class="font-weight-medium text-medium-emphasis text-center"
          style="max-inline-size: 600px;"
        >
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
          class="mt-12"
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
            <VCardText class="pa-8">
              <div class="d-flex flex-column gap-y-8">
                <div class="d-flex flex-column  gap-y-3">
                  <h5 class="text-h5 text-center">
                    {{ plan.title }}
                  </h5>

                  <div class="d-flex align-center gap-x-3">
                    <div class="d-flex">
                      <span
                        class="text-h6"
                        style="margin-block-start: 0.35rem;"
                      >
                        $
                      </span>
                      <span class="text-h3 font-weight-bold">
                        {{ plan.price }}
                      </span>
                    </div>
                    <div>
                      <div class="text-body-1 font-weight-medium">
                        Per month
                      </div>
                      <div class="text-caption text-medium-emphasis text-no-wrap">
                        10% off for yearly subscription
                      </div>
                    </div>
                  </div>

                  <img
                    :src="vectorIcon"
                    width="68"
                    height="7"
                    class="ms-2"
                  >
                </div>

                <div class="d-flex flex-column">
                  <VList class="card-list">
                    <VListItem
                      v-for="(item, i) in plan.features"
                      :key="i"
                      class="text-no-wrap"
                    >
                      <template #prepend>
                        <VImg
                          :src="listArrowIcon"
                          :height="16"
                          :width="16"
                          color="primary"
                          class="me-3"
                        />
                      </template>
                      <div class="text-body-1 font-weight-medium text-high-emphasis">
                        {{ item }}
                      </div>
                    </VListItem>
                  </VList>

                  <VDivider class="my-4" />

                  <div class="d-flex align-center justify-space-between flex-wrap gap-2">
                    <div>
                      <div class="text-body-2 font-weight-medium mb-1">
                        {{ plan.supportType }} Support
                      </div>
                      <div class="text-caption text-medium-emphasis">
                        {{ plan.supportMedium }}
                      </div>
                    </div>
                    <VChip
                      variant="tonal"
                      color="primary"
                      density="comfortable"
                      class="font-weight-medium"
                    >
                      {{ plan.respondTime }}
                    </VChip>
                  </div>
                </div>

                <VBtn
                  block
                  :variant="plan.current ? 'elevated' : 'outlined'"
                  :to="{ name: 'front-pages-payment' }"
                >
                  Get Started
                </VBtn>
              </div>
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
