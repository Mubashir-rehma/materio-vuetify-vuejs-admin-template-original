<template>
  <v-row>
    <v-col cols="12">
      <leaflet-basic />
    </v-col>

    <v-col cols="12">
      <leaflet-marker-circle-polygon />
    </v-col>

    <v-col cols="12">
      <leaflet-popup />
    </v-col>

    <v-col cols="12">
      <leaflet-geo-jSON />
    </v-col>

    <v-col cols="12">
      <leaflet-group />
    </v-col>

    <v-col cols="12">
      <leaflet-custom-icon />
    </v-col>
  </v-row>
</template>

<script>
import LeafletBasic from './LeafletBasic.vue'
import LeafletMarkerCirclePolygon from './LeafletMarkerCirclePolygon.vue'
import LeafletPopup from './LeafletPopup.vue'
import LeafletGeoJSON from './LeafletGeoJSON.vue'
import LeafletGroup from './LeafletGroup.vue'
import LeafletCustomIcon from './LeafletCustomIcon.vue'

export default {
  components: {
    LeafletBasic,
    LeafletMarkerCirclePolygon,
    LeafletPopup,
    LeafletGeoJSON,
    LeafletGroup,
    LeafletCustomIcon,
  },
}
</script>

<style lang="scss">
.vue2leaflet-map {
  height: 400px;
  z-index: 1;
}
</style>
