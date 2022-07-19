<script lang="ts" setup>
const items: { name: string; avatar: string }[] = [
  { name: 'Sandra Adams', avatar: dynamicImgImport('@/assets/images/avatars/avatar-1.png') },
  { name: 'Ali Connors', avatar: dynamicImgImport('@/assets/images/avatars/avatar-2.png') },
  { name: 'Trevor Hansen', avatar: dynamicImgImport('@/assets/images/avatars/avatar-3.png') },
  { name: 'Tucker Smith', avatar: dynamicImgImport('@/assets/images/avatars/avatar-4.png') },
  { name: 'Britta Holt', avatar: dynamicImgImport('@/assets/images/avatars/avatar-5.png') },
]

const value = ref(['Sandra Adams'])
</script>

<template>
  <VSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    multiple
  >
    <template #selection="{ item }">
      <VChip label>
        <VAvatar
          :image="item.raw.avatar"
          class="ms-n1 me-2"
        />
        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </VSelect>
</template>
