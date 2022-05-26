<script lang="ts" setup>
const isSnackbarVisible = ref(false)
</script>

<template>
  <v-btn @click="isSnackbarVisible = true">
    Open Snackbar
  </v-btn>

  <!-- SnackBar -->
  <v-snackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </v-snackbar>
</template>
