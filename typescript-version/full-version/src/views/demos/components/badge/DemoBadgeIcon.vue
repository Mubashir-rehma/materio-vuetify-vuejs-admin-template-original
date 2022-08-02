<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="mdi-information-variant" />
      </template>

      <VAvatar>
        <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="mdi-lock-open-outline">
      <VAvatar>
        <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
      </VAvatar>
    </VBadge>
  </div>
</template>
