<script setup lang="ts">
import * as demoCode from '@/views/components/tooltip/demos/demoCodeTooltip'

//  Demos
import DemoTooltipDelayOnHover from '@/views/components/tooltip/demos/DemoTooltipDelayOnHover.vue'

</script>

<template>
  <!-- 👉 Anchor -->
  <AppCardCode
    title="Anchor"
    :code="demoCode.anchor"
  >
    <p>Use the <code>anchor</code> prop to specify on which side of the element the tooltip should show</p>

    <DemoTooltipAnchor />
  </AppCardCode>

  <!-- 👉 Events -->
  <AppCardCode
    title="Events"
    :code="demoCode.events"
  >
    <DemoTooltipEvent />
  </AppCardCode>

  <!-- 👉 Delay On Hover -->
  <AppCardCode
    title="Delay On Hover"
    :code="demoCode.delayOnHover"
  >
    <p>Delay (in ms) after which tooltip opens (when <code>open-on-hover</code> prop is set to true)</p>

    <DemoTooltipDelayOnHover />
  </AppCardCode>

  <!-- 👉 V-model Support -->
  <AppCardCode
    title="V-Model Support"
    :code="demoCode.vModel"
  >
    <p>Tooltip visibility can be programmatically changed using <code>v-model</code>.</p>

    <DemoTooltipVModel />
  </AppCardCode>

  <!-- 👉 Transition -->
  <AppCardCode
    title="Transition"
    :code="demoCode.transition"
  >
    <p>Use <code>transition</code> prop to sets the component transition.</p>

    <DemoTooltipTransition />
  </AppCardCode>

  <!-- 👉 Tooltip on Various Elements -->
  <AppCardCode
    title="Tooltip on Various Elements"
    :code="demoCode.tooltipOnVariousElements"
  >
    <p>Tooltips can wrap any element.</p>

    <DemoTooltipVariousElements />
  </AppCardCode>
</template>
