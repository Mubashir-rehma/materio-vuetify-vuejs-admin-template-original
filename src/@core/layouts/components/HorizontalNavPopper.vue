<script lang="ts" setup>
import type { Instance } from '@popperjs/core'
import { createPopper } from '@popperjs/core'

interface Props {
  popperInlineEnd?: boolean
  tag?: string
  contentContainerTag?: string
  isRtl?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  popperInlineEnd: false,
  tag: 'div',
  contentContainerTag: 'div',
  isRTL: false,
})

const refPopperContainer = ref<HTMLElement>()
const refPopper = ref<HTMLElement>()

let popperIns: Instance = null

onMounted(() => {
  popperIns = createPopper(refPopperContainer.value, refPopper.value, {
    placement: props.popperInlineEnd ? (props.isRtl ? 'left-start' : 'right-start') : (props.isRtl ? 'bottom-end' : 'bottom-start'),
    modifiers: [
      {
        name: 'preventOverflow',
        options: {
          rootBoundary: 'document',
        },
      },
    ],
  })
})

const isContentShown = ref(false)
const showContent = () => {
  isContentShown.value = true
  popperIns.setOptions(options => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: true },
    ],
  }))

  popperIns.update()
}
const hideContent = () => {
  isContentShown.value = false

  popperIns.setOptions(options => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: false },
    ],
  }))
}
</script>

<template>
  <div class="nav-popper" :class="[{'popper-inline-end': popperInlineEnd}, {'show-content': isContentShown}]">
    <div ref="refPopperContainer" class="popper-triggerer" @mouseenter="showContent" @mouseleave="hideContent">
      <slot />
    </div>

    <div
      ref="refPopper"
      class="popper-content"
      @mouseenter="showContent"
      @mouseleave="hideContent"
    >
      <div>
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
