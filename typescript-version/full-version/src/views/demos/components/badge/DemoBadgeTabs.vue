<script setup lang="ts">
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
</script>

<template>
  <v-tabs grow>
    <v-tab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <v-badge
        :content="tab.badge"
        :offset-x="-12"
        :offset-y="-4"
      >
        {{ tab.content }}
      </v-badge>
    </v-tab>
  </v-tabs>
</template>
