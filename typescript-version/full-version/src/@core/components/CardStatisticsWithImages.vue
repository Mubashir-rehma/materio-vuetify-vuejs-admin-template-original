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
  <VCard class="overflow-visible">
    <div class="d-flex position-relative">
      <VCardText>
        <h6 class="text-base font-weight-semibold mb-4">
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

        <VChip
          v-if="prop.subtitle"
          size="small"
          :color="prop.color"
        >
          {{ prop.subtitle }}
        </VChip>
      </VCardText>

      <VSpacer />

      <div class="illustrator-img">
        <VImg
          v-if="prop.image"
          :src="prop.image"
          :width="110"
        />
      </div>
    </div>
  </VCard>
</template>

<style lang="scss">
.illustrator-img {
  position: absolute;
  inset-block-end: 0;
  inset-inline-end: 5%;
}
</style>
