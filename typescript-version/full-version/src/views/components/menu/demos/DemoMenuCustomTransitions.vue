<script lang="ts" setup>
const items = [{ title: 'Options 1' }, { title: 'Options 2' }, { title: 'Options 3' }, { title: 'Options 4' }]
</script>

<template>
  <div class="demo-space-x">
    <v-menu transition="scale-transition">
      <template #activator="{ props }">
        <v-btn v-bind="props">
          Scale Transition
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu transition="slide-x-transition">
      <template #activator="{ props }">
        <v-btn v-bind="props">
          Slide X Transition
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu transition="slide-y-transition">
      <template #activator="{ props }">
        <v-btn v-bind="props">
          Slide Y Transition
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
