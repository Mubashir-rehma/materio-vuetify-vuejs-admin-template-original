<template>
  <v-container fluid>
    <v-select
      v-model="selectedOption1"
      :items="states"
      menu-props="auto"
      label="Select"
      hide-details
      :prepend-icon="icons.mdiMap"
      single-line
      class="pt-0"
    ></v-select>

    <v-select
      v-model="selectedOption2"
      :items="states"
      :append-outer-icon="icons.mdiMap"
      menu-props="auto"
      hide-details
      label="Select"
      single-line
    ></v-select>
  </v-container>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMap } from '@mdi/js'

export default {
  setup() {
    const selectedOption1 = ref('Florida')
    const selectedOption2 = ref('Texas')

    const items = [
      { text: 'State 1' },
      { text: 'State 2' },
      { text: 'State 3' },
      { text: 'State 4' },
      { text: 'State 5' },
      { text: 'State 6' },
      { text: 'State 7' },
    ]

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

    return {
      selectedOption1,
      selectedOption2,
      items,
      states,

      icons: {
        mdiMap,
      },
    }
  },
}
</script>
