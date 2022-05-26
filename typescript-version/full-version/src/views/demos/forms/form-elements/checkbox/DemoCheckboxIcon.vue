<script lang="ts" setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)
</script>

<template>
  <div class="d-flex flex-wrap">
    <v-checkbox
      v-model="toggleCheckboxOne"
      :label="`${toggleCheckboxOne.toString()}`"
      true-icon="mdi-check"
      false-icon="mdi-close"
    />

    <v-checkbox
      v-model="toggleCheckboxTwo"
      :label="`${toggleCheckboxTwo.toString()}`"
      true-icon="mdi-alarm-check"
      false-icon="mdi-alarm"
      color="success"
    />

    <v-checkbox
      v-model="toggleCheckboxThree"
      :label="`${toggleCheckboxThree.toString()}`"
      true-icon="mdi-check-circle"
      false-icon="mdi-close-circle"
      color="error"
    />
  </div>
</template>
