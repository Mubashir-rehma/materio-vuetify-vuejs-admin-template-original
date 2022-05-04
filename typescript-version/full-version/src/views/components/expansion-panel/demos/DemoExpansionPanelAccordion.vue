<template>
  <v-expansion-panels variant="accordion">
    <v-expansion-panel
      v-for="item in 4"
      :key="item"
    >
      <v-expansion-panel-title>
        Accordion {{ item }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie.
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
