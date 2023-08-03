<script setup lang="ts">
import sectionTitleIcon from '@images/pages/section-title-icon.png'

const featuresData = [
  { title: 'Quality Code', desc: 'Code structure that all developers will easily understand and fall in love with.', icon: 'custom-laptop-charging' },
  { title: 'Continuous Updates', desc: 'Free updates for the next 12 months, including new demos and features.', icon: 'custom-transition-up' },
  { title: 'Starter Kit', desc: 'Start your project quickly without having to remove unnecessary features.', icon: 'custom-edit' },
  { title: 'API Ready', desc: 'Just change the endpoint and see your own data loaded within seconds.', icon: 'custom-3d-select-solid' },
  { title: 'Excellent Support', desc: 'An easy-to-follow doc with lots of references and code examples.', icon: 'custom-lifebelt' },
  { title: 'Well Documented', desc: 'An easy-to-follow doc with lots of references and code examples.', icon: 'custom-google-docs' },
]
</script>

<template>
  <VContainer id="features">
    <div class="feature-cards">
      <div class="headers d-flex justify-center flex-column align-center">
        <h6 class="text-base mb-6 font-weight-medium my-auto d-flex gap-x-2">
          <img
            :src="sectionTitleIcon"
            alt="section title icon"
            height="20"
            width="20"
          >
          <span>
            USEFUL FEATURES
          </span>
        </h6>
        <h5 class="text-h5 mb-2">
          <span class="font-weight-bold">Everything you need</span>  to start your next project
        </h5>
        <p>Not just a set of tools, the package includes ready-to-deploy conceptual application.</p>
      </div>

      <div class="d-flex flex-wrap gap-x-20 gap-y-10 align-center justify-center">
        <div
          v-for="(data, index) in featuresData"
          :key="index"
          class="text-center"
          style="max-width: 310px;"
        >
          <VAvatar
            size="82"
            class="border border-primary mb-4"
          >
            <VIcon
              :icon="data.icon"
              size="42"
              color="primary"
            />
          </VAvatar>

          <h6 class="text-h6 mb-1">
            {{ data.title }}
          </h6>

          <p class="text-wrap">
            {{ data.desc }}
          </p>
        </div>
      </div>
    </div>
  </VContainer>
</template>

<style lang="scss" scoped>
.feature-cards {
  margin-block-end: 5.25rem;
}
</style>
