<template>
  <div class="demo-space-x">
    <v-btn color="primary">
      Primary
    </v-btn>
    <v-btn color="secondary">
      Secondary
    </v-btn>
    <v-btn color="success">
      Success
    </v-btn>
    <v-btn color="info">
      Info
    </v-btn>
    <v-btn color="warning">
      Warning
    </v-btn>
    <v-btn color="error">
      Error
    </v-btn>
    <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn
          color="primary"
          dark
          v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in ['admin', 'is', 'awesome']"
          :key="index"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
