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
    max-width="auto"
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
      <v-list
        lines="two"
        subheader
      >
        <v-list-subheader inset>
          User Controls
        </v-list-subheader>
        <v-list-item
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <v-list-item
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </v-list>

      <v-divider />

      <!-- List -->
      <v-list
        lines="two"
        subheader
      >
        <v-list-subheader>General</v-list-subheader>
        <v-list-item
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
        >
          <template #prepend>
            <div class="me-2">
              <v-checkbox
                v-model="notifications"
                color="primary"
                inline
              />
            </div>
          </template>
        </v-list-item>
        <v-list-item
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
        >
          <template #prepend>
            <div class="me-2">
              <v-checkbox
                v-model="sound"
                color="primary"
                inline
              />
            </div>
          </template>
        </v-list-item>

        <v-list-item
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
        >
          <template #prepend>
            <div class="me-2">
              <v-checkbox
                v-model="widgets"
                color="primary"
                inline
              />
            </div>
          </template>
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
