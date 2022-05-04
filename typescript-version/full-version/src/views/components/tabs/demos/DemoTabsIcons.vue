<template>
  <v-tabs
    next-icon="mdi-arrow-right"
    prev-icon="mdi-arrow-left"
    show-arrows
  >
    <v-tab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </v-tab>
  </v-tabs>
</template>
