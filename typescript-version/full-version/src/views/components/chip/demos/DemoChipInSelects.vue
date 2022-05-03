<script lang="ts" setup>
const chips = ref(['Programming', 'Playing video games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing video games', 'Sleeping'])

const removeChips = (item: string) => {
  chips.value.splice(chips.value.indexOf(item), 1)
  chips.value = [...chips.value]
}

</script>

<template>
  <v-combobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    :items="items"
    hide-details
    variant="outlined"
    label="Your favorite hobbies"
    prepend-icon="mdi-filter-variant"
  />
</template>
