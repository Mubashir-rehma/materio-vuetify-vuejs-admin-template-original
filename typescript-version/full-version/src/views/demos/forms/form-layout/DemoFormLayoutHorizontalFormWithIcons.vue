<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
</script>

<template>
  <v-form @submit.prevent>
    <v-row>
      <!-- 👉 First Name -->
      <v-col
        cols="12"
        md="3"
      >
        <label for="firstNameHorizontalIcons">First Name</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="firstNameHorizontalIcons"
          v-model="firstName"
          prepend-inner-icon="mdi-account-outline"
          placeholder="First Name"
          persistent-placeholder
        />
      </v-col>

      <!-- 👉 Email -->
      <v-col
        cols="12"
        md="3"
      >
        <label for="emailHorizontalIcons">Email</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="emailHorizontalIcons"
          v-model="email"
          prepend-inner-icon="mdi-email-outline"
          placeholder="Email"
          persistent-placeholder
        />
      </v-col>

      <!-- 👉 Mobile -->
      <v-col
        cols="12"
        md="3"
      >
        <label for="mobileHorizontalIcons">Mobile</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="mobileHorizontalIcons"
          v-model="mobile"
          type="number"
          prepend-inner-icon="mdi-cellphone"
          placeholder="Number"
          persistent-placeholder
        />
      </v-col>

      <!-- 👉 Password -->
      <v-col
        cols="12"
        md="3"
      >
        <label for="passwordHorizontalIcons">Password</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="passwordHorizontalIcons"
          v-model="password"
          prepend-inner-icon="mdi-lock-outline"
          type="password"
          placeholder="Password"
          persistent-placeholder
        />
      </v-col>

      <!-- 👉 Checkbox -->
      <v-col
        offset-md="3"
        cols="12"
      >
        <v-checkbox
          v-model="checkbox"
          label="Remember me"
          density="compact"
        />
      </v-col>

      <!-- 👉 submit and reset button -->
      <v-col
        offset-md="3"
        cols="12"
      >
        <v-btn
          type="submit"
          class="me-2"
        >
          Submit
        </v-btn>
        <v-btn
          color="secondary"
          type="reset"
          variant="outlined"
        >
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
