<script setup lang="ts">
const sizes = [
  'xs-small',
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
          icon="mdi-home"
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
          icon="mdi-home"
          :density="density"
        />

        <!-- Divider -->
        <VDivider class="my-4" />

        <!-- Done -->
        <VBtn
          icon="mdi-home"
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
          icon="mdi-home"
          />
          </VBtn>
        -->

        <!-- Done -->
        <VBtn
          icon="mdi-home"
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
            icon="mdi-home"
          />
        </VBtn>
      </VCardText>
      <!-- </VDefaultsProvider> -->
    </VCard>
  </div>
</template>
