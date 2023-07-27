// ❗ WARNING please use your access token from mapbox.com
<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import { onMounted, ref } from 'vue'
import fleetImg from '@images/misc/fleet-car.png'

const accessToken = 'pk.eyJ1Ijoic29jaWFsZXhwbG9yZXIiLCJhIjoiREFQbXBISSJ9.dwFTwfSaWsHvktHrRtpydQ'
const map = ref()
const refCars = ref([])

const showPanel = ref([true, false, false, false])

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-73.999024, 40.75249842],
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-74.03, 40.75699842],
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-73.967524, 40.7599842],
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-74.0325, 40.742992],
      },
    },
  ],
}

onMounted(() => {
  mapboxgl.accessToken = accessToken

  map.value = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-73.999024, 40.75249842],
    zoom: 12.25,
  })

  for (let index = 0; index < geojson.features.length; index++)
    new mapboxgl.Marker(refCars.value[index]).setLngLat(geojson.features[index].geometry.coordinates).addTo(map.value)
})

const vehicleTrackingData = [
  {
    name: 'VOL-342808',
    location: 'Chelsea, NY, USA',
    progress: 88,
    driverName: 'Veronica Herman',
  },
  {
    name: 'VOL-954784',
    location: 'Lincoln Harbor, NY, USA',
    progress: 100,
    driverName: 'Myrtle Ullrich',
  },
  {
    name: 'VOL-342808',
    location: 'Midtown East, NY, USA',
    progress: 60,
    driverName: 'Barry Schowalter',
  },
  {
    name: 'VOL-343908',
    location: 'Hoboken, NY, USA',
    progress: 28,
    driverName: 'Helen Jacobs',
  },
]

const activeIndex = ref(0)

const flyToLocation = (geolocation: number[], index: number) => {
  activeIndex.value = index
  showPanel.value.fill(false)
  showPanel.value[index] = !showPanel.value[index]
  map.value.flyTo({
    center: geolocation,
    zoom: 16,
  })
}
</script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
      >
        <VCardText>
          <h6 class="pb-6 text-h6">
            Fleet
          </h6>

          <div
            v-for="(vehicle, index) in vehicleTrackingData"
            :key="index"
            class="mb-6"
          >
            <div
              class="d-flex align-center justify-space-between cursor-pointer"
              @click="flyToLocation(geojson.features[index].geometry.coordinates, index)"
            >
              <div class="d-flex gap-x-4">
                <VAvatar
                  icon="mdi-bus"
                  variant="tonal"
                />

                <div>
                  <div class="text-body-1 text-high-emphasis">
                    {{ vehicle.name }}
                  </div>

                  <div class="text-body-2">
                    {{ vehicle.location }}
                  </div>
                </div>
              </div>

              <IconBtn density="comfortable">
                <VIcon :icon="showPanel[index] ? 'mdi-chevron-down' : 'mdi-chevron-right'" />
              </IconBtn>
            </div>

            <VExpandTransition mode="out-in">
              <div v-show="showPanel[index]">
                <div class="py-4 mb-4">
                  <div class="d-flex justify-space-between mb-2">
                    <span class="text-body-1 text-high-emphasis ">Delivery Process</span>
                    <span class="text-body-2">{{ vehicle.progress }}%</span>
                  </div>

                  <VProgressLinear
                    model-value="88"
                    color="primary"
                    rounded
                    height="6"
                  />
                </div>

                <div>
                  <VTimeline
                    align="start"
                    truncate-line="both"
                    side="end"
                    density="compact"
                    line-thickness="1"
                    class="ps-2"
                  >
                    <VTimelineItem
                      icon="mdi-check-circle-outline"
                      dot-color="rgb(var(--v-theme-surface))"
                      icon-color="success"
                      fill-dot
                      size="22"
                      :elevation="0"
                    >
                      <div class="text-caption text-uppercase text-success">
                        TRACKING NUMBER CREATED
                      </div>
                      <div class="app-timeline-title">
                        {{ vehicle.driverName }}
                      </div>
                      <div class="app-timeline-text">
                        Sep 01, 7:53 AM
                      </div>
                    </VTimelineItem>

                    <VTimelineItem
                      icon="mdi-check-circle-outline"
                      dot-color="rgb(var(--v-theme-surface))"
                      icon-color="success"
                      fill-dot
                      size="22"
                      :elevation="0"
                    >
                      <div class="text-caption text-uppercase text-success">
                        OUT FOR DELIVERY
                      </div>
                      <div class="app-timeline-title">
                        Veronica Herman
                      </div>
                      <div class="app-timeline-text">
                        Sep 03, 8:02 AM
                      </div>
                    </VTimelineItem>

                    <VTimelineItem
                      icon="mdi-map-marker-outline"
                      dot-color="rgb(var(--v-theme-surface))"
                      icon-color="primary"
                      fill-dot
                      size="22"
                      :elevation="0"
                    >
                      <div class="text-caption text-uppercase text-success">
                        ARRIVED
                      </div>
                      <div class="app-timeline-title">
                        Veronica Herman
                      </div>
                      <div class="app-timeline-text">
                        Sep 04, 8:18 AM
                      </div>
                    </VTimelineItem>
                  </VTimeline>
                </div>
              </div>
            </VExpandTransition>
          </div>
        </VCardText>
      </VCol>

      <!-- 👉 Fleet map  -->
      <VCol
        cols="12"
        md="8"
      >
        <div
          id="mapContainer"
          class="basemap"
        />

        <template
          v-for="i in 4"
          :key="i"
        >
          <img
            ref="refCars"
            :class="i === activeIndex + 1 ? 'marker-focus' : ''"
            :src="fleetImg"
            alt="car Img marker"
            height="42"
            width="20"
          >
        </template>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss">
@import "mapbox-gl/dist/mapbox-gl.css";

.basemap {
  block-size: 80vh;
  inline-size: 100%;
}

.marker-focus {
  filter: drop-shadow(0 0 7px rgb(var(--v-theme-primary)));
}

.mapboxgl-ctrl-bottom-left,
.mapboxgl-ctrl-bottom-right {
  display: none;
}
</style>
