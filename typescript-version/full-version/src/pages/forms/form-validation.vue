<script setup lang="ts">
import * as demoCode from '@/views/demos/forms/form-validation/demoCodeValidation'
</script>

<template>
  <v-row>
    <v-col cols="12">
      <!-- 👉 Simple Form Validation -->
      <AppCardCode
        title="Simple Form Validation"
        :code="demoCode.simpleFormValidation"
      >
        <p>Use <code>Rules</code> prop to validate the input.</p>

        <DemoFormValidationSimpleFormValidation />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Validating Multiple Rules -->
      <AppCardCode
        title="Validating Multiple Rules"
        :code="demoCode.validatingMultipleRules"
      >
        <DemoFormValidationValidatingMultipleRules />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Validation Types -->
      <AppCardCode
        title="Validation Types"
        :code="demoCode.validationTypes"
      >
        <DemoFormValidationTypes />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
