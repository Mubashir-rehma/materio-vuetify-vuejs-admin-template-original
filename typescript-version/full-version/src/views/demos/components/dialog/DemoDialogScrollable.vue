<script lang="ts" setup>
const countryList = [
  { label: 'Bahamas, The', value: 'bahamas' },
  { label: 'Bahrain', value: 'bahrain' },
  { label: 'Bangladesh', value: 'bangladesh' },

  { label: 'Barbados', value: 'barbados' },
  { label: 'Belarus', value: 'belarus' },
  { label: 'Belgium', value: 'belgium' },
  { label: 'Belize', value: 'belize' },
  { label: 'Benin', value: 'benin' },
  { label: 'Bhutan', value: 'bhutan' },
  { label: 'Bolivia', value: 'bolivia' },
  { label: 'Bosnia and Herzegovina', value: 'bosnia' },

  { label: 'Botswana', value: 'botswana' },
  { label: 'Brazil', value: 'brazil' },
  { label: 'Brunei', value: 'brunei' },
  { label: 'Bulgaria', value: 'bulgaria' },
  { label: 'Burkina Faso', value: 'burkina' },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
</script>

<template>
  <v-dialog
    v-model="isDialogVisible"
    scrollable
    max-width="350px"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <v-btn v-bind="props">
        Open Dialog
      </v-btn>
    </template>

    <!-- Dialog Content -->
    <v-card
      title="Select Country"
      max-height="400px"
    >
      <v-divider />
      <v-card-text>
        <v-radio-group v-model="selectedCountry">
          <v-radio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </v-radio-group>
      </v-card-text>

      <v-divider />

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
