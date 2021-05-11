<template>
  <app-card-code
    title="Popup Map"
    :code="codePopup"
  >
    <v-card-text>
      <l-map
        :zoom="zoom"
        :center="center"
      >
        <l-tile-layer :url="url" />
        <l-marker :lat-lng="markerLatLng">
          <l-popup>You're here!</l-popup>
        </l-marker>
      </l-map>
    </v-card-text>
  </app-card-code>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'
// eslint-disable-next-line object-curly-newline
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import { codePopup } from './code'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    AppCardCode,
  },
  setup() {
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    const zoom = 8
    const center = [47.31322, -1.319482]
    const markerLatLng = [47.31322, -1.319482, { draggable: 'true' }]

    return {
      url,
      zoom,
      center,
      markerLatLng,
      codePopup,
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
