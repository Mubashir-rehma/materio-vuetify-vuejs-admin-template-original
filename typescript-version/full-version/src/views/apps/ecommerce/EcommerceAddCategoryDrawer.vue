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
      title="Add Category"
      @cancel="$emit('update:isDrawerOpen', false)"
    />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <VForm @submit.prevent="">
            <VRow>
              <VCol cols="12">
                <VTextField
                  label="Title"
                  placeholder="Enter Category Title"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  label="Slug"
                  placeholder="Enter Slug"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  type="file"
                  label="Attachment"
                />
              </VCol>

              <VCol cols="12">
                <VSelect
                  label="Parent Category"
                  placeholder="Select Parent Category"
                  :items="['HouseHold', 'Management', 'Electronics', 'Office', 'Accessories']"
                />
              </VCol>

              <VCol cols="12">
                <VTextarea placeholder="Write A comment" />
              </VCol>

              <VCol cols="12">
                <VSelect
                  placeholder="Select Category Status"
                  label="Parent Status"
                  :items="['Published', 'Inactive', 'Scheduled']"
                />
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
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
