<script setup lang="ts">
import * as demoCode from '@/views/demos/forms/form-elements/editor/demoCodeEditor'
</script>

<template>
  <VRow>
    <!-- 👉 Basic Editor  -->
    <VCol cols="12">
      <AppCardCode
        title="Basic Editor"
        :code="demoCode.basicEditor"
      >
        <DemoCodeBasicEditor />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <AppCardCode
        title="Custom Editor"
        :code="demoCode.customEditor"
      >
        <DemoCodeCustomEditor />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
