<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
</script>

<template>
  <v-tabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <v-tab>Tab One</v-tab>
    <v-tab>Tab Two</v-tab>
    <v-tab>Tab Three</v-tab>
  </v-tabs>

  <v-window v-model="currentTab">
    <v-window-item
      v-for="item in 3"
      :key="item"
    >
      <v-card>
        <v-card-text
          class="pb-0"
          v-text="tabItemContent"
        />
      </v-card>
    </v-window-item>
  </v-window>
</template>
