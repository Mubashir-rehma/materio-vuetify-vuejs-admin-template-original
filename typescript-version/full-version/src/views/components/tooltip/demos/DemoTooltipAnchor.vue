<template>
  <div class="demo-space-x">
    <v-btn variant="outlined">
      Tooltip on End
      <v-tooltip
        activator="parent"
        anchor="end"
      >
        End Tooltip
      </v-tooltip>
    </v-btn>

    <v-btn variant="outlined">
      Tooltip on Start
      <v-tooltip
        activator="parent"
        anchor="start"
      >
        Start Tooltip
      </v-tooltip>
    </v-btn>

    <v-btn variant="outlined">
      Tooltip on Top
      <v-tooltip
        activator="parent"
      >
        Top Tooltip
      </v-tooltip>
    </v-btn>

    <v-btn variant="outlined">
      Tooltip on Bottom
      <v-tooltip
        activator="parent"
        anchor="bottom"
      >
        Bottom Tooltip
      </v-tooltip>
    </v-btn>
  </div>
</template>
