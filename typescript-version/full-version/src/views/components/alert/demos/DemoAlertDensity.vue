<template>
  <v-alert
    density="compact"
    color="info"
    variant="contained-text"
  >
    I'm a compact alert with a <strong>color</strong> of info.
  </v-alert>

  <v-alert
    density="comfortable"
    color="success"
    variant="contained-text"
  >
    I'm a comfortable alert with the <strong>variant</strong> prop and a <strong>color</strong> of success.
  </v-alert>

  <v-alert
    density="default"
    color="warning"
    variant="contained-text"
  >
    I'm a default alert with the <strong>border</strong> prop and a <strong>color</strong> of warning.
  </v-alert>

  <!-- Density is "default" by default -->
  <v-alert
    prominent
    color="error"
    variant="contained-text"
    class="mb-0"
  >
    I'm a default alert with the <strong>prominent</strong> prop and a <strong>color</strong> of error
  </v-alert>
</template>
