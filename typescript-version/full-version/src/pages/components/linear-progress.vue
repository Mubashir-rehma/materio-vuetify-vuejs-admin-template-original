<script setup lang="ts">
import * as demoCode from '@/views/demos/components/linear-progress/demoCodeLinearProgress'
</script>

<template>
  <VRow>
    <!-- 👉 Progress linear color -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Linear Color"
        :code="demoCode.linearColor"
      >
        <p>You can set the colors of the progress bar using the props <code>color</code> and <code>background-color</code>.</p>

        <DemoProgressLinearColor />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear Buffering -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Linear Buffering"
        :code="demoCode.linearBuffering"
      >
        <p>The primary value is controlled by <code>v-model</code>, whereas the buffer is controlled by the <code>buffer-value</code> prop.</p>

        <DemoProgressLinearBuffering />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear indeterminate -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Linear Indeterminate"
        :code="demoCode.linearIndeterminate"
      >
        <p>Using the <code>indeterminate</code> prop, <code>v-progress-linear</code> continuously animates.The second line below has set indeterminate</p>

        <DemoProgressLinearIndeterminate />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear Reversed -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Linear Reversed"
        :code="demoCode.linearReversed"
      >
        <p>Displays reversed progress. The component also has RTL support, such that a progress bar in right-to-left mode with prop <code>reverse</code> enabled will display left-to-right.</p>

        <DemoProgressLinearReversed />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear Rounded -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Linear Rounded"
        :code="demoCode.linearRounded"
      >
        <p>The <code> rounded </code> prop is used to apply a border radius to the v-progress-linear component.</p>
        <DemoProgressLinearRounded />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear Striped -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Linear Slots"
        :code="demoCode.linearSlots"
      >
        <p>The <code>v-progress-linear</code> component will be responsive to user input when using <code>v-model</code>. You can use the default slot or bind a local model to display inside of the progress.</p>

        <DemoProgressLinearSlots />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
