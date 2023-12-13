<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
  stats: string
  change: number
  image: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
})

const isPositive = controlledComputed(() => props.change, () => Math.sign(props.change) === 1)
</script>

<template>
  <VCard class="overflow-visible">
    <div class="d-flex position-relative">
      <VCardText>
        <h6 class="text-h6 mb-5">
          {{ props.title }}
        </h6>
        <div class="d-flex align-center flex-wrap mb-3">
          <h4 class="text-h5 me-2">
            {{ props.stats }}
          </h4>
          <div
            class="text-body-1"
            :class="isPositive ? 'text-success' : 'text-error'"
          >
            {{ isPositive ? `+${props.change}` : props.change }}%
          </div>
        </div>

        <VChip
          v-if="props.subtitle"
          :color="props.color"
          size="small"
        >
          {{ props.subtitle }}
        </VChip>
      </VCardText>

      <VSpacer />

      <div class="illustrator-img">
        <VImg
          v-if="props.image"
          :src="props.image"
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
