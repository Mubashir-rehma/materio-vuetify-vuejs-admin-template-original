<script lang="ts" setup>
const selected = ref(['John'])
</script>

<template>
  <div class="d-flex flex-wrap">
    <v-checkbox
      v-model="selected"
      label="John"
      value="John"
    />

    <v-checkbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <v-checkbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
