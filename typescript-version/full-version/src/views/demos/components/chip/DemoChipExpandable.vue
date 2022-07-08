<script lang="ts" setup>
const isMenuVisible = ref(false)
</script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemContent>
          <VListItemTitle>VueJS</VListItemTitle>
          <VListItemSubtitle>
            The Progressive JavaScript Framework
          </VListItemSubtitle>
        </VListItemContent>

        <VListItemAction class="ms-1">
          <VBtn
            size="x-small"
            icon
            flat
            @click="isMenuVisible = false"
          >
            <VIcon
              size="x-small"
              icon="mdi-close"
            />
          </VBtn>
        </VListItemAction>
      </VListItem>
    </VList>
  </VMenu>
</template>
