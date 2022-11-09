<script setup lang="ts">
import { useRouter } from 'vue-router'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

interface Shortcut {
  icon: string
  title: string
  subtitle: string
  to: object | string
}

interface Props {
  togglerIcon?: string
  shortcuts: Shortcut[]
}

const props = withDefaults(defineProps<Props>(), {
  togglerIcon: 'tabler-layout-grid-add',
})

const perfectScrollbarSettings = {
  maxScrollbarLength: 60,
  wheelPropagation: false,
}

const router = useRouter()
</script>

<template>
  <VBtn
    variant="text"
    color="default"
    size="small"
    icon
  >
    <VIcon
      size="24"
      :icon="props.togglerIcon"
    />

    <VMenu activator="parent">
      <VCard
        title="Shortcuts"
        width="360"
        max-height="560"
        class="d-flex flex-column"
      >
        <template #append>
          <VBtn
            size="x-small"
            variant="text"
            color="default"
            icon
          >
            <VIcon
              size="22"
              icon="tabler-circle-plus"
            />
          </VBtn>
        </template>

        <VDivider />

        <PerfectScrollbar :options="perfectScrollbarSettings">
          <VRow class="ma-0">
            <VCol
              v-for="(shortcut, index) in props.shortcuts"
              :key="shortcut.title"
              cols="6"
              class="text-center border-b cursor-pointer pa-6 "
              :class="(index + 1) % 2 ? 'border-e' : ''"
              @click="router.push(shortcut.to)"
            >
              <VAvatar
                variant="tonal"
                size="50"
              >
                <VIcon :icon="shortcut.icon" />
              </VAvatar>

              <p class="font-weight-semibold mt-2 mb-0">
                {{ shortcut.title }}
              </p>
              <span class="text-sm">{{ shortcut.subtitle }}</span>
            </VCol>
          </VRow>
        </PerfectScrollbar>
      </VCard>
    </VMenu>
  </VBtn>
</template>
