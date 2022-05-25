<script setup lang="ts">
const textareaValue = ref('This is clearable text.')
</script>

<template>
  <v-textarea
    v-model="textareaValue"
    clearable
    clear-icon="mdi-close-circle-outline"
    label="Text"
    hide-details
  />
</template>
