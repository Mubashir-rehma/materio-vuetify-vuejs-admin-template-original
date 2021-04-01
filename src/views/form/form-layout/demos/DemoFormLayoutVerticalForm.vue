<template>
  <v-form>
    <v-text-field
      v-model="firstname"
      label="First Name"
      outlined
      dense
      placeholder="First Name"
    ></v-text-field>

    <v-text-field
      v-model="email"
      label="Email"
      type="email"
      outlined
      dense
      placeholder="Email"
    ></v-text-field>

    <v-text-field
      v-model="mobile"
      label="Mobile"
      outlined
      dense
      type="number"
      placeholder="Number"
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
      outlined
      dense
      type="password"
      placeholder="password"
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      label="Remember me"
      class="mt-0"
    ></v-checkbox>

    <v-btn
      color="primary"
      class="mr-2"
    >
      Submit
    </v-btn>
    <v-btn
      type="reset"
      outlined
    >
      Reset
    </v-btn>
  </v-form>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const firstname = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()
    const checkbox = ref(true)

    return {
      firstname,
      email,
      mobile,
      password,
      checkbox,
    }
  },
})
</script>
