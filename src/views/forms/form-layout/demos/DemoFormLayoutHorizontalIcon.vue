<template>
  <v-form>
    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <label for="firstnameHorizontalIcons">First Name</label>
      </v-col>

      <v-col
        cols="12"
        md="8"
      >
        <v-text-field
          id="firstnameHorizontalIcons"
          v-model="firstname"
          :prepend-inner-icon="icons.mdiAccountOutline"
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
        <label for="emailHorizontalIcons">Email</label>
      </v-col>

      <v-col
        cols="12"
        md="8"
      >
        <v-text-field
          id="emailHorizontalIcons"
          v-model="email"
          :prepend-inner-icon="icons.mdiEmailOutline"
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
        <label for="mobileHorizontalIcons">Mobile</label>
      </v-col>

      <v-col
        cols="12"
        md="8"
      >
        <v-text-field
          id="mobileHorizontalIcons"
          v-model="mobile"
          type="number"
          outlined
          :prepend-inner-icon="icons.mdiCellphone"
          dense
          placeholder="Number"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        sm="4"
      >
        <label for="passwordHorizontalIcons">Password</label>
      </v-col>

      <v-col
        cols="12"
        md="8"
      >
        <v-text-field
          id="passwordHorizontalIcons"
          v-model="password"
          :prepend-inner-icon="icons.mdiLockOutline"
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
        <v-btn color="primary">
          Submit
        </v-btn>
        <v-btn
          type="reset"
          outlined
          class="mx-2"
        >
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import {
  mdiAccountOutline, mdiEmailOutline, mdiCellphone, mdiLockOutline,
} from '@mdi/js'

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

      // icons
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCellphone,
        mdiLockOutline,
      },
    }
  },
})
</script>
