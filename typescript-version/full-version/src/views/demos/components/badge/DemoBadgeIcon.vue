<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VAvatar size="15">
          <VIcon
            color="white"
            size="16"
            icon="mdi-information-variant"
          />
        </VAvatar>
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
