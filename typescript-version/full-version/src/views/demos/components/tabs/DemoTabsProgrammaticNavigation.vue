<script lang="ts" setup>
const currentTab = ref(0)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
</script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow v-model="currentTab">
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      <VCard>
        <VCardText>{{ tabItemText }}</VCardText>
      </VCard>
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VDivider
      class="mx-4"
      vertical
    />

    <VBtn
      variant="text"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
