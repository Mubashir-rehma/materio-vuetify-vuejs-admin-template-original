<template>
  <v-list
    lines="three"
    select-strategy="independent"
  >
    <v-list-subheader>General</v-list-subheader>

    <v-list-item value="notifications">
      <template #default="{ isActive }">
        <v-list-item-avatar start>
          <v-checkbox
            :model-value="isActive"
            color="primary"
            hide-details
          />
        </v-list-item-avatar>

        <v-list-item-header>
          <v-list-item-title>Notifications</v-list-item-title>
          <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
        </v-list-item-header>
      </template>
    </v-list-item>

    <v-list-item value="sound">
      <template #default="{ isActive }">
        <v-list-item-avatar start>
          <v-checkbox
            :model-value="isActive"
            color="primary"
            hide-details
          />
        </v-list-item-avatar>

        <v-list-item-header>
          <v-list-item-title>Sound</v-list-item-title>
          <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
        </v-list-item-header>
      </template>
    </v-list-item>

    <v-list-item value="widgets">
      <template #default="{ isActive }">
        <v-list-item-avatar start>
          <v-checkbox
            :model-value="isActive"
            color="primary"
            hide-details
          />
        </v-list-item-avatar>

        <v-list-item-header>
          <v-list-item-title>Auto-add widgets</v-list-item-title>
          <v-list-item-subtitle>Automatically add home screen widgets when downloads complete</v-list-item-subtitle>
        </v-list-item-header>
      </template>
    </v-list-item>
  </v-list>
</template>
