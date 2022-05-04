<template>
  <!-- Delay on open -->
  <v-btn
    variant="outlined"
    color="primary"
  >
    <span>Open Delay On Hover</span>
    <v-tooltip
      open-delay="500"
      anchor="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </v-tooltip>
  </v-btn>
</template>
