<script lang="ts" setup>
const switch1 = ref(1)
const switch2 = ref('show')
</script>

<template>
  <div class="d-flex flex-wrap demo-space-x">
    <v-switch
      v-model="switch1"
      :label="`${switch1.toString()}`"
      :true-value="1"
      :false-value="0"
      hide-details
    />

    <v-switch
      v-model="switch2"
      :label="`${switch2.toString()}`"
      true-value="show"
      false-value="hide"
      hide-details
    />
  </div>
</template>
