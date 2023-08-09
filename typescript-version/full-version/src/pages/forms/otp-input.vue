<script setup lang="ts">
import * as demoCode from '@/views/demos/forms/form-elements/otp-input/demoCodeOtpInput'
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Basic"
        :code="demoCode.basic"
      >
        <p>The OTP input is used for MFA procedure of authenticating users by a one-time password.</p>
        <DemoOtpInputBasic />
      </AppCardCode>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Finish"
        :code="demoCode.finish"
      >
        <p>You can easily compose a loader to process the OTP input when completed insertion.</p>
        <DemoOtpInputFinish />
      </AppCardCode>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Hidden"
        :code="demoCode.hidden"
      >
        <p>You can easily compose a loader to process the OTP input when completed insertion.</p>
        <DemoOtpInputHidden />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
