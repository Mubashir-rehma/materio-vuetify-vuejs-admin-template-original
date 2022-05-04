<script lang="ts" setup>
const items = [
  { text: 'Cupcake sesame snaps dessert marzipan.', icon: 'mdi-instagram' },
  { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: 'mdi-facebook' },
  { text: 'Bonbon macaroon gummies pie jelly', icon: 'mdi-twitter' },
]
</script>

<template>
  <v-list>
    <v-list-item-group>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        rounded="shaped"
      >
        <v-list-item-avatar start>
          <v-icon :icon="item.icon" />
        </v-list-item-avatar>
        <v-list-item-title v-text="item.text" />
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
