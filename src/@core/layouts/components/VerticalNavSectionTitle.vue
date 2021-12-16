<script lang="ts" setup>
import { useLayouts } from '@layouts'
import { config } from '@layouts/config'
import { can } from '@layouts/plugins/casl'
import type { NavSectionTitle } from '@layouts/types'

const { isVerticalNavMini } = useLayouts()

const shallRenderIcon = isVerticalNavMini()

defineProps<{
  item: NavSectionTitle
}>()
</script>

<template>
  <li v-if="can(item.action, item.subject)" class="nav-section-title">
    <div class="title-wrapper">
      <transition name="vertical-nav-section-title" mode="out-in">
        <component
          :is="shallRenderIcon ? 'div' : 'span'"
          :key="shallRenderIcon"
          :class="shallRenderIcon ? [config.icons.sectionTitlePlaceholder, 'placeholder-icon'] : 'title-text'"
        >
          {{ shallRenderIcon ? null : item.heading }}
        </component>
      </transition>
    </div>
  </li>
</template>
