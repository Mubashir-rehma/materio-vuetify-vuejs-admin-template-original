<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

interface Props {
  isDrawerOpen: boolean
}

interface Emit {
  (e: 'update:isDrawerOpen', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const handleDrawerModelValueUpdate = (val: boolean) => {
  emit('update:isDrawerOpen', val)
}
</script>

<template>
  <VNavigationDrawer
    :model-value="props.isDrawerOpen"
    temporary
    location="end"
    width="370"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Header -->
    <AppDrawerHeaderSection
      title="Add a Customer"
      @cancel="$emit('update:isDrawerOpen', false)"
    />

    <VCard flat>
      <PerfectScrollbar
        :options="{ wheelPropagation: false }"
        class="h-100"
      >
        <VCardText style="height: calc(100vh - 5rem);">
          <VForm @submit.prevent="">
            <VRow>
              <VCol>
                <div class="text-body-1 font-weight-medium text-high-emphasis">
                  Basic Information
                </div>
              </VCol>

              <VCol cols="12">
                <VTextField
                  label="Name*"
                  placeholder="John Doe"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  label="Email*"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  label="mobile*"
                  placeholder="+(123) 456-7890"
                />
              </VCol>

              <VCol>
                <div class="text-body-1 font-weight-medium text-high-emphasis">
                  Shipping Information
                </div>
              </VCol>

              <VCol cols="12">
                <VTextField
                  label="Address Line 1*"
                  placeholder="45, Rocker Terrace"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  placeholder="Empire Heights,"
                  label="Address Line 2*"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  label="Town*"
                  placeholder="New York"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  label="State*"
                  placeholder="Southern tip"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  placeholder="Town*"
                  label="New York"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  label="Post Code*"
                  placeholder="982347"
                />
              </VCol>

              <VCol cols="12">
                <VSelect
                  placeholder="United States"
                  label="Country"
                  :items="['United States', 'United Kingdom', 'Canada']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-space-between">
                  <div class="d-flex flex-column gap-y-1">
                    <div class="text-body-2 font-weight-medium text-high-emphasis">
                      Use as a billing address?
                    </div>
                    <span>Please check budget for more info</span>
                  </div>
                  <VSwitch />
                </div>
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-start">
                  <VBtn
                    color="primary"
                    class="me-4"
                  >
                    Add
                  </VBtn>
                  <VBtn
                    color="error"
                    variant="outlined"
                    @click="$emit('update:isDrawerOpen', false)"
                  >
                    Discard
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </PerfectScrollbar>
    </VCard>
  </VNavigationDrawer>
</template>

<style lang="scss">
.v-navigation-drawer__content {
  overflow-y: hidden !important;
}
</style>
