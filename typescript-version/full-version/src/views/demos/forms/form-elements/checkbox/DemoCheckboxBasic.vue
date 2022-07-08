<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)
</script>

<template>
  <div class="d-flex flex-wrap">
    <VCheckbox
      v-model="checkboxOne"
      :label="`${checkboxOne.toString()}`"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="`${checkboxTwo.toString()}`"
    />
  </div>
</template>
