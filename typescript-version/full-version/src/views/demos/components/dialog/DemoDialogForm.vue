<script lang="ts" setup>
const isDialogVisible = ref(false)
</script>

<template>
  <v-dialog
    v-model="isDialogVisible"
    persistent
    max-width="600px"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <v-btn v-bind="props">
        Open Dialog
      </v-btn>
    </template>

    <!-- Dialog Content -->
    <v-card title="User Profile">
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field label="First Name" />
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="Middle Name"
              hint="example of helper text only on focus"
            />
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="Last Name"
              persistent-hint
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Email"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Password"
              type="password"
            />
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-select
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age"
            />
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-autocomplete
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
              multiple
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </v-btn>
        <v-btn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
