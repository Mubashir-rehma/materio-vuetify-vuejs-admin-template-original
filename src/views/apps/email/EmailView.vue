<template>
  <div>
    <!-- 1st Row -->
    <div class="d-flex align-center">
      <v-btn
        icon
        small
        @click="$emit('close-email-view')"
      >
        <v-icon>{{ icons.mdiChevronLeft }}</v-icon>
      </v-btn>
      <h1>{{ emailViewData.subject }}</h1>
      <v-badge
        v-for="label in emailViewData.labels"
        :key="label"
        :color="resolveLabelColor(label)"
        inline
        :content="label"
        class="email-label-chip text-capitalize v-badge-light-bg mr-2"
        :class="`${resolveLabelColor(label)}--text`"
      >
      </v-badge>
    </div>
    <pre>{{ emailViewData }}</pre>
  </div>
</template>

<script>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import useEmail from './useEmail'

export default {
  props: {
    emailViewData: {
      type: Object,
      required: true,
    },
    opendedEmailMeta: {
      type: Object,
      required: true,
    },
  },
  setup() {
    // ————————————————————————————————————
    //* ——— useEmail
    // ————————————————————————————————————

    const { resolveLabelColor } = useEmail()

    return {
      // useEmail
      resolveLabelColor,

      // Icons
      icons: {
        mdiChevronLeft,
        mdiChevronRight,
      },
    }
  },
}
</script>

<style>
</style>
