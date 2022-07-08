<script lang="ts" setup>
import { useRoute } from 'vue-router'
import axios from '@axios'
import type { KnowledgeBaseQuestionAndAnswer } from '@/@fake-db/types'

const route = useRoute()
const knowledgeBaseQuestionAndAnswer = ref<KnowledgeBaseQuestionAndAnswer>()

const fetchKnowledgeBaseQuestionsAndAnswers = () => {
  return axios.get<KnowledgeBaseQuestionAndAnswer>(`/pages/knowledge-base/categories/questions/${route.params.question}`).then(r => {
    knowledgeBaseQuestionAndAnswer.value = r.data
  })
}

watch(route, fetchKnowledgeBaseQuestionsAndAnswers, { immediate: true })
</script>

<template>
  <VRow id="page-knowledge-base">
    <VCol
      cols="12"
      md="8"
      lg="9"
    >
      <VCard>
        <VImg
          contain
          :src="knowledgeBaseQuestionAndAnswer?.postImg"
        />
        <!-- Post Title -->
        <VCardHeader>
          <VCardHeaderText>
            <VCardTitle class="flex-nowrap">
              <span class="text-break text-h5 font-weight-medium">{{ knowledgeBaseQuestionAndAnswer?.postContent?.title }}</span>
            </VCardTitle>
            <VCardSubtitle>Last updated on {{ knowledgeBaseQuestionAndAnswer?.postContent?.lastUpdated }}</VCardSubtitle>
          </VCardHeaderText>
        </VCardHeader>

        <VCardText v-html="knowledgeBaseQuestionAndAnswer?.postContent?.postDesc" />
      </VCard>
    </VCol>
    <VCol
      cols="12"
      md="4"
      lg="3"
      class="kb-question-related-col"
    >
      <VCard variant="text">
        <VCardHeader class="py-0 px-4">
          <VCardHeaderText>
            <VCardTitle>Related</VCardTitle>
          </VCardHeaderText>
        </VCardHeader>
        <VList style="background: transparent;">
          <VListItem
            v-for="que in knowledgeBaseQuestionAndAnswer?.relatedQuestions"
            :key="que.question"
          >
            <VListItemTitle
              class="text-body-2"
              href="#"
              tag="a"
            >
              {{ que.question }}
            </VListItemTitle>
          </VListItem>
        </VList>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@configured-variables" as layouts_variables;

.kb-question-related-col {
  position: sticky;
  block-size: 100%;

  // 2rem is page-content padding & 12px is col padding
  inset-block-start: calc(layouts_variables.$layout-vertical-nav-navbar-height + 2rem - 12px);
  inset-inline-end: 0;
}
</style>

<route lang="yaml">
meta:
  navActiveLink: pages-knowledge-base
</route>
