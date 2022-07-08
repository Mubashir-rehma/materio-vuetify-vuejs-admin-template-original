<script setup lang="ts">
interface Props {
  title: string
  color?: string
  icon: string
  stats: string
  change: number
  subtitle: string
}

const prop = withDefaults(defineProps<Props>(), {
  color: 'primary',
})

const isPositive = controlledComputed(() => prop.change, () => Math.sign(prop.change) === 1)
</script>

<template>
  <VCard>
    <VCardText class="d-flex align-center">
      <VAvatar
        v-if="prop.icon"
        size="38"
        :color="prop.color"
      >
        <VIcon
          :icon="prop.icon"
          size="24"
        />
      </VAvatar>

      <VSpacer />

      <VBtn
        size="x-small"
        variant="text"
        color="secondary"
        class="me-n3 mt-n4"
        icon="mdi-dots-vertical"
      />
    </VCardText>

    <VCardText>
      <p class="font-weight-semibold mb-2">
        {{ prop.title }}
      </p>
      <div
        v-if="prop.change"
        class="d-flex align-center mb-2"
      >
        <span class="font-weight-semibold text-h5 me-2">{{ prop.stats }}</span>
        <span
          :class="isPositive ? 'text-success' : 'text-error'"
          class="text-caption"
        >
          {{ isPositive ? `+${prop.change}` : prop.change }}%
        </span>
      </div>
      <span class="text-caption">{{ prop.subtitle }}</span>
    </VCardText>
  </VCard>
</template>
