<script setup lang="ts">
import sectionTitleIcon from '@images/pages/section-title-icon.png'
import selectSolid from '@images/svg/3d-select-solid.svg?url'
import edit from '@images/svg/edit.svg?url'
import googleDocs from '@images/svg/google-docs.svg?url'
import laptopCharging from '@images/svg/laptop-charging.svg?url'
import lifebelt from '@images/svg/lifebelt.svg?url'
import transitionUp from '@images/svg/transition-up.svg?url'

const featuresData = [
  { title: 'Quality Code', desc: 'Code structure that all developers will easily understand and fall in love with.', img: laptopCharging },
  { title: 'Continuous Updates', desc: 'Free updates for the next 12 months, including new demos and features.', img: transitionUp },
  { title: 'Starter Kit', desc: 'Start your project quickly without having to remove unnecessary features.', img: edit },
  { title: 'API Ready', desc: 'Just change the endpoint and see your own data loaded within seconds.', img: selectSolid },
  { title: 'Well Documented', desc: 'An easy-to-follow doc with lots of references and code examples.', img: lifebelt },
  { title: 'Excellent Support', desc: 'An easy-to-follow doc with lots of references and code examples.', img: googleDocs },
]
</script>

<template>
  <VContainer id="features">
    <div class="feature-cards">
      <div class="headers d-flex justify-center flex-column align-center mb-6">
        <h6 class="text-base mb-6 font-weight-medium my-auto d-flex gap-x-3">
          <img
            :src="sectionTitleIcon"
            alt="section title icon"
            height="25"
            width="25"
          >
          <span>
            USEFUL FEATURES
          </span>
        </h6>
        <h5 class="text-h5 mb-2">
          <span class="font-weight-bold">Everything you need</span>  to start your next project
        </h5>
        <p class="font-weight-medium text-medium-emphasis">
          Not just a set of tools, the package includes ready-to-deploy conceptual application.
        </p>
      </div>

      <VRow>
        <VCol
          v-for="(data, index) in featuresData"
          :key="index"
          cols="6"
          md="4"
        >
          <div class="feature d-flex flex-column gap-y-2 align-center justify-center mt-2">
            <VAvatar
              variant="outlined"
              size="84"
              color="primary"
              class="mb-2"
            >
              <VImg
                :src="data.img"
                height="42"
                width="42"
              />
            </VAvatar>

            <h6 class="text-h6">
              {{ data.title }}
            </h6>
            <p
              class="text-center text-medium-emphasis"
              style="max-inline-size: 360px;"
            >
              {{ data.desc }}
            </p>
          </div>
        </VCol>
      </VRow>
    </div>
  </VContainer>
</template>

<style lang="scss" scoped>
.feature-cards {
  margin-block-end: 4.25rem;
}
</style>

<style lang="scss">
.feature{
  .v-avatar{
    &.v-avatar--variant-outlined{
      border: 2px solid rgba(var(--v-theme-primary), 0.32);

      &:hover{
        background: rgba(var(--v-theme-primary), 0.08);
        cursor: pointer;
      }
    }
  }
}
</style>
