<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = ref([(v: string) => v.length <= 25 || 'Max 25 characters'])
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </v-col>

    <v-col cols="12">
      <v-text-field
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </v-col>
  </v-row>
</template>
