<script lang="ts" setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'
import avatar2 from '@/assets/images/avatars/avatar-2.png'
import avatar3 from '@/assets/images/avatars/avatar-3.png'
import avatar4 from '@/assets/images/avatars/avatar-4.png'
import avatar5 from '@/assets/images/avatars/avatar-5.png'

const items: { name: string; avatar: string }[] = [
  { name: 'Sandra Adams', avatar: avatar1 },
  { name: 'Ali Connors', avatar: avatar2 },
  { name: 'Trevor Hansen', avatar: avatar3 },
  { name: 'Tucker Smith', avatar: avatar4 },
  { name: 'Britta Holt', avatar: avatar5 },
]

const value = ref(['Sandra Adams'])
</script>

<template>
  <v-select
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    multiple
  >
    <template #selection="{ item }">
      <v-chip label>
        <v-avatar
          :image="item.raw.avatar"
          class="ms-n1 me-2"
        />
        <span>{{ item.title }}</span>
      </v-chip>
    </template>
  </v-select>
</template>
