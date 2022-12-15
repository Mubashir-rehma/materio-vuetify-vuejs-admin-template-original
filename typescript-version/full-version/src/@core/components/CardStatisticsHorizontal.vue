<script setup lang="ts">
import { kFormatter } from '@core/utils/formatters'

interface Props {
  title: string
  color?: string
  icon: string
  stats: number
  change: number
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
})

const isPositive = controlledComputed(() => props.change, () => Math.sign(props.change) === 1)
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
        class="elevation-2 me-4"
        style="background-color: #fff;"
      >
        <VIcon
          :color="props.color"
          :icon="props.icon"
          :size="24"
        />
      </VAvatar>

      <div>
        <span class="text-caption">{{ props.title }}</span>
        <div class="d-flex align-center flex-wrap">
          <span class="text-h6">{{ kFormatter(props.stats) }}</span>
          <div
            v-if="props.change"
            :class="`${isPositive ? 'text-success' : 'text-error'} mt-1`"
          >
            <VIcon :icon="isPositive ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
            <span class="text-xs">{{ Math.abs(props.change) }}%</span>
          </div>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>
