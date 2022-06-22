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
  (e: 'refresh', hideOverlay: Function): void
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
  <v-expand-transition>
    <!-- TODO remove div when transition work with v-card components: https://github.com/vuetifyjs/vuetify/issues/15111 -->
    <div v-if="!isCardRemoved">
      <v-card v-bind="$attrs">
        <v-card-header>
          <v-card-header-text class="d-flex">
            <v-card-title v-if="props.title || $slots.title">
              <!-- 👉 Title slot and prop -->
              <slot name="title">
                {{ props.title }}
              </slot>
            </v-card-title>

            <v-spacer />

            <!-- 👉 Before actions slot -->
            <slot name="before-actions" />

            <!-- SECTION Actions buttons -->
            <div>
              <!-- 👉 Collapse button -->
              <v-btn
                v-if="(!(actionRemove || actionRefresh) || actionCollapsed) && !noActions"
                icon
                color="secondary"
                variant="plain"
                size="x-small"
                @click="triggerCollapse"
              >
                <v-icon
                  size="20"
                  icon="mdi-chevron-up"
                  :style="{ transform: isContentCollapsed ? 'rotate(-180deg)' : null }"
                  style="transition-duration: 0.28s;"
                />
              </v-btn>

              <!-- 👉 Overlay button -->
              <v-btn
                v-if="(!(actionRemove || actionCollapsed) || actionRefresh) && !noActions"
                size="x-small"
                variant="plain"
                color="secondary"
                icon
                @click="triggerRefresh"
              >
                <v-icon
                  size="20"
                  icon="mdi-refresh"
                />
              </v-btn>

              <!-- 👉 Close button -->
              <v-btn
                v-if="(!(actionRefresh || actionCollapsed) || actionRemove) && !noActions"
                size="x-small"
                variant="plain"
                color="secondary"
                icon
                @click="triggeredRemove"
              >
                <v-icon
                  size="20"
                  icon="mdi-close"
                />
              </v-btn>
            </div>
            <!-- !SECTION -->
          </v-card-header-text>
        </v-card-header>

        <!-- 👉 card content -->
        <v-expand-transition>
          <div v-show="!isContentCollapsed">
            <slot />
          </div>
        </v-expand-transition>

        <!-- 👉 Overlay -->
        <v-overlay
          v-model="isOverlayVisible"
          contained
          persistent
          class="align-center justify-center"
        >
          <v-progress-circular indeterminate />
        </v-overlay>
      </v-card>
    </div>
  </v-expand-transition>
</template>
