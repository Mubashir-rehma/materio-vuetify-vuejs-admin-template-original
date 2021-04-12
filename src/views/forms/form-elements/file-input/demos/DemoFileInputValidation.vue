<template>
  <v-file-input
    :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    :prepend-icon="icons.mdiCamera"
    label="Avatar"
  ></v-file-input>
</template>

<script>
import { mdiCamera } from '@mdi/js'

export default {
  setup() {
    const rules = [
      value =>
        // eslint-disable-next-line implicit-arrow-linebreak
        !value || value.size < 1000000 || 'Avatar size should be less than 1 MB!',
    ]

    return { rules, icons: { mdiCamera } }
  },
}
</script>
