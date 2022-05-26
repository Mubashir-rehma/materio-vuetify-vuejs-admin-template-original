<script lang="ts" setup>
const satisfactionEmojis = ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
const slider = ref(45)
</script>

<template>
  <v-row>
    <v-col cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <v-slider
        v-model="slider"
        thumb-label
      />
    </v-col>

    <v-col cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <v-slider
        v-model="slider"
        thumb-label="always"
      />
    </v-col>

    <v-col cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <v-slider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </v-col>

    <v-col cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <v-slider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </v-slider>
    </v-col>
  </v-row>
</template>
