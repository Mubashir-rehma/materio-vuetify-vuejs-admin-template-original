<script lang="ts" setup>
import UserInvoiceTable from './UserInvoiceTable.vue'

const projects = [
  {
    logo: dynamicImgImport('@/assets/images/icons/project-icons/react.png'),
    name: 'BGC eCommerce App',
    project: 'React Project',
    totalTask: '122/240',
    progress: 78,
    hours: '18:42',
  },
  {
    logo: dynamicImgImport('@/assets/images/icons/project-icons/figma.png'),
    name: 'Falcon Logo Design',
    project: 'Figma Project',
    totalTask: '09/56',
    progress: 18,
    hours: '20:42',
  },
  {
    logo: dynamicImgImport('@/assets/images/icons/project-icons/vue.png'),
    name: 'Dashboard Design',
    project: 'Vuejs Project',
    totalTask: '290/320',
    progress: 62,
    hours: '120:87',
  },
  {
    logo: dynamicImgImport('@/assets/images/icons/project-icons/xamarin.png'),
    name: 'Foodista mobile app',
    project: 'Xamarin Project',
    totalTask: '290/320',
    progress: 8,
    hours: '120:87',
  },
  {
    logo: dynamicImgImport('@/assets/images/icons/project-icons/python.png'),
    name: 'Dojo Email App',
    project: 'Python Project',
    totalTask: '120/186',
    progress: 49,
    hours: '230:10',
  },
  {
    logo: dynamicImgImport('@/assets/images/icons/project-icons/sketch.png'),
    name: 'Blockchain Website',
    project: 'Sketch Project',
    totalTask: '99/109',
    progress: 92,
    hours: '342:41',
  },
  {
    logo: dynamicImgImport('@/assets/images/icons/project-icons/html5.png'),
    name: 'Hoffman Website',
    project: 'HTML Project',
    totalTask: '98/110',
    progress: 88,
    hours: '12:45',
  },
]

const resolveUserProgressVariant = (progress: number) => {
  if (progress <= 25)
    return 'error'
  if (progress > 25 && progress <= 50)
    return 'warning'
  if (progress > 50 && progress <= 75)
    return 'primary'
  if (progress > 75 && progress <= 100)
    return 'success'

  return 'secondary'
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Project List">
        <VDivider />
        <VTable class="text-no-wrap">
          <thead>
            <tr>
              <th>PROJECT</th>
              <th>TOTAL TASK</th>
              <th>PROGRESS</th>
              <th>HOURS</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="project in projects"
              :key="project.name"
            >
              <td class="d-flex align-center">
                <VAvatar
                  :size="32"
                  class="me-3"
                  :image="project.logo"
                />
                <div>
                  <p class="font-weight-medium mb-0">
                    {{ project.name }}
                  </p>
                  <p class="text-caption text-disabled mb-0">
                    {{ project.project }}
                  </p>
                </div>
              </td>
              <td>
                {{ project.totalTask }}
              </td>
              <td>
                <span>{{ project.progress }}%</span>
                <VProgressLinear
                  :height="6"
                  :model-value="project.progress"
                  rounded
                  :color="resolveUserProgressVariant(project.progress)"
                />
              </td>
              <td>{{ project.hours }}</td>
            </tr>
          </tbody>
        </VTable>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Activity timeline -->
      <VCard title="User Activity Timeline">
        <VCardText>
          <VTimeline
            density="compact"
            align="start"
            truncate-line="start"
            class="v-timeline-density-compact"
          >
            <VTimelineItem
              dot-color="error"
              size="x-small"
            >
              <div class="d-flex justify-space-between align-center flex-wrap">
                <h4 class="font-weight-medium me-1">
                  User login
                </h4>
                <small class="text-xs text-no-wrap">12 min ago</small>
              </div>
              <p class="mb-0">
                User login at 2:12pm
              </p>
            </VTimelineItem>

            <VTimelineItem
              dot-color="primary"
              size="x-small"
            >
              <div class="d-flex justify-space-between align-center flex-wrap">
                <h4 class="font-weight-medium me-1">
                  Meeting with john
                </h4>
                <small class="text-xs text-no-wrap">45 min ago</small>
              </div>

              <p class="mb-1">
                React Project meeting with john @10:15am
              </p>

              <div class="d-flex align-center mt-3">
                <VAvatar
                  size="40"
                  class="me-2"
                  :image="dynamicImgImport('@/assets/images/avatars/avatar-2.png')"
                />
                <div>
                  <p class="text--primary font-weight-medium mb-0">
                    Leona Watkins (Client)
                  </p>
                  <span>CEO of Kelly Group</span>
                </div>
              </div>
            </VTimelineItem>

            <VTimelineItem
              dot-color="info"
              size="x-small"
            >
              <div class="d-flex justify-space-between align-center flex-wrap">
                <h4 class="font-weight-medium me-1">
                  Create a new react project for client
                </h4>
                <small class="text-xs text-no-wrap">2 day ago</small>
              </div>
              <p class="mb-0">
                Add files to new design folder
              </p>
            </VTimelineItem>

            <VTimelineItem
              dot-color="success"
              size="x-small"
            >
              <div class="d-flex justify-space-between align-center flex-wrap">
                <h4 class="font-weight-semibold me-1">
                  Create invoices for client
                </h4>
                <small class="text-xs text-no-wrap">12 min ago</small>
              </div>
              <p class="mb-0">
                Create new invoices and send to Leona Watkins
              </p>
              <span class="d-flex align-center mt-2">
                <VIcon
                  color="error"
                  icon="mdi-file-pdf-box"
                  class="me-1"
                />
                <span class="text--primary font-weight-semibold text-sm">invoice.pdf</span>
              </span>
            </VTimelineItem>
          </VTimeline>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <UserInvoiceTable />
    </VCol>
  </VRow>
</template>
