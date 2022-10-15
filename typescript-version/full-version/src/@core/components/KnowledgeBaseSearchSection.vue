<script setup lang="ts">
import knowledgeBaseBgDark from '@/assets/images/pages/knowledge-base-bg-dark.png'
import knowledgeBaseBgLight from '@/assets/images/pages/knowledge-base-bg-light.png'

import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

interface Props {
  title?: string
  subtitle?: string
  customClass?: string
}

const props = defineProps<Props>()

defineOptions({
  inheritAttrs: false,
})

const themeBackgroundImg = useGenerateImageVariant(knowledgeBaseBgLight, knowledgeBaseBgDark)
</script>

<template>
  <!-- 👉 Search Banner  -->
  <VCard
    flat
    class="text-center page-knowledge-base"
    :class="props.customClass"
    :style="`background:url(${themeBackgroundImg})`"
  >
    <VCardText>
      <h5 class="text-h5 font-weight-medium text-primary mb-3">
        {{ props.title }}
      </h5>
      <p>{{ props.subtitle }}</p>

      <!-- 👉 Search Input -->
      <VTextField
        v-bind="$attrs"
        placeholder="Ask a question.."
        class="page-kb-search-input mx-auto"
      >
        <template #prepend-inner>
          <VIcon
            icon="mdi-magnify"
            size="23"
          />
        </template>
      </VTextField>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.page-knowledge-base {
  padding: 5.5rem !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

// search input
.page-kb-search-input {
  background-color: rgb(var(--v-theme-surface));
  border-radius: 0.25rem !important;
  max-inline-size: 28.125rem;

  .v-field__prepend-inner {
    i {
      inset-block-start: 3px !important;
    }
  }
}

@media (max-width: 37.5rem) {
  #page-knowledge-base {
    .page-knowledge-base {
      padding: 1.5rem !important;
    }
  }
}
</style>
