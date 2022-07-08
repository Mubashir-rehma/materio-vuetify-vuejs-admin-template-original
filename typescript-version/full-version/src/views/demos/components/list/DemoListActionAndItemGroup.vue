<template>
  <VList
    lines="three"
    select-strategy="independent"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #default="{ isActive }">
        <VListItemAvatar start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
          />
        </VListItemAvatar>

        <VListItemHeader>
          <VListItemTitle>Notifications</VListItemTitle>
          <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
        </VListItemHeader>
      </template>
    </VListItem>

    <VListItem value="sound">
      <template #default="{ isActive }">
        <VListItemAvatar start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
          />
        </VListItemAvatar>

        <VListItemHeader>
          <VListItemTitle>Sound</VListItemTitle>
          <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
        </VListItemHeader>
      </template>
    </VListItem>

    <VListItem value="widgets">
      <template #default="{ isActive }">
        <VListItemAvatar start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
          />
        </VListItemAvatar>

        <VListItemHeader>
          <VListItemTitle>Auto-add widgets</VListItemTitle>
          <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
        </VListItemHeader>
      </template>
    </VListItem>
  </VList>
</template>
