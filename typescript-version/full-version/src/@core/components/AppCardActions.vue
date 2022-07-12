<script setup lang="ts">
interface Props {
  collapsed?: boolean
  noActions?: boolean
  actionCollapsed?: boolean
  actionRefresh?: boolean
  actionRemove?: boolean
  title?: string
}

interface Emit {
  (e: 'collapsed', isContentCollapsed: boolean): void
  (e: 'refresh', hideOverlay: () => void): void
  (e: 'remove'): void
}

const props = withDefaults(defineProps<Props>(), {
  collapsed: false,
  noActions: false,
  actionCollapsed: false,
  actionRefresh: false,
  actionRemove: false,
  title: undefined,
})

const emit = defineEmits<Emit>()

// inherit Attribute make false
defineOptions({
  inheritAttrs: false,
})

const isContentCollapsed = ref(props.collapsed)
const isCardRemoved = ref(false)
const isOverlayVisible = ref(false)

// hiding overlay
const hideOverlay = () => {
  isOverlayVisible.value = false
}

// trigger collapse
const triggerCollapse = () => {
  isContentCollapsed.value = !isContentCollapsed.value
  emit('collapsed', isContentCollapsed.value)
}

// trigger refresh
const triggerRefresh = () => {
  isOverlayVisible.value = true
  emit('refresh', hideOverlay)
}

// trigger removal
const triggeredRemove = () => {
  isCardRemoved.value = true
  emit('remove')
}
</script>

<template>
  <VExpandTransition>
    <!-- TODO remove div when transition work with v-card components: https://github.com/vuetifyjs/vuetify/issues/15111 -->
    <div v-if="!isCardRemoved">
      <VCard v-bind="$attrs">
        <VCardHeader>
          <VCardHeaderText class="d-flex">
            <VCardTitle v-if="props.title || $slots.title">
              <!-- 👉 Title slot and prop -->
              <slot name="title">
                {{ props.title }}
              </slot>
            </VCardTitle>

            <VSpacer />

            <!-- 👉 Before actions slot -->
            <slot name="before-actions" />

            <!-- SECTION Actions buttons -->
            <div>
              <!-- 👉 Collapse button -->
              <VBtn
                v-if="(!(actionRemove || actionRefresh) || actionCollapsed) && !noActions"
                icon
                color="secondary"
                variant="plain"
                size="x-small"
                @click="triggerCollapse"
              >
                <VIcon
                  size="20"
                  icon="mdi-chevron-up"
                  :style="{ transform: isContentCollapsed ? 'rotate(-180deg)' : null }"
                  style="transition-duration: 0.28s;"
                />
              </VBtn>

              <!-- 👉 Overlay button -->
              <VBtn
                v-if="(!(actionRemove || actionCollapsed) || actionRefresh) && !noActions"
                size="x-small"
                variant="plain"
                color="secondary"
                icon
                @click="triggerRefresh"
              >
                <VIcon
                  size="20"
                  icon="mdi-refresh"
                />
              </VBtn>

              <!-- 👉 Close button -->
              <VBtn
                v-if="(!(actionRefresh || actionCollapsed) || actionRemove) && !noActions"
                size="x-small"
                variant="plain"
                color="secondary"
                icon
                @click="triggeredRemove"
              >
                <VIcon
                  size="20"
                  icon="mdi-close"
                />
              </VBtn>
            </div>
            <!-- !SECTION -->
          </VCardHeaderText>
        </VCardHeader>

        <!-- 👉 card content -->
        <VExpandTransition>
          <div v-show="!isContentCollapsed">
            <slot />
          </div>
        </VExpandTransition>

        <!-- 👉 Overlay -->
        <VOverlay
          v-model="isOverlayVisible"
          contained
          persistent
          class="align-center justify-center"
        >
          <VProgressCircular indeterminate />
        </VOverlay>
      </VCard>
    </div>
  </VExpandTransition>
</template>
