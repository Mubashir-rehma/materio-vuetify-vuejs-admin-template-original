<script lang="ts" setup>
import type { VForm } from 'vuetify/components'
import { emailValidator, requiredValidator } from '@core/utils/validation'

const firstName = ref('')
const email = ref('')

const refForm = ref<VForm>()
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
          v-model="firstName"
          label="First Name"
          variant="outlined"
          density="compact"
          hide-details="auto"
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
          variant="outlined"
          hide-details="auto"
          :rules="[requiredValidator,emailValidator]"
          density="compact"
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
