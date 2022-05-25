<script lang="ts" setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
</script>

<template>
  <v-row>
    <v-col
      sm="1"
      cols="2"
    >
      <v-checkbox
        v-model="includeFiles"
        hide-details
      />
    </v-col>

    <v-col
      sm="11"
      cols="10"
    >
      <v-text-field label="Include files" />
    </v-col>
  </v-row>

  <v-row>
    <v-col
      cols="2"
      sm="1"
    >
      <v-checkbox
        v-model="isInputEnabled"
        hide-details
      />
    </v-col>

    <v-col
      cols="10"
      sm="11"
    >
      <v-text-field
        :disabled="!isInputEnabled"
        hide-details
        label="I only work if you check the box"
      />
    </v-col>
  </v-row>
</template>
