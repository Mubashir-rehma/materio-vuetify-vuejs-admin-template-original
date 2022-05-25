<script lang="ts" setup>
const rating = ref(4.5)
</script>

<template>
  <v-rating v-model="rating">
    <template #item="props">
      <v-icon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'mdi-emoticon-excited-outline' : 'mdi-emoticon-sad-outline'"
      />
    </template>
  </v-rating>
</template>
