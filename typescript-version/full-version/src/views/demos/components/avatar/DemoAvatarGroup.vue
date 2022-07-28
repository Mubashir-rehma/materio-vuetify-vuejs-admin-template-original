<template>
  <div class="v-avatar-group">
    <VAvatar :size="45">
      <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
      <VTooltip
        activator="parent"
        location="start"
      >
        John Doe
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-2.png')" />
      <VTooltip
        activator="parent"
        location="start"
      >
        Jennie Obrien
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-3.png')" />
      <VTooltip
        activator="parent"
        location="start"
      >
        Peter Harper
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-4.png')" />
      <VTooltip
        activator="parent"
        location="start"
      >
        Vivian Padilla
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-5.png')" />
      <VTooltip
        activator="parent"
        location="start"
      >
        Scott Wells
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-6.png')" />
      <VTooltip
        activator="parent"
        location="start"
      >
        Angel Bishop
      </VTooltip>
    </VAvatar>
  </div>
</template>
