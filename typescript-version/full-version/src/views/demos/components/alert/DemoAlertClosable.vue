<script lang="ts" setup>
const isAlertVisible = ref(true)
</script>

<template>
  <v-alert
    v-model="isAlertVisible"
    closable
    close-label="Close Alert"
    color="primary"
  >
    Pudding wafer I love chocolate bar wafer chupa chups wafer. Cake gummies pudding gummies cake.
  </v-alert>

  <!-- Button -->
  <div class="text-center">
    <v-btn
      v-if="!isAlertVisible"
      color="primary"
      @click="isAlertVisible = true"
    >
      Reset
    </v-btn>
  </div>
</template>
