<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
</script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon>mdi-phone</VIcon>
      Recents
    </VTab>

    <VTab value="tab-2">
      <VIcon>mdi-heart-outline</VIcon>
      Favorites
    </VTab>

    <VTab value="tab-3">
      <VIcon>mdi-account-box-outline</VIcon>
      Nearby
    </VTab>
  </VTabs>

  <VWindow v-model="currentTab">
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="`tab-${i}`"
    >
      <VCard>
        <VCardText class="pb-0">
          {{ tabItemText }}
        </VCardText>
      </VCard>
    </VWindowItem>
  </VWindow>
</template>
