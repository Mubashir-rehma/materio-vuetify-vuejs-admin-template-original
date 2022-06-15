<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <!-- 👉 Search Banner  -->
  <v-card
    flat
    class="text-center page-knowledge-base-bg mb-7"
  >
    <v-card-text>
      <h5 class="text-h5 font-weight-medium text-primary mb-3">
        Hello, how can we help?
      </h5>
      <p>or choose a category to quickly find the help you need</p>

      <!-- 👉 Search Input -->
      <v-text-field
        v-bind="$attrs"
        placeholder="Ask a question.."
        class="page-kb-search-input mx-auto"
      >
        <template #prependInner>
          <v-icon
            icon="mdi-magnify"
            size="23"
          />
        </template>
      </v-text-field>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
@use "@core/scss/mixins" as mixins;

.page-knowledge-base-bg {
  padding: 5.5rem;

  // generate image variants for themes
  @include mixins.gen-img-variants(
    $property:"background-image",
    $light: url("@/assets/images/pages/knowledge-base-bg-light.png"),
    $dark: url("@/assets/images/pages/knowledge-base-bg-dark.png"),
    $important: false,
  );

  background-size: cover;
}

// search input
.page-kb-search-input {
  background-color: rgb(var(--v-theme-surface));
  border-radius: 0.25rem;
  max-inline-size: 28.125rem;

  .v-field__prepend-inner {
    i {
      inset-block-start: 3px;
    }
  }
}

@media (max-width: 37.5rem) {
  #page-knowledge-base {
    .page-knowledge-base-bg {
      padding: 1.5rem !important;
    }
  }
}
</style>
