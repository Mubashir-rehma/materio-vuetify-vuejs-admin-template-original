<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
      </VAvatar>
    </VBadge>
  </div>
</template>
