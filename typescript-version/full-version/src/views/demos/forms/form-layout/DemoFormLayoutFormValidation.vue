<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components'
import { emailValidator, requiredValidator } from '@core/utils/validators'

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
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </v-col>

      <v-col cols="12">
        <v-select
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </v-col>

      <v-col cols="12">
        <v-checkbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          density="compact"
          required
        />
      </v-col>

      <v-col cols="12">
        <v-btn
          color="success"
          class="me-3"
          @click="form?.validate()"
        >
          Validate
        </v-btn>

        <v-btn
          color="error"
          class="me-3"
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
      </v-col>
    </v-row>
  </v-form>
</template>
