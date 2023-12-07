<script setup lang="ts">
import AddNewUserDrawer from '@/views/apps/user/list/AddNewUserDrawer.vue'
import type { UserProperties } from '@db/apps/users/types'

// 👉 Store
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// Headers
const headers = [
  { title: 'User', key: 'user' },
  { title: 'Email', key: 'email' },
  { title: 'Role', key: 'role' },
  { title: 'Plan', key: 'plan' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

// 👉 Fetching users
const { data: usersData, execute: fetchUsers } = await useApi<any>(createUrl('/apps/users', {
  query: {
    q: searchQuery,
    status: selectedStatus,
    plan: selectedPlan,
    role: selectedRole,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const users = computed((): UserProperties[] => usersData.value.users)
const totalUsers = computed(() => usersData.value.totalUsers)

// 👉 search filters
const roles = [
  { title: 'Admin', value: 'admin' },
  { title: 'Author', value: 'author' },
  { title: 'Editor', value: 'editor' },
  { title: 'Maintainer', value: 'maintainer' },
  { title: 'Subscriber', value: 'subscriber' },
]

const resolveUserRoleVariant = (role: string) => {
  const roleLowerCase = role.toLowerCase()

  if (roleLowerCase === 'subscriber')
    return { color: 'primary', icon: 'ri-user-line' }
  if (roleLowerCase === 'author')
    return { color: 'warning', icon: 'ri-settings-2-line' }
  if (roleLowerCase === 'maintainer')
    return { color: 'success', icon: 'ri-donut-chart-line' }
  if (roleLowerCase === 'editor')
    return { color: 'info', icon: 'ri-pencil-line' }
  if (roleLowerCase === 'admin')
    return { color: 'error', icon: 'ri-macbook-line' }

  return { color: 'primary', icon: 'ri-user-line' }
}

const resolveUserStatusVariant = (stat: string) => {
  const statLowerCase = stat.toLowerCase()
  if (statLowerCase === 'pending')
    return 'warning'
  if (statLowerCase === 'active')
    return 'success'
  if (statLowerCase === 'inactive')
    return 'secondary'

  return 'primary'
}

const isAddNewUserDrawerVisible = ref(false)

// 👉 Add new user
const addNewUser = async (userData: UserProperties) => {
  await $api('/apps/users', {
    method: 'POST',
    body: userData,
  })

  // refetch User
  fetchUsers()
}

// 👉 Delete user
const deleteUser = async (id: number) => {
  await $api(`/apps/users/${id}`, {
    method: 'DELETE',
  })

  // refetch User
  // TODO: Make this async
  fetchUsers()
}
</script>

<template>
  <section>
    <VCard>
      <VCardText class="d-flex flex-wrap gap-4">
        <!-- 👉 Export button -->
        <VBtn
          variant="tonal"
          color="secondary"
          prepend-icon="ri-upload-2-line"
        >
          Export
        </VBtn>

        <VSpacer />

        <div class="app-user-search-filter d-flex align-center">
          <!-- 👉 Search  -->
          <VTextField
            v-model="searchQuery"
            placeholder="Search User"
            density="compact"
            class="me-3"
          />

          <!-- 👉 Add user button -->
          <VSelect
            v-model="selectedRole"
            label="Select Role"
            placeholder="Select Role"
            :items="roles"
            density="compact"
            clearable
            clear-icon="ri-close-line"
            style="inline-size: 5rem;"
          />
        </div>
      </VCardText>

      <VDivider />

      <!-- SECTION datatable -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        :items-per-page-options="[
          { value: 10, title: '10' },
          { value: 20, title: '20' },
          { value: 50, title: '50' },
          { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' },
        ]"
        :items="users"
        item-value="user"
        :items-length="totalUsers"
        :headers="headers"
        show-select
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- User -->
        <template #item.user="{ item }">
          <div class="d-flex">
            <VAvatar
              size="34"
              :variant="!item.avatar ? 'tonal' : undefined"
              :color="!item.avatar ? resolveUserRoleVariant(item.role).color : undefined"
              class="me-3"
            >
              <VImg
                v-if="item.avatar"
                :src="item.avatar"
              />
              <span v-else>{{ avatarText(item.fullName) }}</span>
            </VAvatar>
            <div class="d-flex flex-column">
              <h6 class="text-sm">
                <RouterLink
                  :to="{ name: 'apps-user-view-id', params: { id: item.id } }"
                  class="font-weight-medium user-list-name"
                >
                  {{ item.fullName }}
                </RouterLink>
              </h6>
              <span class="text-xs text-medium-emphasis">@{{ item.username }}</span>
            </div>
          </div>
        </template>

        <!-- Role -->
        <template #item.role="{ item }">
          <div class="d-flex gap-4">
            <VIcon
              :icon="resolveUserRoleVariant(item.role).icon"
              :color="resolveUserRoleVariant(item.role).color"
            />
            <span class="text-capitalize">{{ item.role }}</span>
          </div>
        </template>

        <!-- Plan -->
        <template #item.plan="{ item }">
          <span class="text-capitalize">{{ item.currentPlan }}</span>
        </template>

        <!-- Status -->
        <template #item.status="{ item }">
          <VChip
            :color="resolveUserStatusVariant(item.status)"
            size="small"
            class="text-capitalize"
          >
            {{ item.status }}
          </VChip>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <VBtn
            icon
            variant="text"
            size="small"
            color="medium-emphasis"
          >
            <VIcon
              size="24"
              icon="ri-more-2-line"
            />

            <VMenu activator="parent">
              <VList>
                <VListItem :to="{ name: 'apps-user-view-id', params: { id: item.id } }">
                  <template #prepend>
                    <VIcon icon="ri-eye-line" />
                  </template>
                  <VListItemTitle>View</VListItemTitle>
                </VListItem>
                <VListItem link>
                  <template #prepend>
                    <VIcon icon="ri-pencil-line" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>
                <VListItem @click="deleteUser(item.id)">
                  <template #prepend>
                    <VIcon icon="ri-delete-bin-line" />
                  </template>
                  <VListItemTitle>Delete</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </VBtn>
        </template>
      </VDataTableServer>
      <!-- SECTION -->
    </VCard>

    <!-- 👉 Add New User -->
    <AddNewUserDrawer
      v-model:isDrawerOpen="isAddNewUserDrawerVisible"
      @user-data="addNewUser"
    />
  </section>
</template>

<style lang="scss">
.app-user-search-filter {
  inline-size: 24.0625rem;
}

.text-capitalize {
  text-transform: capitalize;
}

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}
</style>
