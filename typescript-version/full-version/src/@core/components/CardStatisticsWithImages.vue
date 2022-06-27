<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
  stats: string
  change: number
  image: string
  color?: string
}

const prop = withDefaults(defineProps<Props>(), {
  color: 'primary',
})

const isPositive = controlledComputed(() => prop.change, () => Math.sign(prop.change) === 1)
</script>

<template>
  <v-card>
    <div class="d-flex position-relative">
      <v-card-text>
        <h6 class="text-body-1 font-weight-semibold mb-4">
          {{ prop.title }}
        </h6>
        <div class="d-flex align-center flex-wrap mb-4">
          <h5 class="text-h5 font-weight-semibold me-2">
            {{ prop.stats }}
          </h5>
          <span
            class="text-caption"
            :class="isPositive ? 'text-success' : 'text-error'"
          >
            {{ isPositive ? `+${prop.change}` : prop.change }}%
          </span>
        </div>

        <v-chip
          v-if="prop.subtitle"
          size="small"
          :color="prop.color"
        >
          {{ prop.subtitle }}
        </v-chip>
      </v-card-text>

      <v-spacer />

      <div class="illustrator-img">
        <v-img
          v-if="prop.image"
          :src="prop.image"
          :width="110"
        />
      </div>
    </div>
  </v-card>
</template>

<style lang="scss">
.illustrator-img {
  position: absolute;
  inset-block-end: 0;
  inset-inline-end: 5%;
}
</style>
