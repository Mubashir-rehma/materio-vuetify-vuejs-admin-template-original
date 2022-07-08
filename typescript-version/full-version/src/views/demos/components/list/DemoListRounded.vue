<script lang="ts" setup>
const items = [
  { text: 'Cupcake sesame snaps dessert marzipan.', icon: 'mdi-instagram' },
  { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: 'mdi-facebook' },
  { text: 'Bonbon macaroon gummies pie jelly', icon: 'mdi-twitter' },
]
</script>

<template>
  <VList>
    <VListItemGroup>
      <VListItem
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        rounded="xl"
      >
        <VListItemAvatar start>
          <VIcon :icon="item.icon" />
        </VListItemAvatar>
        <VListItemTitle v-text="item.text" />
      </VListItem>
    </VListItemGroup>
  </VList>
</template>
