<script lang="ts" setup>
const isMenuVisible = ref(false)
</script>

<template>
  <v-menu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <v-chip v-bind="props">
        VueJS
      </v-chip>
    </template>

    <!-- v-menu list -->
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>VueJS</v-list-item-title>
          <v-list-item-subtitle>
            The Progressive JavaScript Framework
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action class="ms-1">
          <v-btn
            size="x-small"
            icon
            flat
            @click="isMenuVisible = false"
          >
            <v-icon
              size="x-small"
              icon="mdi-close"
            />
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
