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
      <v-row class="match-height">
        <v-col
          v-for="result in knowledgeBaseCategories"
          :key="result.character"
          md="4"
          sm="6"
          cols="12"
        >
          <v-card
            class="text-center"
            @click="$router.push({ name: 'pages-knowledge-base-category', params: { category: result.category } })"
          >
            <!-- 👉 image -->
            <div class="page-kb-character-wrapper">
              <v-img
                contain
                class="mx-auto"
                :src="result.character"
              />
            </div>

            <!-- 👉 title -->
            <v-card-header>
              <v-card-header-text>
                <v-card-title class="justify-center">
                  {{ result.title }}
                </v-card-title>
              </v-card-header-text>
            </v-card-header>

            <!-- 👉 description -->
            <v-card-text>
              {{ result.desc }}
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 👉 No result found -->
        <v-col
          v-show="!knowledgeBaseCategories.length"
          cols="12"
          class="text-center"
        >
          <h6 class="text-h6">
            Search result not found!!
          </h6>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<style lang="scss">
@import "@core/scss/pages/knowledge-base";
</style>
