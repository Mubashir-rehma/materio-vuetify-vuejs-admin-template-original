<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <v-btn>
      scale transition
      <v-tooltip
        anchor="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </v-tooltip>
    </v-btn>

    <!-- Scroll x transition -->
    <v-btn>
      scroll X transition
      <v-tooltip
        anchor="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </v-tooltip>
    </v-btn>

    <!-- Scroll y transition -->
    <v-btn>
      scroll y transition
      <v-tooltip
        anchor="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </v-tooltip>
    </v-btn>
  </div>
</template>
