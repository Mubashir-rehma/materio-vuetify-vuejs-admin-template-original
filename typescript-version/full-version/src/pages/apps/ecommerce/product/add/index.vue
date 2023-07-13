<script setup lang="ts">
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import { useDropZone } from '@vueuse/core'

const editor = useEditor({
  content: `
    <p>
      This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
    </p>
    <p>
      The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
    </p>
  `,
  extensions: [
    StarterKit,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Placeholder.configure({
      placeholder: 'Write something here...',
    }),
    Highlight,
    Underline,
  ],
})

const { open, onChange } = useFileDialog({ accept: 'image/*' })

const filesData = ref<File[]>([])

function onDrop(DroppedFiles: File[] | null) {
  DroppedFiles?.forEach(file => {
    if (file.type.slice(0, 6) !== 'image/') {
      alert('Only image files are allowed')

      return
    }

    filesData.value.push(file)
  },
  )
}

onChange(selectedFiles => {
  if (!selectedFiles)
    return

  for (const file of selectedFiles)
    filesData.value.push(file)
})

const dropZoneRef = ref<HTMLElement>()

useDropZone(dropZoneRef, onDrop)

const activeTab = ref('Restock')

const shippingList = [
  { desc: 'You\'ll be responsible for product delivery.Any damage or delay during shipping may cost you a Damage fee', title: 'Fulfilled by Seller', value: 'Fulfilled by Seller' },
  { desc: 'Your product, Our responsibility.For a measly fee, we will handle the delivery process for you.', title: 'Fulfilled by Company name', value: 'Fulfilled by Company name' },
]

const moreList = [
  { title: 'Edit Product', value: 'Edit Product' },
]

const inventoryTabsData = [
  { icon: 'mdi-plus', title: 'Restock', value: 'Restock' },
  { icon: 'mdi-airplane', title: 'Shipping', value: 'Shipping' },
  { icon: 'mdi-map-marker-outline', title: 'Global Delivery', value: 'Global Delivery' },
  { icon: 'mdi-attachment', title: 'Attributes', value: 'Attributes' },
  { icon: 'mdi-lock-open-outline', title: 'Advanced', value: 'Advanced' },
]
</script>

