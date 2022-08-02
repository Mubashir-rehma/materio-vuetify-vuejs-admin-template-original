<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- 👉 default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- 👉 bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- 👉 dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
      </VAvatar>
    </VBadge>

    <!-- 👉 inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
      </VAvatar>
    </VBadge>
  </div>
</template>
