<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-combobox
        v-model="selectedItem"
        :items="items"
        multiple
        chips
        variant="solo"
        label="solo"
      />
    </v-col>
    <v-col cols="12">
      <v-combobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="outlined"
        label="Outlined"
      />
    </v-col>
    <v-col cols="12">
      <v-combobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="underlined"
        label="Underlined"
      />
    </v-col>
    <v-col cols="12">
      <v-combobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="filled"
        label="Filled"
      />
    </v-col>
    <v-col cols="12">
      <v-combobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="plain"
        label="Plain"
      />
    </v-col>
  </v-row>
</template>
