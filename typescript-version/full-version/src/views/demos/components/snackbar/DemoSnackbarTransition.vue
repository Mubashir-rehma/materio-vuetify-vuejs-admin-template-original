<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
</script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <v-btn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </v-btn>

    <v-snackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </v-snackbar>

    <!-- scale -->
    <v-btn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </v-btn>

    <v-snackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
    >
      I'm a scale transition snackbar.
    </v-snackbar>

    <!-- scroll y reverse -->
    <v-btn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </v-btn>

    <v-snackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </v-snackbar>
  </div>
</template>
