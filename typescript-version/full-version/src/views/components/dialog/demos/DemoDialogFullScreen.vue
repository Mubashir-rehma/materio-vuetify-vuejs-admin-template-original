<script lang="ts" setup>
const isDialogVisible = ref(false)
const notifications = ref(false)
const sound = ref(true)
const widgets = ref(false)
</script>

<template>
  <v-dialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <v-btn v-bind="props">
        Open Dialog
      </v-btn>
    </template>

    <!-- Dialog Content -->
    <v-card>
      <!-- Toolbar -->
      <v-toolbar color="primary">
        <v-btn
          icon
          variant="plain"
          @click="isDialogVisible = false"
        >
          <v-icon
            color="white"
            icon="mdi-close"
          />
        </v-btn>

        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            variant="text"
            @click="isDialogVisible = false"
          >
            Save
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <!-- List -->
      <v-list lines="three">
        <v-list-subheader inset>
          User Controls
        </v-list-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title tag="p">
              Content filtering
            </v-list-item-title>
            <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title tag="p">
              Password
            </v-list-item-title>
            <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <!-- List -->
      <v-list
        lines="three"
        subheader
      >
        <v-list-subheader>General</v-list-subheader>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox
              v-model="notifications"
              color="primary"
            />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title tag="p">
              Notifications
            </v-list-item-title>
            <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox
              v-model="sound"
              color="primary"
            />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title tag="p">
              Sound
            </v-list-item-title>
            <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox
              v-model="widgets"
              color="primary"
            />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title tag="p">
              Auto-add widgets
            </v-list-item-title>
            <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
