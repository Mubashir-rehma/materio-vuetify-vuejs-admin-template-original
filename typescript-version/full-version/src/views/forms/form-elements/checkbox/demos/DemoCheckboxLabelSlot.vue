<script lang="ts" setup>
const checkbox = ref(false)
</script>

<template>
  <v-checkbox
    v-model="checkbox"
    hide-details
  >
    <template #label>
      <div>
        I agree that
        <v-tooltip anchor="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </v-tooltip>
        is awesome
      </div>
    </template>
  </v-checkbox>
</template>
