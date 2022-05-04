<script lang="ts" setup>
const isSnackbarVisible = ref(false)
</script>

<template>
  <v-btn
    color="primary"
    @click="isSnackbarVisible = true"
  >
    Open Snackbar
  </v-btn>

  <!-- Snackbar -->
  <v-snackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </v-snackbar>
</template>
