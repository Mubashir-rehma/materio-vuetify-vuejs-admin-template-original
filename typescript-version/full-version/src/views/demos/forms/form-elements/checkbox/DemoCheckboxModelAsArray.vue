<script lang="ts" setup>
const selected = ref(['John'])
</script>

<template>
  <div class="d-flex flex-wrap">
    <v-checkbox
      v-model="selected"
      label="John"
      color="primary"
      value="John"
      hide-details
    />

    <v-checkbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
      hide-details
    />

    <v-checkbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
      hide-details
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
