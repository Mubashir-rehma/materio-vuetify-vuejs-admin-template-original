<template>
  <v-text-field
    v-model="message"
    :append-icon="marker ? mdiMapMarker : mdiMapMarkerOff"
    :append-outer-icon="message ? mdiSend : mdiMicrophone"
    filled
    :clear-icon="mdiCloseCircle"
    clearable
    label="Message"
    type="text"
    hide-details
    @click:append="toggleMarker"
    @click:append-outer="sendMessage"
    @click:clear="clearMessage"
  ></v-text-field>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import {
  mdiMapMarker,
  mdiSend,
  mdiCloseCircle,
  mdiMicrophone,
  mdiMapMarkerOff,
} from '@mdi/js'

export default defineComponent({
  setup() {
    const password = ref('Password')
    const show = ref(false)
    const message = ref('Hey!')
    const marker = ref(true)
    const iconIndex = ref(0)

    const toggleMarker = () => {
      marker.value = !marker.value
    }

    const clearMessage = () => {
      message.value = ''
    }
    const resetIcon = () => {
      iconIndex.value = 0
    }

    const sendMessage = () => {
      resetIcon()
      clearMessage()
    }

    return {
      password,
      show,
      message,
      marker,
      iconIndex,
      sendMessage,
      toggleMarker,
      clearMessage,
      mdiMapMarker,
      mdiSend,
      mdiCloseCircle,
      mdiMicrophone,
      mdiMapMarkerOff,
    }
  },
})
</script>
