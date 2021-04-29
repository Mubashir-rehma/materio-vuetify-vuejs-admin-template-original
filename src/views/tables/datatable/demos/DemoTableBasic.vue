<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="5"
  ></v-data-table>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import data from '../datatable'

export default defineComponent({
  setup() {
    return {
      headers: [
        { text: 'ID', sortable: false, value: 'id' },
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'Date', value: 'start_date' },
        { text: 'SALARY', value: 'salary' },
        { text: 'AGE', value: 'age' },
      ],
      data,
    }
  },
})
</script>
