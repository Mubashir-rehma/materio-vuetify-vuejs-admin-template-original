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
]
</script>

<template>
  <VList density="compact">
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item"
    >
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item" />
    </VListItem>
  </VList>
</template>
