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
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <v-btn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
