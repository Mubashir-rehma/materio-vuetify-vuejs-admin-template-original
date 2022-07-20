<template>
  <div class="demo-space-x">
    <VChip pill>
      <VAvatar
        start
        :image="dynamicImgImport('@/assets/images/avatars/avatar-1.png')"
      />
      <span>John Doe</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="dynamicImgImport('@/assets/images/avatars/avatar-2.png')"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="dynamicImgImport('@/assets/images/avatars/avatar-3.png')"
      />
      <span>Felicia Risker</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="dynamicImgImport('@/assets/images/avatars/avatar-4.png')"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
