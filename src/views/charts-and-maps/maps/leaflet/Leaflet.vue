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
import LeafletBasic from './demos/LeafletBasic.vue'
import LeafletMarkerCirclePolygon from './demos/LeafletMarkerCirclePolygon.vue'
import LeafletPopup from './demos/LeafletPopup.vue'
import LeafletGeoJSON from './demos/LeafletGeoJSON.vue'
import LeafletGroup from './demos/LeafletGroup.vue'
import LeafletCustomIcon from './demos/LeafletCustomIcon.vue'

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