<template>
  <div>
    <div class="d-flex flex-wrap justify-center justify-md-space-between gap-4 mb-6">
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
        <!-- 👉 Product Information -->
        <VCard class="mb-6">
          <VCardItem title="Product Information">
            <template #append>
              <MoreBtn
                :menu-list="moreList"
                item-props
              />
            </template>
          </VCardItem>

          <VCardText>
            <VRow>
              <VCol cols="12">
                <VTextField
                  label="Name"
                  placeholder="iPhone 14"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  label="SKU"
                  placeholder="FXSK123U"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  label="Barcode"
                  placeholder="0123-4567"
                />
              </VCol>
              <VCol>
                <div class="border rounded pa-2">
                  <div
                    v-if="editor"
                    class="d-flex gap-x-4 pa-2"
                  >
                    <VBtn
                      :class="{ 'is-active': editor.isActive('bold') }"
                      icon="mdi-format-bold"
                      class="rounded"
                      density="comfortable"
                      variant="outlined"
                      color="default"
                      @click="editor.chain().focus().toggleBold().run()"
                    />
                    <VBtn
                      :class="{ 'is-active': editor.isActive('bold') }"
                      icon="mdi-format-underline"
                      class="rounded"
                      density="comfortable"
                      variant="outlined"
                      color="default"
                      @click="editor.commands.toggleUnderline()"
                    />
                    <VBtn
                      icon="mdi-format-italic"
                      class="rounded"
                      density="comfortable"
                      variant="outlined"
                      color="default"
                      :class="{ 'is-active': editor.isActive('italic') }"
                      @click="editor.chain().focus().toggleItalic().run()"
                    />
                    <VBtn
                      icon="mdi-format-strikethrough"
                      class="rounded"
                      density="comfortable"
                      variant="outlined"
                      color="default"
                      :class="{ 'is-active': editor.isActive('strike') }"
                      @click="editor.chain().focus().toggleStrike().run()"
                    />
                    <VBtn
                      icon="mdi-format-align-left"
                      class="rounded"
                      density="comfortable"
                      variant="outlined"
                      color="default"
                      :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
                      @click="editor.chain().focus().setTextAlign('left').run()"
                    />
                    <VBtn
                      icon="mdi-format-align-center"
                      class="rounded"
                      density="comfortable"
                      variant="outlined"
                      color="default"
                      :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
                      @click="editor.chain().focus().setTextAlign('center').run()"
                    />
                    <VBtn
                      icon="mdi-format-align-left"
                      class="rounded"
                      density="comfortable"
                      variant="outlined"
                      color="default"
                      :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
                      @click="editor.chain().focus().setTextAlign('right').run()"
                    />
                    <VBtn
                      icon="mdi-format-align-justify"
                      class="rounded"
                      density="comfortable"
                      variant="outlined"
                      color="default"
                      :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
                      @click="editor.chain().focus().setTextAlign('justify').run()"
                    />
                  </div>
                  <VDivider />
                  <EditorContent
                    :editor="editor"
                    class="text-high-emphasis"
                  />
                </div>
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
                <div
                  ref="dropZoneRef"
                  class="cursor-pointer"
                  @click="() => open()"
                >
                  <div
                    v-if="filesData.length === 0"
                    class="d-flex flex-column justify-center align-center gap-y-3 pa-5 border-dashed drop-zone"
                  >
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

                    <VBtn variant="outlined">
                      Browse Images
                    </VBtn>
                  </div>

                  <div
                    v-else
                    class="d-flex justify-center align-center gap-3 pa-5 border-dashed drop-zone flex-wrap"
                  >
                    <VRow>
                      <template
                        v-for="(file, index) in filesData"
                        :key="index"
                      >
                        <VCol
                          cols="12"
                          md="3"
                          @click.stop
                        >
                          <VCard
                            max-width="200px"
                            :ripple="false"
                          >
                            <VCardText class="d-flex flex-column align-center">
                              <VImg
                                :src="useObjectUrl(file).value"
                                width="50px"
                                height="50px"
                              />
                              <div class="mt-2">
                                <div class="text-truncate">
                                  {{ file.name }}
                                </div>

                                <div>
                                  {{ file.size / 1000 }} KB
                                </div>
                              </div>
                            </VCardText>
                            <VCardActions>
                              <VBtn
                                variant="text"
                                block
                                @click.stop="filesData.splice(index, 1)"
                              >
                                Remove File
                              </VBtn>
                            </VCardActions>
                          </VCard>
                        </VCol>
                      </template>
                    </VRow>
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
                  placeholder="38"
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
                  <VTab
                    v-for="(tab, index) in inventoryTabsData"
                    :key="index"
                    :value="tab.value"
                  >
                    <VIcon
                      :icon="tab.icon"
                      class="me-2"
                    />
                    <span>{{ tab.title }}</span>
                  </VTab>
                </VTabs>
              </VCol>

              <VDivider :vertical="$vuetify.display.mdAndUp ? true : false" />

              <VCol
                cols="12"
                md="8"
              >
                <VWindow
                  v-model="activeTab"
                  class="w-100"
                  :touch="false"
                >
                  <VWindowItem value="Restock">
                    <div class="d-flex flex-column gap-y-4">
                      <div class="text-body-1 font-weight-medium">
                        Options
                      </div>
                      <div class="d-flex gap-x-4 align-center">
                        <VTextField
                          label="Add to stock"
                          placeholder="100"
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
                    <VRadioGroup
                      label="Shipping Type"
                      class="ms-3"
                    >
                      <VRadio
                        v-for="item in shippingList"
                        :key="item.value"
                        :value="item.value"
                        class="mb-4"
                      >
                        <template #label>
                          <div>
                            <div class="text-high-emphasis font-weight-medium mb-1">
                              {{ item.title }}
                            </div>
                            <div class="text-sm">
                              {{ item.desc }}
                            </div>
                          </div>
                        </template>
                      </VRadio>
                    </VRadioGroup>
                  </VWindowItem>

                  <VWindowItem value="Global Delivery">
                    <div>
                      <VRadioGroup
                        label="Global Delivery"
                        class="ms-3"
                      >
                        <VRadio
                          value="Worldwide delivery"
                          class="mb-4"
                        >
                          <template #label>
                            <div>
                              <div class="text-high-emphasis font-weight-medium mb-1">
                                Worldwide delivery
                              </div>
                              <div class="text-sm">
                                Only available with Shipping method:
                                <span class="text-primary">
                                  Fulfilled by Company name
                                </span>
                              </div>
                            </div>
                          </template>
                        </VRadio>

                        <VRadio
                          value="Selected Countries"
                          class="mb-4"
                        >
                          <template #label>
                            <div>
                              <div class="text-high-emphasis font-weight-medium mb-1">
                                Selected Countries
                              </div>
                              <VTextField
                                placeholder="USA"
                                density="compact"
                                style="min-width: 200px;"
                              />
                            </div>
                          </template>
                        </VRadio>

                        <VRadio>
                          <template #label>
                            <div>
                              <div class="text-high-emphasis font-weight-medium mb-1">
                                Local delivery
                              </div>
                              <div class="text-sm">
                                Deliver to your country of residence
                                <span class="text-primary">
                                  Change profile address
                                </span>
                              </div>
                            </div>
                          </template>
                        </VRadio>
                      </VRadioGroup>
                    </div>
                  </VWindowItem>

                  <VWindowItem value="Attributes">
                    <div class="mb-6 text-h6">
                      Attributes
                    </div>
                    <div>
                      <VCheckbox label="Fragile Product" />
                      <VCheckbox label="Biodegradable" />
                      <VCheckbox>
                        <template #label>
                          <div class="d-flex flex-column mb-1">
                            <div>Frozen Product</div>
                            <VTextField
                              placeholder="40 C"
                              type="number"
                              style="min-width: 250px;"
                            />
                          </div>
                        </template>
                      </VCheckbox>

                      <VCheckbox>
                        <template #label>
                          <div class="d-flex flex-column mb-1">
                            <div>Expiry Date of Product</div>
                            <AppDateTimePicker
                              model-value="2025-06-14"
                              placeholder="Select a Date"
                              density="compact"
                            />
                          </div>
                        </template>
                      </VCheckbox>
                    </div>
                  </VWindowItem>

                  <VWindowItem value="Advanced">
                    <div class="mb-6 text-h6">
                      Advanced
                    </div>
                    <VRow>
                      <VCol>
                        <VSelect
                          label="Product ID Type"
                          placeholder="Select Product Type"
                          :items="['ISBN', 'UPC', 'EAN', 'JAN']"
                        />
                      </VCol>

                      <VCol>
                        <VTextField
                          label="Product Id"
                          placeholder="100023"
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
        <!-- 👉 Pricing -->
        <VCard
          title="Pricing"
          class="mb-6"
        >
          <VCardText>
            <VTextField
              label="Name"
              placeholder="iPhone 14"
              class="mb-6"
            />
            <VTextField
              label="Discounted Price"
              placeholder="$499"
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
                placeholder="Select Collection"
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
                placeholder="Fashion, Trending, Summer"
              />
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
  .drop-zone {
    border: 1px dashed rgba(var(--v-theme-on-surface), 0.12);
    border-radius: 6px;
  }
</style>

<style lang="scss">
.v-radio-group,
.v-checkbox {
  .v-selection-control {
    align-items: start !important;
  }

  .v-label.custom-input {
    border: none !important;
  }
}

.ProseMirror{
  p{
    margin-bottom: 0;
  }
  padding: 0.5rem;

  p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
  }
}

.ProseMirror-focused{
  border: none;
}
</style>
