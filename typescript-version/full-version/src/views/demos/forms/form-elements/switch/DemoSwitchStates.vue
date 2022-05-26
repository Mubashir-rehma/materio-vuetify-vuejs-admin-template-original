<script setup lang="ts">
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref('on')
</script>

<template>
  <div class="d-flex flex-wrap demo-space-x">
    <v-switch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <v-switch label="Off" />

    <v-switch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <v-switch
      disabled
      label="Off disabled"
    />

    <v-switch
      v-model="switchOnLoading"
      loading="warning"
      value="on"
      label="On loading"
    />

    <v-switch
      loading="warning"
      label="Off loading"
    />
  </div>
</template>
