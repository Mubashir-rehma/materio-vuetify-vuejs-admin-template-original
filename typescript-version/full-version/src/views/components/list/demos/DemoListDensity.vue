<script lang="ts" setup>
const items = [
  'halvah icing marshmallow',
  'Cake caramels donut danish muffin biscuit',
  'Chocolate cake pie lollipop',
  'Apple pie toffee pudding gummi bears',
  'Jujubes chupa chups cheesecake tart',
  'Candy fruitcake bonbon sesame snaps dessert',
  'Candy wafer tiramisu sugar plum sweet.',
  'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.',
  'Chocolate powder macaroon soufflé cupcake bear claw tart.',
  'Danish candy candy danish dessert gummi bears cupcake marshmallow.',
]
</script>

<template>
  <v-list density="compact">
    <v-list-item-group>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
      >
        <v-list-item-title v-text="item" />
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
