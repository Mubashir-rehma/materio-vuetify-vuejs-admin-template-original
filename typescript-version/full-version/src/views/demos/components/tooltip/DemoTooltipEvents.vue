<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <v-btn variant="outlined">
      <span>Open On Hover</span> <v-tooltip
        activator="parent"
        anchor="top"
      >
        Open On Hover
      </v-tooltip>
    </v-btn>

    <!-- open on click -->
    <v-btn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <v-tooltip
        open-on-click
        :open-on-hover="false"
        anchor="top"
        activator="parent"
      >
        Open On click
      </v-tooltip>
    </v-btn>

    <!-- open on focus -->
    <v-btn variant="outlined">
      <span>Open On Hover + Focus</span> <v-tooltip
        open-on-focus
        anchor="top"
        activator="parent"
      >
        Open On Hover + Focus
      </v-tooltip>
    </v-btn>
  </div>
</template>
