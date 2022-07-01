<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components'
import { emailValidator, requiredValidator } from '@core/utils/validators'

const firstName = ref('')
const email = ref('')

const refForm = ref<VForm>()
</script>

<template>
  <v-form
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="firstName"
          label="First Name"
          :rules="[requiredValidator]"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="email"
          label="Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </v-col>

      <v-col cols="12">
        <v-btn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
