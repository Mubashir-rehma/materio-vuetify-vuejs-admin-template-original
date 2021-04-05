<template>
  <v-form ref="form">
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="requiredField"
          label="This field is required"
          outlined
          dense
          :rules="[required]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="numberBetween10to20"
          label="Enter Number between 10 & 20"
          outlined
          dense
          :rules="[required,between(numberBetween10to20,10,20)]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="onlyConsistNumber"
          label="Must only consist of numbers"
          outlined
          dense
          :rules="[required,integerValidator]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="matchRegularEx"
          label="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          outlined
          dense
          :rules="[required,regexValidator(matchRegularEx,'^([0-9]+)$')]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="onlyAlphabeticCharacters"
          label="Only alphabetic characters"
          outlined
          dense
          :rules="[required,alphaValidator]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="specifiedLength"
          label="Length should not be less than the specified length : 3"
          outlined
          dense
          :rules="[required,lengthValidator(specifiedLength,3)]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="password"
          label="Password Input Field"
          outlined
          type="password"
          :rules="[required,passwordValidator]"
          dense
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="digits"
          label="The digits field must be numeric and exactly contain 3 digits"
          outlined
          dense
          :rules="[required,lengthValidator(digits,3),integerValidator]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="repeatePassword"
          label="Repeat password must match"
          outlined
          dense
          type="password"
          :rules="[required,confirmedValidator(repeatePassword,password)]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          label="Only alphabetic characters, numbers, dashes or underscores"
          outlined
          dense
          :rules="[required,alphaDashValidator]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="email"
          label="Must be a valid email"
          outlined
          :rules="[required,emailValidator]"
          dense
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="validURL"
          label="Must be a valid url"
          outlined
          dense
          :rules="[required,urlValidator]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        class="pt-0"
      >
        <v-btn
          color="primary"
          @click="validate"
        >
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import {
  required, emailValidator, passwordValidator, between, integerValidator, regexValidator, alphaValidator, urlValidator, confirmedValidator, lengthValidator, alphaDashValidator,
} from '@core/utils/validation'

export default defineComponent({
  setup() {
    const requiredField = ref('')
    const numberBetween10to20 = ref('')
    const onlyConsistNumber = ref('')
    const matchRegularEx = ref('')
    const onlyAlphabeticCharacters = ref('')
    const specifiedLength = ref('')
    const password = ref('')
    const digits = ref('')
    const repeatePassword = ref('')
    const onlyAlphabeticNumbersDashesUnderscores = ref('')
    const email = ref('')
    const validURL = ref('')
    const form = ref(null)

    const validate = () => {
      form.value.validate()
    }

    return {
      requiredField,
      numberBetween10to20,
      onlyConsistNumber,
      matchRegularEx,
      onlyAlphabeticCharacters,
      specifiedLength,
      password,
      digits,
      repeatePassword,
      onlyAlphabeticNumbersDashesUnderscores,
      email,
      validURL,
      validate,
      form,

      // validation
      required,
      emailValidator,
      passwordValidator,
      between,
      integerValidator,
      regexValidator,
      alphaValidator,
      urlValidator,
      confirmedValidator,
      lengthValidator,
      alphaDashValidator,
    }
  },
})
</script>
