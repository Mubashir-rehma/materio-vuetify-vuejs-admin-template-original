<script lang="ts" setup>
const currentTab = ref(0)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
</script>

<template>
  <v-tabs
    v-model="currentTab"
    grow
  >
    <v-tab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </v-tab>
  </v-tabs>

  <v-window v-model="currentTab">
    <v-window-item
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      <v-card>
        <v-card-text>{{ tabItemText }}</v-card-text>
      </v-card>
    </v-window-item>
  </v-window>

  <div class="text-center">
    <v-btn
      variant="text"
      color="primary"
      @click="preTab"
    >
      Previous
    </v-btn>

    <v-divider
      class="mx-4"
      vertical
    />

    <v-btn
      color="primary"
      variant="text"
      @click="nextTab"
    >
      Next
    </v-btn>
  </div>
</template>
