<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
</script>

<template>
  <v-btn
    color="primary"
    @click="isSnackbarVisibility = true"
  >
    Open Snackbar
  </v-btn>

  <!-- Snackbar -->
  <v-snackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <v-btn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
