<script lang="ts" setup>
import type { VForm } from 'vuetify/components'
import { confirmedValidator, emailValidator, passwordValidator, requiredValidator } from '@core/utils/validation'

const name = ref('')
const email = ref('')
const refForm = ref<VForm>()
const password = ref('')
const confirmPassword = ref('')
</script>

<template>
  <v-form
    ref="refForm"
    @submit.prevent
  >
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="name"
          placeholder="Your Name"
          persistent-placeholder
          :rules="[requiredValidator]"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="email"
          placeholder="Your Email"
          persistent-placeholder
          :rules="[requiredValidator, emailValidator]"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="password"
          type="password"
          placeholder="Your Password"
          persistent-placeholder
          :rules="[requiredValidator, passwordValidator]"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          persistent-placeholder
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
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
