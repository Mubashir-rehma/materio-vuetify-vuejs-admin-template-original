<template>
  <div class="v-avatar-group">
    <VAvatar size="large">
      <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-3.png')" />
      <VTooltip
        activator="parent"
        location="start"
      >
        Peter Harper
      </VTooltip>
    </VAvatar>

    <VAvatar size="large">
      <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-4.png')" />
      <VTooltip
        activator="parent"
        location="start"
      >
        Vivian Padilla
      </VTooltip>
    </VAvatar>

    <VAvatar size="large">
      <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-5.png')" />
      <VTooltip
        activator="parent"
        location="start"
      >
        Scott Wells
      </VTooltip>
    </VAvatar>

    <VAvatar
      color="grey-200"
      size="large"
    >
      <span class="text-secondary"> +3</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        3 and more
      </VTooltip>
    </VAvatar>
  </div>
</template>
