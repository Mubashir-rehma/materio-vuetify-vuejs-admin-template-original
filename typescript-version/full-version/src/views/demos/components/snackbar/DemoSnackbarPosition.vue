<script lang="ts" setup>
const isSnackbarTopLeftVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopRightVisible = ref(false)
const isSnackbarBottomRightVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomLeftVisible = ref(false)
const isSnackbarRightVisible = ref(false)
const isSnackbarLeftVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
</script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <v-btn
      icon
      size="x-small"
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarTopVisible"
      top
    >
      I'm a top snackbar.
    </v-snackbar>

    <!-- top right -->
    <v-btn
      icon
      size="x-small"
      variant="text"
      @click="isSnackbarTopRightVisible = true"
    >
      <v-icon>mdi-arrow-top-right</v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarTopRightVisible"
      right
      top
    >
      I'm a top right snackbar.
    </v-snackbar>

    <!-- center right -->
    <v-btn
      icon
      size="x-small"
      variant="text"
      @click="isSnackbarRightVisible = true"
    >
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarRightVisible"
      right
      centered
    >
      I'm a center right snackbar.
    </v-snackbar>

    <!-- bottom right -->
    <v-btn
      icon
      size="x-small"
      variant="text"
      @click="isSnackbarBottomRightVisible = true"
    >
      <v-icon>mdi-arrow-bottom-right</v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarBottomRightVisible"
      right
    >
      I'm a bottom right snackbar.
    </v-snackbar>

    <!-- bottom -->
    <v-btn
      icon
      size="x-small"
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <v-icon>mdi-arrow-down</v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarBottomVisible"
    >
      I'm a bottom snackbar.
    </v-snackbar>

    <!-- bottom left -->
    <v-btn
      icon
      size="x-small"
      variant="text"
      @click="isSnackbarBottomLeftVisible = true"
    >
      <v-icon>mdi-arrow-bottom-left</v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarBottomLeftVisible"
      left
    >
      I'm a bottom left snackbar.
    </v-snackbar>

    <!-- center left -->
    <v-btn
      icon
      size="x-small"
      variant="text"
      @click="isSnackbarLeftVisible = true"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarLeftVisible"
      centered
      left
    >
      I'm a center left snackbar.
    </v-snackbar>

    <!-- top left -->
    <v-btn
      icon
      size="x-small"
      variant="text"
      @click="isSnackbarTopLeftVisible = true"
    >
      <v-icon>mdi-arrow-top-left</v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarTopLeftVisible"
      top
      left
    >
      I'm a top left snackbar.
    </v-snackbar>

    <!-- center -->
    <v-btn
      icon
      size="x-small"
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <v-icon>mdi-arrow-collapse-all</v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarCenteredVisible"
      centered
    >
      I'm a center snackbar.
    </v-snackbar>
  </div>
</template>
