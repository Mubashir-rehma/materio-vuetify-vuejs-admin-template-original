<script lang="ts" setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()

const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
</script>

<template>
  <div class="demo-space-x">
    <v-badge
      color="primary"
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <v-icon
        ref="tRefTwitterBadge"
        size="25"
        icon="mdi-twitter"
      />
    </v-badge>

    <v-badge
      color="primary"
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <v-icon
        ref="tRefInstagramBadge"
        size="25"
        icon="mdi-instagram"
      />
    </v-badge>

    <v-badge
      color="primary"
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <v-icon
        ref="tRefWhatsappBadge"
        size="25"
        icon="mdi-whatsapp"
      />
    </v-badge>
  </div>
</template>
