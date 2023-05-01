<script setup lang="ts">
import data from '@/views/demos/forms/Tables/DataTable/datatable.js'

const headers = [
  { title: 'ID', sortable: false, key: 'id' },
  { title: 'NAME', key: 'full_name' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'start_date' },
  { title: 'EXPERIENCE', key: 'experience' },
  { title: 'AGE', key: 'age' },
]
</script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    density="compact"
    :items-per-page="5"
  />
</template>
