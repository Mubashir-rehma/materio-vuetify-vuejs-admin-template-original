export const colors = { ts: `<template>
  <div class="demo-space-x">
    <VAvatar color="primary">
      PI
    </VAvatar>

    <VAvatar color="secondary">
      SE
    </VAvatar>

    <VAvatar color="success">
      SU
    </VAvatar>

    <VAvatar color="info">
      IN
    </VAvatar>

    <VAvatar color="warning">
      WA
    </VAvatar>

    <VAvatar color="error">
      ER
    </VAvatar>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VAvatar color="primary">
      PI
    </VAvatar>

    <VAvatar color="secondary">
      SE
    </VAvatar>

    <VAvatar color="success">
      SU
    </VAvatar>

    <VAvatar color="info">
      IN
    </VAvatar>

    <VAvatar color="warning">
      WA
    </VAvatar>

    <VAvatar color="error">
      ER
    </VAvatar>
  </div>
</template>
` }

export const group = { ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
</script>

<template>
  <div class="v-avatar-group demo-avatar-group">
    <VAvatar :size="45">
      <VImg :src="avatar1" />
      <VTooltip
        activator="parent"
        location="top"
      >
        John Doe
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="avatar2" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Jennie Obrien
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="avatar3" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Peter Harper
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="avatar4" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Vivian Padilla
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="avatar5" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Scott Wells
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="avatar6" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Angel Bishop
      </VTooltip>
    </VAvatar>

    <VAvatar
      :color="$vuetify.theme.current.dark ? '#3A3B59' : '#F0EFF0'"
      :size="45"
    >
      +3
    </VAvatar>
  </div>
</template>

<style lang="scss">
.demo-avatar-group{
  &.v-avatar-group {
    .v-avatar{
      &:last-child{
        border: none;
      }
    }
  }
}
</style>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
</script>

<template>
  <div class="v-avatar-group demo-avatar-group">
    <VAvatar :size="45">
      <VImg :src="avatar1" />
      <VTooltip
        activator="parent"
        location="top"
      >
        John Doe
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="avatar2" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Jennie Obrien
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="avatar3" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Peter Harper
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="avatar4" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Vivian Padilla
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="avatar5" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Scott Wells
      </VTooltip>
    </VAvatar>

    <VAvatar :size="45">
      <VImg :src="avatar6" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Angel Bishop
      </VTooltip>
    </VAvatar>

    <VAvatar
      :color="$vuetify.theme.current.dark ? '#3A3B59' : '#F0EFF0'"
      :size="45"
    >
      +3
    </VAvatar>
  </div>
</template>

<style lang="scss">
.demo-avatar-group{
  &.v-avatar-group {
    .v-avatar{
      &:last-child{
        border: none;
      }
    }
  }
}
</style>
` }

export const icons = { ts: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      icon="ri-home-line"
    />

    <VAvatar
      color="secondary"
      icon="ri-cloud-line"
    />

    <VAvatar
      color="success"
      icon="ri-bell-line"
    />

    <VAvatar
      color="info"
      icon="ri-user-line"
    />

    <VAvatar
      color="warning"
      icon="ri-alert-line"
    />

    <VAvatar
      color="error"
      icon="ri-message-line"
    />
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      icon="ri-home-line"
    />

    <VAvatar
      color="secondary"
      icon="ri-cloud-line"
    />

    <VAvatar
      color="success"
      icon="ri-bell-line"
    />

    <VAvatar
      color="info"
      icon="ri-user-line"
    />

    <VAvatar
      color="warning"
      icon="ri-alert-line"
    />

    <VAvatar
      color="error"
      icon="ri-message-line"
    />
  </div>
</template>
` }

