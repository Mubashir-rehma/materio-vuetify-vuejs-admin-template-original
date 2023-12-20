<script setup lang="ts">
const sizes = [
  'x-small',
  'small',
  'default',
  'large',
  'x-large',
]

const densities: any = [
  'default',
  'comfortable',
  'compact',
]
</script>

<template>
  <div>
    <!--
      <p
      v-for="i in 1"
      :key="i"
      >
      analytics
      {{ String($vuetify.locale.isRtl) }}
      </p>
    -->
    <VCard>
      <!-- <VDefaultsProvider :defaults="{ VBtn: { color: 'default', variant: 'text' } }"> -->
      <VCardText>
        <!-- Size -->
        <VBtn>
          Button
        </VBtn>
        <VBtn
          v-for="size in sizes"
          :key="size"
          icon="ri-home-line"
          :size="size"
        />

        <!-- Divider -->
        <VDivider class="my-4" />

        <!-- Density -->
        <VBtn>
          Button
        </VBtn>
        <VBtn
          v-for="density in densities"
          :key="density"
          icon="ri-home-line"
          :density="density"
        />

        <!-- Divider -->
        <VDivider class="my-4" />

        <!-- Done -->
        <VBtn
          icon="ri-home-line"
          density="compact"
        />
        <!--
          <VBtn
          size="default"
          icon
          density="compact"
          >
          <VIcon
          size="22"
          icon="ri-home-line"
          />
          </VBtn>
        -->

        <!-- Done -->
        <VBtn
          icon="ri-home-line"
          density="comfortable"
        />

        <!-- Done -->
        <VBtn
          size="large"
          icon
          density="compact"
        >
          <VIcon
            size="24"
            icon="ri-home-line"
          />
        </VBtn>
      </VCardText>
      <!-- </VDefaultsProvider> -->
    </VCard>
  </div>
</template>
