<script setup lang="ts">
import type { KnowledgeBaseCategory } from '@/@fake-db/types'
import axios from '@axios'
import KnowledgeBaseSearchSectionVue from '@core/components/KnowledgeBaseSearchSection.vue'

const knowledgeBaseSearchQuery = ref('')
const knowledgeBaseCategories = ref<KnowledgeBaseCategory[]>([])

// fetching data from the @fake-db
const fetchKnowledgeBaseData = () => {
  return axios.get<KnowledgeBaseCategory[]>('/pages/knowledge-base/categories', {
    params: {
      q: knowledgeBaseSearchQuery.value,
    },
  }).then(r => {
    knowledgeBaseCategories.value = r.data
  })
}

// watching the search query to fetch the data again
watch(knowledgeBaseSearchQuery, fetchKnowledgeBaseData, { immediate: true })
</script>

<template>
  <section id="page-knowledge-base">
    <!-- 👉 Search Section -->
    <KnowledgeBaseSearchSectionVue v-model="knowledgeBaseSearchQuery" />

    <!-- 👉 Kb Search  content -->
    <div id="knowledge-base-content">
      <VRow class="match-height">
        <VCol
          v-for="result in knowledgeBaseCategories"
          :key="result.character"
          md="4"
          sm="6"
          cols="12"
        >
          <VCard
            class="text-center"
            @click="$router.push({ name: 'pages-knowledge-base-category', params: { category: result.category } })"
          >
            <!-- 👉 image -->
            <div class="page-kb-character-wrapper">
              <VImg
                contain
                class="mx-auto"
                :src="result.character"
              />
            </div>

            <!-- 👉 title -->
            <VCardHeader>
              <VCardHeaderText>
                <VCardTitle class="justify-center">
                  {{ result.title }}
                </VCardTitle>
              </VCardHeaderText>
            </VCardHeader>

            <!-- 👉 description -->
            <VCardText>
              {{ result.desc }}
            </VCardText>
          </VCard>
        </VCol>

        <!-- 👉 No result found -->
        <VCol
          v-show="!knowledgeBaseCategories.length"
          cols="12"
          class="text-center"
        >
          <h6 class="text-h6">
            Search result not found!!
          </h6>
        </VCol>
      </VRow>
    </div>
  </section>
</template>

<style lang="scss">
@import "@core/scss/pages/knowledge-base";
</style>
