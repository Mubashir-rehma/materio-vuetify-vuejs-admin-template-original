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
  <v-card>
    <v-card-text class="d-flex align-center">
      <div class="me-4">
        <v-avatar
          size="44"
          rounded
          :class="`v-avatar-light-bg text-${prop.color}`"
        >
          <v-icon
            :icon="prop.icon"
            size="30"
          />
        </v-avatar>
      </div>

      <div>
        <span class="text-caption">{{ prop.title }}</span>
        <div class="d-flex align-center flex-wrap">
          <span class="text-h6 font-weight-semibold">{{ kFormatter(prop.stats) }}</span>
          <div
            v-if="prop.change"
            :class="`${isPositive ? 'text-success' : 'text-error'} mt-1`"
          >
            <v-icon :icon="isPositive ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
            <span class="text-caption font-weight-semibold">{{ Math.abs(prop.change) }}%</span>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
