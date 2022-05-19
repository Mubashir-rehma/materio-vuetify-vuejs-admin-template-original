<script lang="ts" setup>
import type { VForm } from 'vuetify/components'

const name = ref('')
const nameRules = [
  (v: string) => !!v || 'Name is required',
  (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters',
]

const email = ref('')
const emailRules = [(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']

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
      :rules="nameRules"
      label="Name"
      required
      variant="outlined"
      density="compact"
      hide-details="auto"
      class="mb-6"
    />

    <v-text-field
      v-model="email"
      :rules="emailRules"
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
      :rules="[(v: string) => !!v || 'Item is required']"
      label="Item"
      name="select"
      required
      variant="outlined"
      density="compact"
      hide-details="auto"
    />

    <v-checkbox
      v-model="checkbox"
      :rules="[(v: string) => !!v || 'You must agree to continue!']"
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
