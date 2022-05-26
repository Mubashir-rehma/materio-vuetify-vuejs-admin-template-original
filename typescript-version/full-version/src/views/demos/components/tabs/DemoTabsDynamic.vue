<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
</script>

<template>
  <v-tabs v-model="currentTab">
    <v-tab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </v-tab>
  </v-tabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <v-btn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </v-btn>

    <v-divider
      class="mx-4"
      vertical
    />

    <v-btn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </v-btn>
  </div>
</template>
