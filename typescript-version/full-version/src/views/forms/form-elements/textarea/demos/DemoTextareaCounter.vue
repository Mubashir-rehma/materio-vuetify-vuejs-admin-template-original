<script lang="ts" setup>
const textareaValue = ref('Hello!')
</script>

<template>
  <v-textarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
