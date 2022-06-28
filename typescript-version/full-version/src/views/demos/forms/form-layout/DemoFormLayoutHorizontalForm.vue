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
        <label for="firstName">First Name</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="firstName"
          v-model="firstName"
          placeholder="First Name"
          persistent-placeholder
        />
      </v-col>

      <!-- 👉 Email -->
      <v-col
        cols="12"
        md="3"
      >
        <label for="email">Email</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="email"
          v-model="email"
          placeholder="Email"
          persistent-placeholder
        />
      </v-col>

      <!-- 👉 Mobile -->
      <v-col
        cols="12"
        md="3"
      >
        <label for="mobile">Mobile</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="mobile"
          v-model="mobile"
          type="number"
          placeholder="Number"
          persistent-placeholder
        />
      </v-col>

      <!-- 👉 Password -->
      <v-col
        cols="12"
        md="3"
      >
        <label for="password">Password</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
          persistent-placeholder
        />
      </v-col>

      <!-- 👉 Remember me -->
      <v-col
        offset-md="3"
        cols="12"
      >
        <v-checkbox
          v-model="checkbox"
          density="compact"
          label="Remember me"
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
          variant="outlined"
          type="reset"
        >
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
