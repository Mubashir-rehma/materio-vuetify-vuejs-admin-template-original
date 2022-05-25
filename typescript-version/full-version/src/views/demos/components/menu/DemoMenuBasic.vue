<script lang="ts" setup>
const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
const items = [{ title: 'Option 1' }, { title: 'Option 2' }, { title: 'Option 3' }]
</script>

<template>
  <div class="demo-space-x">
    <v-menu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <v-btn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
