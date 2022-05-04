<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isContainedTextSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
</script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn-->
    <v-btn
      color="primary"
      @click="isDefaultSnackbarVisible = true"
    >
      Default
    </v-btn>

    <!-- Default snackbar -->
    <v-snackbar
      v-model="isDefaultSnackbarVisible"
      top
      left
    >
      Jelly chocolate bar candy canes apple pie.
    </v-snackbar>

    <!-- Contained-text toggle btn-->
    <v-btn
      color="primary"
      @click="isContainedTextSnackbarVisible = true"
    >
      Contained-text
    </v-btn>

    <!-- Contained-text snackbar -->
    <v-snackbar
      v-model="isContainedTextSnackbarVisible"
      top
      right
      variant="contained-text"
    >
      Ice cream cake candy canes.
    </v-snackbar>

    <!-- Text toggle btn-->
    <v-btn
      color="primary"
      @click="isTextSnackbarVisible = true"
    >
      Text
    </v-btn>

    <!-- Text snackbar -->
    <v-snackbar
      v-model="isTextSnackbarVisible"
      centered
      right
      variant="text"
      color="primary"
    >
      Pie icing biscuit soufflé liquorice topping.
    </v-snackbar>

    <!-- Outline toggle btn-->
    <v-btn
      color="primary"
      @click="isOutlinedSnackbarVisible = true"
    >
      Outlined
    </v-btn>

    <!-- Outline snackbar -->
    <v-snackbar
      v-model="isOutlinedSnackbarVisible"
      right
      bottom
      outlined
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </v-snackbar>
  </div>
</template>
