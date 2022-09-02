<script setup lang="ts">
import { kFormatter } from '@core/utils/formatters'

interface Props {
  title: string
  color?: string
  icon: string
  stats: number
  change: number
}

const prop = withDefaults(defineProps<Props>(), {
  color: 'primary',
})

const isPositive = controlledComputed(() => prop.change, () => Math.sign(prop.change) === 1)
</script>

<template>
  <VCard
    variant="text"
    border
  >
    <VCardText class="d-flex align-center">
      <VAvatar
        size="44"
        rounded
        :class="`text-${prop.color} elevation-1 me-4`"
        style="background-color: rgb(var(--v-theme-surface));"
      >
        <VIcon
          :icon="prop.icon"
          :size="24"
        />
      </VAvatar>

      <div>
        <span class="text-caption">{{ prop.title }}</span>
        <div class="d-flex align-center flex-wrap">
          <span class="text-h6 font-weight-medium">{{ kFormatter(prop.stats) }}</span>
          <div
            v-if="prop.change"
            :class="`${isPositive ? 'text-success' : 'text-error'} mt-1`"
          >
            <VIcon :icon="isPositive ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
            <span class="text-xs">{{ Math.abs(prop.change) }}%</span>
          </div>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>
