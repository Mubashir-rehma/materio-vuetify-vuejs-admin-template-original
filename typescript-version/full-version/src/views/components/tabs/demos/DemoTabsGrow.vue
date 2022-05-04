<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
</script>

<template>
  <v-tabs
    v-model="currentTab"
    grow
  >
    <v-tab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </v-tab>
  </v-tabs>

  <v-window v-model="currentTab">
    <v-window-item
      v-for="item in items"
      :key="item"
      :value="item"
    >
      <v-card>
        <v-card-text>{{ tabItemText }}</v-card-text>
      </v-card>
    </v-window-item>
  </v-window>
</template>
