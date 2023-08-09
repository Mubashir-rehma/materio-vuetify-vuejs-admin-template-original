<script setup lang="ts">
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import type { UserProperties } from '@/@fake-db/types'
import AddNewUserDrawer from '@/views/apps/user/list/AddNewUserDrawer.vue'
import type { Options } from '@core/types'

// 👉 Store
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const totalPage = ref(1)
const totalUsers = ref(0)
const users = ref<UserProperties[]>([])

const options = ref<Options>({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

const headers = [
  { title: 'User', key: 'user' },
  { title: 'Email', key: 'email' },
  { title: 'Role', key: 'role' },
  { title: 'Plan', key: 'plan' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

// 👉 Fetching users

const fetchUsers = async () => {
  const { data, error } = await useApi<any>(createUrl('/apps/users', {
    q: searchQuery.value,
    status: selectedStatus.value,
    plan: selectedPlan.value,
    role: selectedRole.value,
    ...options.value,
    ...(options.value.sortBy
     && {
       sortBy: (options.value.sortBy)[0]?.key,
       orderBy: (options.value.sortBy)[0]?.order,
     }
    ),
  }))

  if (error.value) {
    console.log(error.value)
  }
  else {
    users.value = data.value.users
    totalPage.value = data.value.totalPage
    totalUsers.value = data.value.totalUsers
  }
}

watchEffect(fetchUsers)

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
    return { color: 'primary', icon: 'mdi-account-outline' }
  if (roleLowerCase === 'author')
    return { color: 'warning', icon: 'mdi-cog-outline' }
  if (roleLowerCase === 'maintainer')
    return { color: 'success', icon: 'mdi-chart-donut' }
  if (roleLowerCase === 'editor')
    return { color: 'info', icon: 'mdi-pencil-outline' }
  if (roleLowerCase === 'admin')
    return { color: 'error', icon: 'mdi-laptop' }

  return { color: 'primary', icon: 'mdi-account-outline' }
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
          prepend-icon="mdi-tray-arrow-up"
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
            clear-icon="mdi-close"
            style="inline-size: 5rem;"
          />
        </div>
      </VCardText>

      <VDivider />

      <!-- SECTION datatable -->
      <VDataTableServer
        v-model:items-per-page="options.itemsPerPage"
        v-model:page="options.page"
        :items="users"
        :items-length="totalUsers"
        :headers="headers"
        show-select
        class="text-no-wrap"
        @update:options="options = $event"
      >
        <!-- User -->
        <template #item.user="{ item }">
          <div class="d-flex">
            <VAvatar
              size="34"
              :variant="!item.raw.avatar ? 'tonal' : undefined"
              :color="!item.raw.avatar ? resolveUserRoleVariant(item.raw.role).color : undefined"
              class="me-3"
            >
              <VImg
                v-if="item.raw.avatar"
                :src="item.raw.avatar"
              />
              <span v-else>{{ avatarText(item.raw.fullName) }}</span>
            </VAvatar>
            <div class="d-flex flex-column">
              <h6 class="text-sm">
                <RouterLink
                  :to="{ name: 'apps-user-view-id', params: { id: item.raw.id } }"
                  class="font-weight-medium user-list-name"
                >
                  {{ item.raw.fullName }}
                </RouterLink>
              </h6>
              <span class="text-xs text-medium-emphasis">@{{ item.raw.username }}</span>
            </div>
          </div>
        </template>

        <!-- Role -->
        <template #item.role="{ item }">
          <div class="d-flex gap-4">
            <VIcon
              :icon="resolveUserRoleVariant(item.raw.role).icon"
              :color="resolveUserRoleVariant(item.raw.role).color"
            />
            <span class="text-capitalize">{{ item.raw.role }}</span>
          </div>
        </template>

        <!-- Plan -->
        <template #item.plan="{ item }">
          <span class="text-capitalize">{{ item.raw.currentPlan }}</span>
        </template>

        <!-- Status -->
        <template #item.status="{ item }">
          <VChip
            :color="resolveUserStatusVariant(item.raw.status)"
            size="small"
            class="text-capitalize"
          >
            {{ item.raw.status }}
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
              icon="mdi-dots-vertical"
            />

            <VMenu activator="parent">
              <VList>
                <VListItem :to="{ name: 'apps-user-view-id', params: { id: item.raw.id } }">
                  <template #prepend>
                    <VIcon icon="mdi-eye-outline" />
                  </template>
                  <VListItemTitle>View</VListItemTitle>
                </VListItem>
                <VListItem link>
                  <template #prepend>
                    <VIcon icon="mdi-pencil-outline" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>
                <VListItem @click="deleteUser(item.raw.id)">
                  <template #prepend>
                    <VIcon icon="mdi-delete-outline" />
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
