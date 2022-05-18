<script lang="ts" setup>
import type { VForm } from 'vuetify/components'
import {
  alphaDashValidator,
  alphaValidator,
  betweenValidator,
  confirmedValidator,
  emailValidator,
  integerValidator,
  lengthValidator,
  passwordValidator,
  regexValidator,
  requiredValidator,
  urlValidator,
} from '@core/utils/validation'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
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
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
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
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          variant="outlined"
          density="compact"
          hide-details="auto"
          :rules="[requiredValidator,betweenValidator(numberBetween10to20,10,20)]"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          variant="outlined"
          density="compact"
          hide-details="auto"
          :rules="[requiredValidator,integerValidator]"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          variant="outlined"
          hide-details="auto"
          density="compact"
          :rules="[requiredValidator,regexValidator(matchRegularEx,'^([0-9]+)$')]"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          variant="outlined"
          hide-details="auto"
          density="compact"
          :rules="[requiredValidator,alphaValidator]"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length should not be less than the specified length : 3"
          variant="outlined"
          hide-details="auto"
          density="compact"
          :rules="[requiredValidator,lengthValidator(specifiedLength,3)]"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          variant="outlined"
          hide-details="auto"
          type="password"
          :rules="[requiredValidator,passwordValidator]"
          density="compact"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          variant="outlined"
          hide-details="auto"
          density="compact"
          :rules="[requiredValidator,lengthValidator(digits,3),integerValidator]"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          variant="outlined"
          hide-details="auto"
          density="compact"
          type="password"
          :rules="[requiredValidator,confirmedValidator(repeatPassword,password)]"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          variant="outlined"
          hide-details="auto"
          density="compact"
          :rules="[requiredValidator,alphaDashValidator]"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          variant="outlined"
          hide-details="auto"
          :rules="[requiredValidator,emailValidator]"
          density="compact"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          variant="outlined"
          hide-details="auto"
          density="compact"
          :rules="[requiredValidator,urlValidator]"
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
