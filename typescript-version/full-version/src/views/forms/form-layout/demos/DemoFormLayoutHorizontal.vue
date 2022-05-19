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
          variant="outlined"
          density="compact"
          placeholder="First Name"
          persistent-placeholder
          hide-details
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
          variant="outlined"
          density="compact"
          placeholder="Email"
          persistent-placeholder
          hide-details
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
          variant="outlined"
          density="compact"
          placeholder="Number"
          persistent-placeholder
          hide-details
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
          variant="outlined"
          density="compact"
          placeholder="Password"
          persistent-placeholder
          hide-details
        />
      </v-col>

      <!-- 👉 Remember me -->
      <v-col
        offset-md="3"
        cols="12"
      >
        <v-checkbox
          v-model="checkbox"
          label="Remember me"
          density="compact"
          hide-details
        />
      </v-col>

      <!-- 👉 submit and reset button -->
      <v-col
        offset-md="3"
        cols="12"
      >
        <v-btn type="submit">
          Submit
        </v-btn>
        <v-btn
          color="secondary"
          variant="outlined"
          type="reset"
          class="mx-2"
        >
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
