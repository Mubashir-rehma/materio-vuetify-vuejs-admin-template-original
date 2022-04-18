<script lang="ts" setup>
import * as demoCode from '@/views/components/button/demos/demoCodeButton'
</script>

<template>
  <!-- Colors -->
  <AppCardCode
    title="Colors"
    :code="demoCode.buttonColors"
  >
    <p>The <code>color</code> prop is used to change the background color of the alert.</p>
    <DemoButtonColors />
  </AppCardCode>
</template>
