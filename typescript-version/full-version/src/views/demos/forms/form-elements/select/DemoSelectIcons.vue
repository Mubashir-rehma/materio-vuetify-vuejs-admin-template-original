<script lang="ts" setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-select
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="mdi-map-outline"
        single-line
        variant="filled"
      />
    </v-col>

    <v-col cols="12">
      <v-select
        v-model="selectedOption2"
        :items="states"
        append-icon="mdi-map-outline"
        label="Select"
        single-line
        variant="filled"
      />
    </v-col>
  </v-row>
</template>
