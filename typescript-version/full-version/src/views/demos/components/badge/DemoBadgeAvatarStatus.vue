<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
      </VAvatar>
    </VBadge>
  </div>
</template>
