<script lang="ts" setup>
const radioGroup = ref(1)
const rules = [(value: number) => (value !== 3 ? true : 'Do not select the third one!')]
</script>

<template>
  <v-radio-group
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <v-radio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="`Radio ${n}`"
      :value="n"
    />
  </v-radio-group>
</template>
