<template>
  <v-expansion-panels variant="popout">
    <v-expansion-panel
      v-for="item in 4"
      :key="item"
    >
      <v-expansion-panel-title>Popout {{ item }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes gummi bears ice cream. Cheesecake tiramisu toffee cheesecake sugar plum candy canes bonbon candy.
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
