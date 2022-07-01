<script setup lang="ts">
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

interface Props {
  title?: string
  subtitle?: string
}

const props = defineProps<Props>()

defineOptions({
  inheritAttrs: false,
})

const themeBackgroundImg = useGenerateImageVariant('@/assets/images/pages/knowledge-base-bg.png')
</script>

<template>
  <!-- 👉 Search Banner  -->
  <v-card
    flat
    class="text-center search-header mb-7"
    :style="`background: url(${themeBackgroundImg});`"
  >
    <v-card-text>
      <h5 class="text-h5 font-weight-medium text-primary">
        {{ props.title }}
      </h5>

      <!-- 👉 Search Input -->
      <v-text-field
        v-bind="$attrs"
        placeholder="Ask a question.."
        class="search-header-input mx-auto my-3"
      >
        <template #prepend-inner>
          <v-icon
            icon="mdi-magnify"
            size="23"
          />
        </template>
      </v-text-field>

      <p>{{ props.subtitle }}</p>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
.search-header {
  padding: 4rem;
  background-size: cover;
}

// search input
.search-header-input {
  background-color: rgb(var(--v-theme-surface));
  border-radius: 0.25rem;
  max-inline-size: 32.125rem;

  .v-field__prepend-inner {
    i {
      inset-block-start: 3px;
    }
  }
}

@media (max-width: 37.5rem) {
  .search-header {
    padding: 1.5rem !important;
  }
}
</style>
