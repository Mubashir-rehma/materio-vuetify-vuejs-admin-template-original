<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>

<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-select
        :items="items"
        label="Default"
      />
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-select
        :items="items"
        label="Filled"
        variant="filled"
      />
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-select
        :items="items"
        label="Outlined"
        variant="outlined"
      />
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-select
        :items="items"
        label="Solo"
        variant="solo"
      />
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-select
        :items="items"
        label="Underlined"
        variant="underlined"
      />
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-select
        :items="items"
        label="Plain"
        variant="plain"
      />
    </v-col>
  </v-row>
</template>
