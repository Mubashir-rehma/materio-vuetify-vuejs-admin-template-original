<template>
  <div class="demo-space-x">
    <v-btn color="primary">
      Normal Button
    </v-btn>
    <v-btn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </v-btn>
    <v-btn
      :rounded="0"
      color="success"
    >
      Tile Button
    </v-btn>
    <v-btn
      rounded="pill"
      color="info"
    >
      Pill Button
    </v-btn>
  </div>
</template>
