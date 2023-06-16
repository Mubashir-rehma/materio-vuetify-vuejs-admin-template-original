<script setup lang="ts">
import { useDropZone, useFileDialog } from '@vueuse/core'

const { files, open } = useFileDialog()

const filesData = ref<{ name: string; size: number; type: string; lastModified: number }[]>([])
function onDrop(DroppedFiles: File[] | null) {
  filesData.value = []
  if (files) {
    filesData.value = DroppedFiles.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }))
  }
}

const dropZoneRef = ref<HTMLElement>()

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)

const activeTab = ref('Restock')
</script>

<template>
  <div class="d-flex flex-wrap justify-center justify-md-space-between gap-y-4 mb-6">
    <div class="d-flex flex-column justify-center">
      <h5 class="text-h5 font-weight-medium">
        Add a new product
      </h5>
      <span>Orders placed across your store</span>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap">
      <VBtn
        variant="outlined"
        color="secondary"
      >
        Discard
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
      >
        Save Draft
      </VBtn>
      <VBtn>Publish Product</VBtn>
    </div>
  </div>

  <VRow>
    <VCol md="8">
      <!-- 👉 Change Password -->
      <VCard class="mb-6">
        <VCardItem
          title="Change Password"
          append-icon="mdi-dots-vertical"
        />
        <VCardText>
          <VRow>
            <VCol cols="12">
              <VTextField
                label="Name"
                placeholder="Product Title"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="SKU"
                placeholder="Product SKU"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="Barcode"
                placeholder="Product BarCode"
              />
            </VCol>
            <VCol>
              <VTextarea
                label="Description(Optional)"
                placeholder="Keep your account secure with authentication step."
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>

      <!-- 👉 Media -->
      <VCard class="mb-6">
        <VCardItem>
          <template #title>
            Media
          </template>
          <template #append>
            <span class="text-primary font-weight-medium text-sm cursor-pointer">Add Media from URL</span>
          </template>
        </VCardItem>

        <VCardText>
          <div class="flex">
            <div class="w-full h-auto relative">
              <div ref="dropZoneRef">
                <div :value="isOverDropZone">
                  <div class="d-flex flex-column justify-center align-center gap-y-3 pa-5 border-dashed drop-zone">
                    <VAvatar
                      variant="tonal"
                      rounded
                      size="44"
                    >
                      <VIcon
                        icon="mdi-upload"
                        size="24"
                      />
                    </VAvatar>
                    <div class="text-base text-high-emphasis font-weight-medium">
                      Drag and Drop Your Image Here.
                    </div>
                    <span class="text-disabled">or</span>

                    <VBtn
                      variant="outlined"
                      @click="open"
                    >
                      Browse Images
                    </VBtn>
                  </div>
                </div>

                <!-- Selected File Details -->
                <div class="flex flex-wrap justify-center items-center">
                  <span v-if="filesData.length > 0">
                    You have dropped {{ filesData.length }} files
                  </span>
                  <div
                    v-for="(file, index) in filesData"
                    :key="index"
                  >
                    <p>Name: {{ file.name }}</p>
                    <p>Size: {{ file.size }} Bytes</p>
                    <p>Type: {{ file.type }}</p>
                    <p>Last modified: {{ file.lastModified }}</p>
                  </div>
                  <template v-if="files">
                    <p>You have selected: <b>{{ files.length }} files</b></p>
                    <div
                      v-for="file of files"
                      :key="file.name"
                    >
                      <p>Name: {{ file.name }}</p>
                      <p>Size: {{ file.size }} Bytes</p>
                      <p>Type: {{ file.type }}</p>
                      <p>Last modified: {{ file.lastModified }}</p>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>

      <!-- 👉 Variants -->
      <VCard
        title="Variants"
        class="mb-6"
      >
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="4"
            >
              <VSelect
                label="Size"
                :items="['Size', 'Color', 'Weight', 'Smell']"
                placeholder="Select Variant"
              />
            </VCol>
            <VCol
              cols="12"
              md="8"
            >
              <VTextField
                placeholder="Enter Size"
                label="Size"
              />
            </VCol>
          </VRow>

          <VBtn class="mt-6">
            Add another option
          </VBtn>
        </VCardText>
      </VCard>

      <!-- 👉 Inventory -->
      <VCard title="Inventory">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="4"
            >
              <VTabs
                v-model="activeTab"
                direction="vertical"
                color="primary"
                class="v-tabs-pill"
              >
                <VTab value="Restock">
                  <VIcon
                    icon="mdi-plus"
                    class="me-2"
                  />
                  <span>Restock</span>
                </VTab>
                <VTab value="Shipping">
                  <VIcon
                    icon="mdi-airplane"
                    class="me-2"
                  />
                  <span>Shipping</span>
                </VTab>
                <VTab value="Global Delivery">
                  <VIcon
                    icon="mdi-map-marker-outline"
                    class="me-2"
                  />
                  <span>Global Delivery</span>
                </VTab>
                <VTab value="Attributes">
                  <VIcon
                    icon="mdi-attachment"
                    class="me-2"
                  />
                  <span>Attributes</span>
                </VTab>
                <VTab value="Advanced">
                  <VIcon
                    icon="mdi-lock-open-outline"
                    class="me-2"
                  />
                  <span>Advanced</span>
                </VTab>
              </VTabs>
            </VCol>
            <VDivider vertical />
            <VCol
              cols="12"
              md="8"
            >
              <VWindow
                v-model="activeTab"
                class="w-100"
              >
                <VWindowItem value="Restock">
                  <div class="d-flex flex-column gap-y-4">
                    <div class="text-body-1 font-weight-medium">
                      Options
                    </div>
                    <div class="d-flex gap-x-4 align-center">
                      <VTextField
                        label="Add to stock"
                        placeholder="Quantity"
                        density="compact"
                      />
                      <VBtn prepend-icon="mdi-check">
                        Confirm
                      </VBtn>
                    </div>
                    <div>
                      <div class="text-sm text-high-emphasis mb-2">
                        Product in stock now: 54
                      </div>
                      <div class="text-sm text-high-emphasis mb-2">
                        Product in transit: 390
                      </div>
                      <div class="text-sm text-high-emphasis mb-2">
                        Last time restocked: 24th June, 2022
                      </div>
                      <div class="text-sm text-high-emphasis mb-2">
                        Total stock over lifetime: 2,430
                      </div>
                    </div>
                  </div>
                </VWindowItem>

                <VWindowItem value="Shipping">
                  <VRadioGroup>
                    <VRadio value="seller">
                      <template #label>
                        <div>
                          <div class="text-body-1 font-weight-medium text-high-emphasis mb-1">
                            Fulfilled by Seller
                          </div>
                          <small class="text-sm text-high-emphasis">
                            You'll be responsible for product delivery. <br>
                            Any damage or delay during shipping may cost you a Damage fee.
                          </small>
                        </div>
                      </template>
                    </VRadio>
                    <VRadio value="company">
                      <template #label>
                        <div>
                          <div class="text-body-1 font-weight-medium text-high-emphasis mb-1">
                            Fulfilled by Company name
                            <VChip
                              color="warning"
                              density="compact"
                              label
                            >
                              Recommended
                            </VChip>
                          </div>
                          <small class="text-sm text-high-emphasis">
                            You'll be responsible for product delivery. <br>
                            Any damage or delay during shipping may cost you a Damage fee.
                          </small>
                        </div>
                      </template>
                    </VRadio>
                  </VRadioGroup>
                </VWindowItem>

                <VWindowItem value="Global Delivery" />

                <VWindowItem value="Attributes" />

                <VWindowItem value="Advanced">
                  <div class="mb-6 text-h6">
                    Advanced
                  </div>
                  <VRow>
                    <VCol>
                      <VSelect
                        label="Product ID Type"
                        placeholder="Select Type"
                        :items="['ISBN', 'UPC', 'EAN', 'JAN']"
                      />
                    </VCol>

                    <VCol>
                      <VTextField
                        label="Product Id"
                        placeholder="Product ID"
                        type="number"
                      />
                    </VCol>
                  </VRow>
                </VWindowItem>
              </VWindow>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      md="4"
      cols="12"
    >
      <!-- 👉 Change Password -->
      <VCard
        title="Change Password"
        class="mb-6"
      >
        <VCardText>
          <VTextField
            label="Name"
            placeholder="Product Title"
            class="mb-6"
          />
          <VTextField
            label="Discounted Price"
            placeholder="Discounted Price"
            class="mb-4"
          />
          <VCheckbox label="Charge Tax on this product" />

          <VDivider class="my-2" />

          <div class="d-flex flex-raw align-center justify-space-between ">
            <span>In stock</span>
            <VSwitch density="compact" />
          </div>
        </VCardText>
      </VCard>

      <!-- 👉 Organize -->
      <VCard title="Organize">
        <VCardText>
          <div class="d-flex flex-column gap-y-4">
            <VSelect
              placeholder="Select Vendor"
              label="Vendor"
              :items="['Men\'s Clothing', 'Women\'s Clothing', 'Kid\'s Clothing']"
            />
            <VSelect
              placeholder="Select Category"
              label="Category"
              :items="['Household', 'Office', 'Electronics', 'Management', 'Automotive']"
            />
            <VSelect
              placeholder="Collection"
              label="Collection"
              :items="['Men\'s Clothing', 'Women\'s Clothing', 'Kid\'s Clothing']"
            />
            <VSelect
              placeholder="Select Status"
              label="Status"
              :items="['Published', 'Inactive', 'Scheduled']"
            />
            <VTextField
              label="Tags"
              placeholder="Enter Tags"
            />
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
  .drop-zone {
    border: 1px dashed rgba(var(--v-theme-on-surface), 0.12);
    border-radius: 6px;
  }
</style>
