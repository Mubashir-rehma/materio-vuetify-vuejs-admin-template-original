<script setup lang="ts">
import { useDropZone } from '@vueuse/core'

const { open, onChange } = useFileDialog({ accept: 'image/*' })

const filesData = ref<File[]>([])

function onDrop(DroppedFiles: File[] | null) {
  DroppedFiles?.forEach(file => {
    if (file.type.slice(0, 6) !== 'image/') {
      // eslint-disable-next-line no-alert
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
</script>

<template>
  <!--
    <div
    ref="dropZoneRef"
    class="drop-zone"
    >
    Drop files here
    </div>

    <div>
    <div
    v-for="file in fileData"
    :key="file.name"
    >
    {{ file.name }}
    </div>
    </div>

    <VBtn
    type="button"
    @click="() => open()"
    >
    Choose file
    </VBtn>
  -->

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
</template>

<style scoped>
.drop-zone {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f0f0f0;
  block-size: 100%;
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  inline-size: 100%;
  transition: all 0.3s ease;
}
</style>
