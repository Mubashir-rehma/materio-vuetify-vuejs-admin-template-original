<script lang="ts" setup>
const checkbox = ref(1)
const checkboxString = ref('show')
</script>

<template>
  <div class="d-flex flex-wrap">
    <v-checkbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="`${checkbox.toString()}`"
    />

    <v-checkbox
      v-model="checkboxString"
      true-value="show"
      false-value="hide"
      color="success"
      :label="`${checkboxString.toString()}`"
    />
  </div>
</template>
