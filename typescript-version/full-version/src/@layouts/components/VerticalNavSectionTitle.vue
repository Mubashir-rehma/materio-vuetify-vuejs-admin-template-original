<script lang="ts" setup>
import { useLayouts } from '@layouts'
import { config } from '@layouts/config'
import { can } from '@layouts/plugins/casl'
import type { NavSectionTitle } from '@layouts/types'

defineProps<{
  item: NavSectionTitle
}>()

const { isVerticalNavMini, isLessThanOverlayNavBreakpoint, dynamicI18nProps } = useLayouts()
const { width: windowWidth } = useWindowSize()
const shallRenderIcon = isVerticalNavMini(windowWidth)
</script>

<template>
  <li
    v-if="can(item.action, item.subject)"
    class="nav-section-title"
  >
    <div class="title-wrapper">
      <transition
        name="vertical-nav-section-title"
        mode="out-in"
      >
        <component
          :is="config.app.enableI18n && !shallRenderIcon ? 'i18n-t' : 'span'"
          :key="shallRenderIcon"
          :class="shallRenderIcon ? [config.icons.sectionTitlePlaceholder, 'placeholder-icon'] : 'title-text'"
          v-bind="dynamicI18nProps(item.heading, 'span')"
        >
          {{ shallRenderIcon ? null : item.heading }}
        </component>
      </transition>
    </div>
  </li>
</template>
