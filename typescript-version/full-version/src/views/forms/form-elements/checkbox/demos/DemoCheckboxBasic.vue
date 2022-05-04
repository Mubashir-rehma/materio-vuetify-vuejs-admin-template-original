<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)
</script>

<template>
  <div class="d-flex flex-wrap">
    <v-checkbox
      v-model="checkboxOne"
      hide-details
      :label="`${checkboxOne.toString()}`"
    />

    <v-checkbox
      v-model="checkboxTwo"
      hide-details
      :label="`${checkboxTwo.toString()}`"
    />
  </div>
</template>
