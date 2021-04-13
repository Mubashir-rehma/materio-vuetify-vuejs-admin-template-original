<template>
  <app-card-code
    title="GeoJSON Map"
    :code="codeGeoJSON"
  >
    <v-card-text>
      <l-map
        :zoom="zoom"
        :center="center"
      >
        <l-tile-layer :url="url" />
        <l-geo-json :geojson="geojson" />
      </l-map>
    </v-card-text>
  </app-card-code>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'
import { LMap, LTileLayer, LGeoJson } from 'vue2-leaflet'
import { codeGeoJSON } from './code'

export default defineComponent({
  components: {
    AppCardCode,
    LMap,
    LTileLayer,
    LGeoJson,
  },
  async created() {
    const response = await fetch('https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson')
    this.geojson = await response.json()
  },
  setup() {
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    const zoom = 8
    const center = [47.313220, -1.319482]
    const geojson = null

    return {
      url,
      zoom,
      center,
      geojson,
      codeGeoJSON,
    }
  },
})
</script>

<style lang="scss">
.vue2leaflet-map{
  &.leaflet-container{
    height: 350px;
  }
}
</style>
