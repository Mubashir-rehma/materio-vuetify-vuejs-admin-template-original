<template>
  <v-subheader>{{ item.subheader }}</v-subheader>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {}
  },
}
</script>
