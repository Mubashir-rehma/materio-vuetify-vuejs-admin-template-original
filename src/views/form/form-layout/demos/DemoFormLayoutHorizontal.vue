<template>
  <v-form>
    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <label for="firstname">First Name</label>
      </v-col>

      <v-col
        cols="12"
        md="8"
      >
        <v-text-field
          id="firstname"
          v-model="firstname"
          outlined
          dense
          placeholder="First Name"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        sm="4"
      >
        <label for="email">Email</label>
      </v-col>

      <v-col
        cols="12"
        md="8"
      >
        <v-text-field
          id="email"
          v-model="email"
          outlined
          dense
          placeholder="Email"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        sm="4"
      >
        <label for="mobile">Mobile</label>
      </v-col>

      <v-col
        cols="12"
        md="8"
      >
        <v-text-field
          id="mobile"
          v-model="mobile"
          type="number"
          outlined
          dense
          placeholder="Number"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        sm="4"
      >
        <label for="password">Password</label>
      </v-col>

      <v-col
        cols="12"
        md="8"
      >
        <v-text-field
          id="password"
          v-model="password"
          type="password"
          outlined
          dense
          placeholder="Password"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        offset-md="4"
        cols="12"
      >
        <v-checkbox
          v-model="checkbox"
          label="Remember me"
          class="mt-0"
          hide-details
        ></v-checkbox>
      </v-col>

      <v-col
        offset-md="4"
        cols="12"
      >
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
      </v-col>
    </v-row>
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
