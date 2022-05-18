<script setup lang="ts">
import * as demoCode from '@/views/forms/form-validation/demos/demoCodeValidation'

// 👉 Demos
import DemoFormValidationMultipleRules from '@/views/forms/form-validation/demos/DemoFormValidationMultipleRules.vue'
import DemoFormValidationSimple from '@/views/forms/form-validation/demos/DemoFormValidationSimple.vue'
import DemoFormValidationTypes from '@/views/forms/form-validation/demos/DemoFormValidationTypes.vue'
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

        <DemoFormValidationSimple />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Validating Multiple Rules -->
      <AppCardCode
        title="Validating Multiple Rules"
        :code="demoCode.validatingMultipleRules"
      >
        <DemoFormValidationMultipleRules />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Validation Types -->
      <AppCardCode
        title="Validation types"
        :code="demoCode.validationTypes"
      >
        <DemoFormValidationTypes />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
