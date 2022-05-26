<script lang="ts" setup>
const toggleSwitches = ref(['primary', 'secondary', 'success', 'info', 'warning', 'error'])
</script>

<template>
  <div class="d-flex flex-wrap demo-space-x">
    <v-switch
      v-model="toggleSwitches"
      label="primary"
      value="primary"
      hide-details
    />

    <v-switch
      v-model="toggleSwitches"
      label="secondary"
      color="secondary"
      value="secondary"
      hide-details
    />

    <v-switch
      v-model="toggleSwitches"
      label="success"
      color="success"
      value="success"
      hide-details
    />

    <v-switch
      v-model="toggleSwitches"
      label="info"
      color="info"
      value="info"
      hide-details
    />

    <v-switch
      v-model="toggleSwitches"
      label="warning"
      color="warning"
      value="warning"
      hide-details
    />

    <v-switch
      v-model="toggleSwitches"
      label="error"
      color="error"
      value="error"
      hide-details
    />
  </div>
</template>
