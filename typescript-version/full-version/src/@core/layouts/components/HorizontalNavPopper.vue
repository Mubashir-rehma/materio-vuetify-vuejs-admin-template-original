<script lang="ts" setup>
import { computePosition, flip, shift } from '@floating-ui/dom'
import { config } from '@layouts/config'

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

const popperContentStyles = ref({
  left: '0px',
  top: '0px',
})

const updatePopper = async() => {
  const { x, y } = await computePosition(refPopperContainer.value, refPopper.value, {
    placement: props.popperInlineEnd ? (props.isRtl ? 'left-start' : 'right-start') : (props.isRtl ? 'bottom-end' : 'bottom-start'),
    middleware: [flip(), shift()],
    strategy: 'fixed',
  })
  popperContentStyles.value.left = `${x}px`
  popperContentStyles.value.top = `${y}px`
}

/*
 💡 Only add scroll event listener for updating position once horizontal nav is made static.
  We don't want to update position every time user scrolls when horizontal nav is sticky
*/
until(config.horizontalNav.type)
  .toMatch(type => type === 'static')
  .then(() => { useEventListener('scroll', updatePopper) })

const isContentShown = ref(false)
const showContent = () => {
  isContentShown.value = true
  updatePopper()
}
const hideContent = () => {
  isContentShown.value = false
}
</script>

<template>
  <div
    class="nav-popper"
    :class="[{'popper-inline-end': popperInlineEnd}, {'show-content': isContentShown}]"
  >
    <div
      ref="refPopperContainer"
      class="popper-triggerer"
      @mouseenter="showContent"
      @mouseleave="hideContent"
    >
      <slot />
    </div>

    <div
      ref="refPopper"
      class="popper-content"
      :style="popperContentStyles"
      @mouseenter="showContent"
      @mouseleave="hideContent"
    >
      <div>
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.popper-content {
  position: fixed;
}
</style>
