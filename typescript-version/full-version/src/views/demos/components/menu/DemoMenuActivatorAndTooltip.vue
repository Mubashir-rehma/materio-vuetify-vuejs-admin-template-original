<script lang="ts" setup>
import { mergeProps } from 'vue'

const items = [{ title: 'Options 1' }, { title: 'Options 2' }, { title: 'Options 3' }, { title: 'Options 4' }]
</script>

<template>
  <VMenu top>
    <template #activator="{ props: menuProps }">
      <VTooltip anchor="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList>
      <VListItem
        v-for="(item, index) in items"
        :key="index"
        :value="index"
      >
        <VListItemTitle>{{ item.title }}</VListItemTitle>
      </VListItem>
    </VList>
  </VMenu>
</template>
