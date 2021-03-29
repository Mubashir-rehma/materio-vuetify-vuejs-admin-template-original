<template>
  <div class="demo-space-x">
    <v-btn
      :loading="loading"
      :disabled="loading"
      color="primary"
      @click="loader = 'loading'"
    >
      Accept Terms
    </v-btn>

    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="secondary"
      class="white--text"
      @click="loader = 'loading3'"
    >
      Upload
      <v-icon
        right
        dark
      >
        {{ icons.mdiCloudUpload }}
      </v-icon>
    </v-btn>

    <v-btn
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      Custom Loader
      <template #loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    <v-btn
      :loading="loading4"
      :disabled="loading4"
      color="info"
      @click="loader = 'loading4'"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <v-icon light>{{ icons.mdiCached }}</v-icon>
        </span>
      </template>
    </v-btn>

    <v-btn
      :loading="loading5"
      :disabled="loading5"
      color="warning"
      class="white--text"
      fab
      @click="loader = 'loading5'"
    >
      <v-icon dark>
        {{ icons.mdiCloudUpload }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiCloudUpload, mdiCached } from '@mdi/js'

export default {
  setup() {
    const loader = ref()
    const loading = ref(false)
    const loading2 = ref(false)
    const loading3 = ref(false)
    const loading4 = ref(false)
    const loading5 = ref(false)

    return {
      loader,
      loading,
      loading2,
      loading3,
      loading4,
      loading5,

      // icon
      icons: { mdiCloudUpload, mdiCached },
    }
  },

  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => {
        this[l] = false
      }, 3000)

      this.loader = null
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
