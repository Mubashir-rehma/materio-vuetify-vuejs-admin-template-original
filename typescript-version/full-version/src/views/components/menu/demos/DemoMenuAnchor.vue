<script lang="ts" setup>
const items = [{ title: 'Options 1' }, { title: 'Options 2' }, { title: 'Options 3' }]
</script>

<template>
  <div class="demo-space-x">
    <v-menu anchor="top">
      <template #activator="{ props }">
        <v-btn v-bind="props">
          Top
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu anchor="bottom">
      <template #activator="{ props }">
        <v-btn v-bind="props">
          Bottom
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu anchor="start">
      <template #activator="{ props }">
        <v-btn v-bind="props">
          Start
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu anchor="end">
      <template #activator="{ props }">
        <v-btn v-bind="props">
          End
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
