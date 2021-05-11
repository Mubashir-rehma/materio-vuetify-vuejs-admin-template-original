<template>
  <v-card>
    <div class="d-flex">
      <div>
        <v-card-title class="text-base font-weight-bold">
          {{ statTitle }}
        </v-card-title>
        <v-card-text class="d-flex">
          <h2 class="text-2xl">
            {{ statistics }}
          </h2> <span
            class="text-xs"
            :class="checkChange(change) ? 'success--text':'error--text'"
          > {{ change }}</span>
        </v-card-text>
        <v-card-text>
          <v-chip
            small
            :color="chipColor"
            class="v-chip-light-bg font-weight-bold"
            :class="`${chipColor}--text`"
          >
            {{ chipText }}
          </v-chip>
        </v-card-text>
      </div>
      <v-spacer></v-spacer>
      <div class="avatar-img">
        <v-img
          :width="avatarWidth"
          :src="avatar"
        ></v-img>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    statTitle: { type: String, default: '' },
    statistics: { type: String, default: '' },
    change: { type: String, default: '' },
    chipText: { type: String, default: '' },
    chipColor: { type: String, default: '' },
    avatar: { type: String, default: '' },
    avatarWidth: { type: String, default: '' },
  },
  setup() {
    const checkChange = value => {
      const firstChar = value.charAt(0)
      if (firstChar === '+') {
        return true
      }

      return false
    }

    return { checkChange }
  },
}
</script>

<style lang="scss" scoped>
.avatar-img {
  position: absolute;
  top: -21px;
  right: 0;
  bottom: 0;
}
</style>
