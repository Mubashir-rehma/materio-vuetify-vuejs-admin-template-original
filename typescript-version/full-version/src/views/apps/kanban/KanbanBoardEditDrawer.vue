<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { VForm } from 'vuetify/components/VForm'
import type { EditKanbanItem } from '@db/apps/kanban/types'
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'
import avatar9 from '@images/avatars/avatar-9.png'

interface Emit {
  (e: 'update:isDrawerOpen', value: boolean): void
  (e: 'update:kanbanItem', value: EditKanbanItem): void
  (e: 'deleteKanbanItem', value: EditKanbanItem): void
}

const props = defineProps<{
  kanbanItem: EditKanbanItem
  isDrawerOpen: boolean
}>()

const emit = defineEmits<Emit>()

const handleDrawerModelValueUpdate = (val: boolean) => {
  emit('update:isDrawerOpen', val)
}

const currentTab = ref('edit')
const refEditTaskForm = ref<VForm>()
const labelOptions = ['UX', 'Image', 'Code Review', 'Dashboard', 'Bug']

const localKanbanItem = ref(JSON.parse(JSON.stringify(props.kanbanItem)))

// kanban item watcher
watch(() => props.kanbanItem, () => {
  localKanbanItem.value = JSON.parse(JSON.stringify(props.kanbanItem))
}, { deep: true })

const updateKanbanItem = () => {
  refEditTaskForm.value?.validate().then(valid => {
    if (valid.valid) {
      emit('update:kanbanItem', localKanbanItem.value)
      emit('update:isDrawerOpen', false)
    }
  })
}

// delete kanban item
const deleteKanbanItem = () => {
  emit('deleteKanbanItem', localKanbanItem.value)
  emit('update:isDrawerOpen', false)
}

// activity task data
const activityTask = [
  {
    name: 'Jordan Left the board',
    time: 'Today 11:00 AM',
    userProfile: avatar1,
  },
  {
    name: 'Dianna mentioned @bruce in a comment.',
    time: 'Today 10:20 AM',
    userProfile: avatar2,
  },
  {
    name: 'Martian added moved Charts & Maps task to the done board.',
    time: 'Today 11:00 AM',
    userProfile: avatar3,
  },
  {
    name: 'Barry Commented on App review task.',
    time: 'Today 8:32 AM',
    userProfile: avatar4,
  },
  {
    name: 'Bruce was assigned task of code review.',
    time: 'Today 8:30 PM',
    userProfile: avatar5,
  },
  {
    name: 'Clark assigned task UX Research to @martian',
    time: 'Today 8:00 AM',
    userProfile: avatar6,
  },
  {
    name: 'Ray Added moved Forms & Tables task from in progress to done.',
    time: 'Today 7:45 AM',
    userProfile: avatar7,
  },
  {
    name: 'Barry Complete all the tasks assigned to him.',
    time: 'Today 7:17 AM',
    userProfile: avatar8,
  },
  {
    name: 'Jordan added task to update new images.',
    time: 'Yesterday 3:00 PM',
    userProfile: avatar9,
  },
]
</script>

<template>
  <VNavigationDrawer
    location="end"
    :width="400"
    temporary
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Header -->
    <AppDrawerHeaderSection
      title="Edit Task"
      @cancel="$emit('update:isDrawerOpen', false)"
    />

    <PerfectScrollbar
      :options="{ wheelPropagation: false }"
      style="block-size: calc(100vh - 60px);"
    >
      <VCard
        flat
        height="100%"
      >
        <VCardText class="pt-2">
          <VTabs v-model="currentTab">
            <VTab value="edit">
              Edit
            </VTab>
            <VTab value="activity">
              Activity
            </VTab>
          </VTabs>
          <VDivider />

          <VWindow
            v-model="currentTab"
            class="pt-5"
          >
            <VWindowItem value="edit">
              <VForm
                ref="refEditTaskForm"
                @submit.prevent="updateKanbanItem"
              >
                <VRow>
                  <VCol cols="12">
                    <VTextField
                      v-model="localKanbanItem.item.title"
                      label="Title"
                      :rules="[requiredValidator]"
                    />
                  </VCol>
                  <VCol cols="12">
                    <AppDateTimePicker
                      v-model="localKanbanItem.item.dueDate"
                      label="Due date"
                    />
                  </VCol>

                  <VCol cols="12">
                    <VSelect
                      v-model="localKanbanItem.item.labels"
                      :items="labelOptions"
                      label="Label"
                      multiple
                      eager
                    >
                      <template #chip="{ item }">
                        <VChip>
                          {{ item.raw }}
                        </VChip>
                      </template>
                    </VSelect>
                  </VCol>

                  <VCol cols="12">
                    <p class="mb-1">
                      Assigned
                    </p>

                    <div class="d-flex align-center flex-wrap gap-1">
                      <VAvatar
                        v-for="avatar in localKanbanItem.item.members"
                        :key="avatar"
                        size="26"
                        :image="avatar"
                      />
                      <VAvatar
                        size="26"
                        variant="tonal"
                      >
                        <VIcon
                          class="text-medium-emphasis"
                          size="20"
                          icon="mdi-plus"
                        />
                      </VAvatar>
                    </div>
                  </VCol>

                  <VCol cols="12">
                    <VFileInput label="Choose file" />
                  </VCol>

                  <VCol cols="12">
                    <VTextarea
                      label="Comment"
                      placeholder="Write a comment..."
                      rows="5"
                      textarea
                    />
                  </VCol>

                  <VCol cols="12">
                    <VBtn
                      type="submit"
                      class="me-3"
                    >
                      Update
                    </VBtn>
                    <VBtn
                      color="error"
                      variant="tonal"
                      @click="deleteKanbanItem"
                    >
                      Delete
                    </VBtn>
                  </VCol>
                </VRow>
              </VForm>
            </VWindowItem>

            <VWindowItem value="activity">
              <VList lines="two">
                <VListItem
                  v-for="activity in activityTask"
                  :key="activity.name"
                  :title="activity.name"
                  :subtitle="activity.time"
                  :prepend-avatar="activity.userProfile"
                  class="px-0"
                />
              </VList>
            </VWindowItem>
          </VWindow>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
