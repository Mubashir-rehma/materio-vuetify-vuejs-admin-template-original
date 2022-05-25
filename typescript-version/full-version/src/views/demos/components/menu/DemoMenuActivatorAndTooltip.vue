<script lang="ts" setup>
import { mergeProps } from 'vue'

const items = [{ title: 'Options 1' }, { title: 'Options 2' }, { title: 'Options 3' }, { title: 'Options 4' }]
</script>

<template>
  <v-menu top>
    <template #activator="{ props: menuProps }">
      <v-tooltip anchor="top">
        <template #activator="{ props: tooltipProps }">
          <v-btn
            v-bind="mergeProps(menuProps, tooltipProps)"
          >
            Dropdown w/ Tooltip
          </v-btn>
        </template>
        <span>I am a Tooltip</span>
      </v-tooltip>
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
