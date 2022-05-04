<script lang="ts" setup>
const items = [{ title: 'Options 1' }, { title: 'Options 2' }, { title: 'Options 3' }]
</script>

<template>
  <v-menu open-on-hover>
    <template #activator="{ props }">
      <v-btn v-bind="props">
        On hover
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
</template>