export const images = { ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
</script>

<template>
  <div class="demo-space-x">
    <VAvatar :image="avatar1" />

    <VAvatar :image="avatar2" />

    <VAvatar :image="avatar3" />

    <VAvatar :image="avatar4" />

    <VAvatar :image="avatar5" />

    <VAvatar :image="avatar6" />
  </div>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
</script>

<template>
  <div class="demo-space-x">
    <VAvatar :image="avatar1" />

    <VAvatar :image="avatar2" />

    <VAvatar :image="avatar3" />

    <VAvatar :image="avatar4" />

    <VAvatar :image="avatar5" />

    <VAvatar :image="avatar6" />
  </div>
</template>
` }

export const rounded = { ts: `<template>
  <div class="demo-space-x">
    <VAvatar
      rounded="0"
      color="primary"
      icon="ri-user-line"
    />

    <VAvatar
      rounded="sm"
      color="secondary"
      icon="ri-user-line"
    />

    <VAvatar
      rounded
      color="success"
      icon="ri-user-line"
    />

    <VAvatar
      rounded="lg"
      color="info"
      icon="ri-user-line"
    />

    <VAvatar
      rounded="xl"
      color="warning"
      icon="ri-user-line"
    />

    <VAvatar
      color="error"
      icon="ri-user-line"
    />
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VAvatar
      rounded="0"
      color="primary"
      icon="ri-user-line"
    />

    <VAvatar
      rounded="sm"
      color="secondary"
      icon="ri-user-line"
    />

    <VAvatar
      rounded
      color="success"
      icon="ri-user-line"
    />

    <VAvatar
      rounded="lg"
      color="info"
      icon="ri-user-line"
    />

    <VAvatar
      rounded="xl"
      color="warning"
      icon="ri-user-line"
    />

    <VAvatar
      color="error"
      icon="ri-user-line"
    />
  </div>
</template>
` }

export const sizes = { ts: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      size="x-small"
    >
      <small>PI</small>
    </VAvatar>

    <VAvatar
      color="secondary"
      size="small"
    >
      PI
    </VAvatar>

    <VAvatar color="success">
      PI
    </VAvatar>

    <VAvatar
      color="info"
      size="large"
    >
      <span class="text-lg">PI</span>
    </VAvatar>

    <VAvatar
      color="error"
      size="x-large"
    >
      <span class="text-lg">PI</span>
    </VAvatar>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      size="x-small"
    >
      <small>PI</small>
    </VAvatar>

    <VAvatar
      color="secondary"
      size="small"
    >
      PI
    </VAvatar>

    <VAvatar color="success">
      PI
    </VAvatar>

    <VAvatar
      color="info"
      size="large"
    >
      <span class="text-lg">PI</span>
    </VAvatar>

    <VAvatar
      color="error"
      size="x-large"
    >
      <span class="text-lg">PI</span>
    </VAvatar>
  </div>
</template>
` }

export const tonal = { ts: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      variant="tonal"
    >
      PI
    </VAvatar>

    <VAvatar
      color="secondary"
      variant="tonal"
    >
      SE
    </VAvatar>
    <VAvatar
      color="success"
      variant="tonal"
    >
      SU
    </VAvatar>
    <VAvatar
      color="info"
      variant="tonal"
    >
      IN
    </VAvatar>
    <VAvatar
      color="warning"
      variant="tonal"
    >
      WA
    </VAvatar>
    <VAvatar
      color="error"
      variant="tonal"
    >
      ER
    </VAvatar>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      variant="tonal"
    >
      PI
    </VAvatar>

    <VAvatar
      color="secondary"
      variant="tonal"
    >
      SE
    </VAvatar>
    <VAvatar
      color="success"
      variant="tonal"
    >
      SU
    </VAvatar>
    <VAvatar
      color="info"
      variant="tonal"
    >
      IN
    </VAvatar>
    <VAvatar
      color="warning"
      variant="tonal"
    >
      WA
    </VAvatar>
    <VAvatar
      color="error"
      variant="tonal"
    >
      ER
    </VAvatar>
  </div>
</template>
` }

