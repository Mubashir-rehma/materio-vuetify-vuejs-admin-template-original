<template>
  <v-alert
    prominent
    type="error"
  >
    <template #text>
      Nunc nonummy metus. Nunc interdum lacus sit amet orci Nullam dictum felis eu pede.
    </template>

    <template #append>
      <v-btn
        size="small"
        variant="text"
      >
        Take action
      </v-btn>
    </template>
  </v-alert>

  <v-alert
    color="blue-grey-darken-2"
    density="compact"
    icon="mdi-school"
    prominent
  >
    Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Aenean ut eros et nisl sagittis vestibulum. Sed aliquam ultrices mauris. Donec vitae orci sed dolor rutrum auctor.
  </v-alert>

  <v-alert
    icon="mdi-shield-lock-outline"
    prominent
    type="info"
    class="mb-0"
  >
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Sed in libero ut nibh placerat accumsan.. Curabitur blandit mollis lacus. Curabitur blandit mollis lacus.
  </v-alert>
</template>
