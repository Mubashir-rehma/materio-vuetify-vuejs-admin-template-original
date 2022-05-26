<script lang="ts" setup>
const isTooltipVisible = ref(false)
</script>

<template>
  <div class="demo-space-x">
    <v-btn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </v-btn>

    <v-tooltip
      :model-value="isTooltipVisible"
      anchor="top"
    >
      <template #activator="{ props }">
        <v-icon v-bind="props">
          mdi-instagram
        </v-icon>
      </template>
      <span>Programmatic tooltip</span>
    </v-tooltip>
  </div>
</template>
