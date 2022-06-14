<script lang="ts" setup>
const open = ref(['Users'])

const admins = [
  ['Management', 'mdi-account-multiple-outline'],
  ['Settings', 'mdi-cog-outline'],
]
const cruds = [
  ['Create', 'mdi-plus-outline'],
  ['Read', 'mdi-file-outline'],
  ['Update', 'mdi-update'],
  ['Delete', 'mdi-delete-outline'],
]
</script>

<template>
  <v-list v-model:opened="open">
    <v-list-item
      prepend-icon="mdi-home-outline"
      title="Home"
      value="Home"
    />

    <v-list-group value="Users">
      <template #activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-account-circle-outline"
          title="Users"
          value="Users"
        />
      </template>

      <v-list-group value="Admin">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Admin"
            value="Admin"
          />
        </template>

        <v-list-item
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </v-list-group>

      <v-list-group value="Actions">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Actions"
            value="Actions"
          />
        </template>

        <v-list-item
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </v-list-group>
    </v-list-group>
  </v-list>
</template>
