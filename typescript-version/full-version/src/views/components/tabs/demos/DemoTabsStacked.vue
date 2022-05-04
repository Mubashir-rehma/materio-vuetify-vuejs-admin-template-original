<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
</script>

<template>
  <v-tabs
    v-model="currentTab"
    grow
    stacked
  >
    <v-tab value="tab-1">
      <v-icon>mdi-phone</v-icon>
      Recents
    </v-tab>

    <v-tab value="tab-2">
      <v-icon>mdi-heart-outline</v-icon>
      Favorites
    </v-tab>

    <v-tab value="tab-3">
      <v-icon>mdi-account-box-outline</v-icon>
      Nearby
    </v-tab>
  </v-tabs>

  <v-window v-model="currentTab">
    <v-window-item
      v-for="i in 3"
      :key="i"
      :value="'tab-' + i"
    >
      <v-card>
        <v-card-text class="pb-0">
          {{ tabItemText }}
        </v-card-text>
      </v-card>
    </v-window-item>
  </v-window>
</template>
