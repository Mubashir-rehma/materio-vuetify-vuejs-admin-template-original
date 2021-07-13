<template>
  <app-card-code
    title="Basic Map"
    :code="codeBasic"
  >
    <v-card-text>
      <l-map
        :zoom="zoom"
        :center="center"
      >
        <l-tile-layer :url="url" />
        <l-circle
          :lat-lng="circle.center"
          :radius="circle.radius"
          :color="circle.color"
        />
      </l-map>
    </v-card-text>
  </app-card-code>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'
import { LMap, LTileLayer, LCircle } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import { codeBasic } from './code'

export default {
  components: {
    AppCardCode,
    LMap,
    LTileLayer,
    LCircle,
  },
  setup() {
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    const zoom = 8
    const center = [47.31322, -1.319482]
    const circle = {
      center: [47.41322, -1.0482],
      radius: 4500,
      color: '#EA5455',
    }

    return {
      url,
      zoom,
      center,
      circle,
      codeBasic,
    }
  },
}
</script>

<style lang="scss">
.vue2leaflet-map {
  &.leaflet-container {
    height: 350px;
  }
}
</style>
