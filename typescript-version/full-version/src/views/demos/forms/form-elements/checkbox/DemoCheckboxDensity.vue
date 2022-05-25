<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)
</script>

<template>
  <div class="d-flex flex-wrap">
    <v-checkbox
      v-model="checkboxOne"
      density="compact"
      :label="`${checkboxOne.toString()}`"
      hide-details
    />

    <v-checkbox
      v-model="checkboxTwo"
      density="compact"
      :label="`${checkboxTwo.toString()}`"
      hide-details
    />
  </div>
</template>
