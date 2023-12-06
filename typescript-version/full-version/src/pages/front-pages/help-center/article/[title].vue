<script setup lang="ts">
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import type { HelpCenterArticle } from '@db/pages/help-center/types'

definePage({
  meta: {
    layout: 'blank',
  },
})

const articleData = ref<HelpCenterArticle>()

const { data, error } = await useApi<any>('/pages/help-center/article')

if (error.value)
  console.log(error.value)
else
  articleData.value = data.value
</script>

<template>
  <div class="bg-surface">
    <!-- 👉 Navbar  -->
    <Navbar />

    <!-- 👉 Content -->
    <VContainer>
      <VRow class="mt-4">
        <VCol
          cols="12"
          md="8"
        >
          <div class="mt-16">
            <VBreadcrumbs
              class="px-0 py-3"
              :items="[{ title: 'Help Center', to: { name: 'front-pages-help-center' } }, { title: 'how to add product in cart' }]"
            />

            <h5 class="text-h5 mb-3">
              {{ articleData?.title }}
            </h5>

            <div class="text-sm">
              {{ articleData?.lastUpdated }}
            </div>
          </div>

          <VDivider class="my-8" />

          <div
            class="mb-8"
            v-html="articleData?.productContent"
          />

          <VImg
            class="rounded-lg"
            :src="articleData?.productImg"
          />

          <p class="my-8">
            {{ articleData?.checkoutContent }}
          </p>

          <VImg
            class="rounded-lg"
            :src="articleData?.checkoutImg"
          />
        </VCol>

        <VCol
          cols="12"
          md="4"
        >
          <div class="mt-16">
            <VTextField
              prepend-inner-icon="ri-search-line"
              placeholder="Search..."
              class="pt-2 mb-8"
            />

            <div>
              <!-- 👉 Article List  -->
              <h6
                class="text-h6 px-4 py-2 mb-4 rounded"
                style="background: rgba(58, 53, 65, 4%);"
              >
                Articles in this section
              </h6>

              <VList class="card-list">
                <VListItem
                  v-for="(item, index) in articleData?.articleList"
                  :key="index"
                  link
                  append-icon="ri-arrow-right-s-line"
                >
                  {{ item }}
                </VListItem>
              </VList>
            </div>
          </div>
        </VCol>
      </VRow>
    </VContainer>

    <!-- 👉 Footer  -->
    <Footer class="mt-15" />
  </div>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1rem;
}
</style>
