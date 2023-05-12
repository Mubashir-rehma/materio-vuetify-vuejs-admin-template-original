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
        size="40"
        rounded
        class="elevation-2 me-3"
        style="background-color: rgb(var(--v-theme-surface));"
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
            <VIcon
              :icon="isPositive ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              size="24"
            />
            <span class="text-xs">{{ Math.abs(props.change) }}%</span>
          </div>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.skin--bordered {
  .v-avatar {
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)) !important;
    box-shadow: none !important;
  }
}
</style>
