<script lang="ts" setup>

const isAlertVisible = ref(true)

</script>

<template>
  <v-alert
    v-model="isAlertVisible"
    closable
    close-label="Close Alert"
    color="primary"
    class="mb-0"
  >
    Pudding wafer I love chocolate bar wafer chupa chups wafer. Cake gummies pudding gummies cake.
  </v-alert>

  <!-- Button -->
  <div class="text-center">
    <v-btn
      v-if="!isAlertVisible"
      color="primary"
      dark
      @click="isAlertVisible = true"
    >
      Reset
    </v-btn>
  </div>
</template>
