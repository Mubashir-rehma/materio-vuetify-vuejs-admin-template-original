<script lang="ts" setup>
const isDialogVisible = ref(false)
const notifications = ref(false)
const sound = ref(true)
const widgets = ref(false)
</script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    max-width="auto"
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="mdi-close"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList
        lines="two"
        subheader
      >
        <VListSubheader inset>
          User Controls
        </VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        subheader
      >
        <VListSubheader>General</VListSubheader>
        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
        >
          <template #prepend>
            <div class="me-2">
              <VCheckbox
                v-model="notifications"
                color="primary"
              />
            </div>
          </template>
        </VListItem>
        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
        >
          <template #prepend>
            <div class="me-2">
              <VCheckbox
                v-model="sound"
                color="primary"
              />
            </div>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
        >
          <template #prepend>
            <div class="me-2">
              <VCheckbox
                v-model="widgets"
                color="primary"
              />
            </div>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
