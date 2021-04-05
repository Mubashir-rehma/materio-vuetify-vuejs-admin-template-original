<template>
  <div>
    <v-card>
      <v-card-title>
        <h4>{{ $t('hello') }}</h4>
      </v-card-title>
      <v-card-actions>
        <v-btn
          color="primary"
          @click="loadLanguageAsync('fr')"
        >
          Franch
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { loadLanguageAsync } from '@/plugins/i18n'

export default {
  data: () => ({
    items: [],
  }),
  methods: {
    loadLanguageAsync,
  },
}
</script>
