<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
</script>

<template>
  <v-row>
    <v-col cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <v-slider
        v-model="value"
        :step="10"
        show-ticks
      />
    </v-col>

    <v-col cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <v-slider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </v-col>

    <v-col cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <v-slider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </v-col>

    <v-col cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <v-slider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </v-col>
  </v-row>
</template>
