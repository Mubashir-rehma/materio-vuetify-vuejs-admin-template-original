<script lang="ts" setup>
const items = [
  { type: 'subheader', title: 'Today' },
  {
    prependAvatar: dynamicImgImport('@/assets/images/avatars/avatar-1.png'),
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: dynamicImgImport('@/assets/images/avatars/avatar-2.png'),
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I\'m out of town this weekend.',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: dynamicImgImport('@/assets/images/avatars/avatar-3.png'),
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: dynamicImgImport('@/assets/images/avatars/avatar-4.png'),
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: dynamicImgImport('@/assets/images/avatars/avatar-5.png'),
    title: 'Recipe to try',
    subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
]
</script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
