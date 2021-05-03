<template>
  <div class="demo-space-x">
    <!-- shaped toggle btn -->
    <v-btn
      color="primary"
      @click="isShapedSnackbarVisible = true"
    >
      shaped
    </v-btn>

    <!-- shaped snackbar -->
    <v-snackbar
      v-model="isShapedSnackbarVisible"
      shaped
      top
    >
      Donut sweet marshmallow cookie bonbon pastry tootsie roll.
    </v-snackbar>

    <!-- rounded toggle btn-->
    <v-btn
      color="primary"
      @click="isRoundedSnackbarVisible = true"
    >
      Rounded
    </v-btn>

    <!-- rounded snackbar -->
    <v-snackbar
      v-model="isRoundedSnackbarVisible"
      rounded="pill"
      top
      right
    >
      Jelly chocolate bar candy canes apple pie.
    </v-snackbar>

    <!-- color toggle btn-->
    <v-btn
      color="primary"
      @click="isColorSnackbarVisible = true"
    >
      Color
    </v-btn>

    <!-- color snackbar -->
    <v-snackbar
      v-model="isColorSnackbarVisible"
      bottom
      right
      color="primary"
    >
      Ice cream cake candy canes.
    </v-snackbar>

    <!-- text toggle btn-->
    <v-btn
      color="primary"
      @click="isTextSnackbarVisible = true"
    >
      Text
    </v-btn>

    <!-- text snackbar -->
    <v-snackbar
      v-model="isTextSnackbarVisible"
      bottom
      text
      color="primary"
    >
      Pie icing biscuit soufflé liquorice topping.
    </v-snackbar>

    <!-- outline toggle btn-->
    <v-btn
      color="primary"
      @click="isOutlinedSnackbarVisible = true"
    >
      Outlined
    </v-btn>

    <!-- outline snackbar -->
    <v-snackbar
      v-model="isOutlinedSnackbarVisible"
      left
      bottom
      outlined
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </v-snackbar>

    <!-- Tile toggle btn-->
    <v-btn
      color="primary"
      @click="isTileSnackbarVisible = true"
    >
      Tile
    </v-btn>

    <!-- tile snackbar -->
    <v-snackbar
      v-model="isTileSnackbarVisible"
      top
      left
      tile
    >
      Dessert tootsie wafer ice cream toffee jelly-o.
    </v-snackbar>

    <!-- Light Snackbar -->
    <v-btn
      color="primary"
      @click="isSnackbarLightVisible = true"
    >
      Light
    </v-btn>

    <v-snackbar
      v-model="isSnackbarLightVisible"
      color="white"
      content-class="text--secondary"
      top
    >
      Hello, I'm a light snackbar
    </v-snackbar>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isShapedSnackbarVisible = ref(false)
    const isRoundedSnackbarVisible = ref(false)
    const isColorSnackbarVisible = ref(false)
    const isTextSnackbarVisible = ref(false)
    const isOutlinedSnackbarVisible = ref(false)
    const isTileSnackbarVisible = ref(false)
    const isSnackbarLightVisible = ref(false)

    return {
      isShapedSnackbarVisible,
      isRoundedSnackbarVisible,
      isColorSnackbarVisible,
      isTextSnackbarVisible,
      isOutlinedSnackbarVisible,
      isTileSnackbarVisible,
      isSnackbarLightVisible,
    }
  },
}
</script>
