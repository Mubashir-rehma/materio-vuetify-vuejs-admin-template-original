<script lang="ts" setup>
const radios = ref('Duckduckgo')
</script>

<template>
  <v-radio-group v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <v-radio value="Google">
      <template #label>
        <div>Of course it's <strong class="text-success">Google</strong></div>
      </template>
    </v-radio>

    <v-radio value="Duckduckgo">
      <template #label>
        <div>Definitely <strong class="text-primary">Duckduckgo</strong></div>
      </template>
    </v-radio>
  </v-radio-group>
</template>
