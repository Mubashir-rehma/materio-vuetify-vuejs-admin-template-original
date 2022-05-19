<script lang="ts" setup>
import type { VForm } from 'vuetify/components'
import { emailValidator, requiredValidator } from '@core/utils/validation'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
</script>

<template>
  <v-form
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="[requiredValidator]"
      label="Name"
      required
      variant="outlined"
      density="compact"
      hide-details="auto"
      class="mb-6"
    />

    <v-text-field
      v-model="email"
      :rules="[emailValidator, requiredValidator]"
      label="E-mail"
      required
      variant="outlined"
      density="compact"
      hide-details="auto"
      class="mb-6"
    />

    <v-select
      v-model="select"
      :items="items"
      :rules="[requiredValidator]"
      label="Item"
      name="select"
      required
      variant="outlined"
      density="compact"
      hide-details="auto"
    />

    <v-checkbox
      v-model="checkbox"
      :rules="[requiredValidator]"
      label="Do you agree?"
      required
      hide-details="auto"
      class="my-4"
    />

    <div class="demo-space-x">
      <v-btn
        color="success"
        @click="form?.validate()"
      >
        Validate
      </v-btn>

      <v-btn
        color="error"
        @click="form?.reset()"
      >
        Reset Form
      </v-btn>

      <v-btn
        color="warning"
        @click="form?.resetValidation()"
      >
        Reset Validation
      </v-btn>
    </div>
  </v-form>
</template>
