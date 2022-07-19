<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        anchor="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-4.png')" />
      <VTooltip
        anchor="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip anchor="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
        >
          mdi-account-outline
        </VIcon>
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
