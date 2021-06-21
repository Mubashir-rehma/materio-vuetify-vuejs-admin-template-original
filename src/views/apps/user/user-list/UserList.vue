<template>
  <div>
    <!-- app drawer -->
    <user-list-add-new
      :is-add-new-user-sidebar-active.sync="isAddNewUserSidebarActive"
      :role-options="roleOptions"
      :plan-options="planOptions"
      @refetch-data="refetchData"
    ></user-list-add-new>

    <!-- list filters -->
    <v-card class="user-list">
      <v-card-title class="text-base pb-0">
        Search Filter
      </v-card-title>
      <v-row class="px-2 ma-0">
        <v-col
          cols="12"
          sm="4"
        >
          <v-select
            v-model="roleFilter"
            placeholder="Select Role"
            :items="roleOptions"
            item-text="title"
            item-value="value"
            outlined
            clearable
            dense
            hide-details
          ></v-select>
        </v-col>

        <v-col
          cols="12"
          sm="4"
        >
          <v-select
            v-model="planFilter"
            placeholder="Select Plan"
            :items="planOptions"
            item-text="title"
            item-value="value"
            outlined
            dense
            clearable
            hide-details
          ></v-select>
        </v-col>

        <v-col
          cols="12"
          sm="4"
        >
          <v-select
            v-model="statusFilter"
            placeholder="Select Status"
            :items="statusOptions"
            item-text="title"
            item-value="value"
            outlined
            dense
            clearable
            hide-details
          ></v-select>
        </v-col>
      </v-row>

      <v-divider class="mt-4"></v-divider>

      <v-card-text class="d-flex align-center flex-wrap mb-1">
        <v-select
          :items="actionList"
          outlined
          dense
          placeholder="Actions"
          hide-details
          class="user-actions mt-4 mt-sm-1 me-1"
        ></v-select>

        <v-spacer></v-spacer>

        <div class="d-flex align-center flex-wrap">
          <v-text-field
            v-model="searchQuery"
            placeholder="Search"
            outlined
            hide-details
            dense
            class="user-search me-4 mt-4 mt-sm-1"
          ></v-text-field>

          <v-btn
            color="primary"
            class="mt-4 mt-sm-1"
            @click.stop="isAddNewUserSidebarActive = !isAddNewUserSidebarActive"
          >
            <v-icon>{{ icons.mdiPlus }}</v-icon>
            <span>Add New User</span>
          </v-btn>
        </div>
      </v-card-text>

      <!-- table -->
      <v-data-table
        :headers="tableColumns"
        :items="userListTable"
        :options.sync="options"
        :server-items-length="totalUserListTable"
        :loading="loading"
        show-select
      >
        <!-- name -->
        <template #[`item.fullName`]="{item}">
          <div class="d-flex align-center">
            <v-avatar
              :color="item.avatar ? '' : 'primary'"
              :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
              size="32"
            >
              <v-img
                v-if="item.avatar"
                :src="`/images/avatars/${item.avatar}`"
              ></v-img>
              <span
                v-else
                class="font-weight-medium"
              >{{ avatarText(item.fullName) }}</span>
            </v-avatar>

            <div class="d-flex flex-column ml-3">
              <span class="d-block text--primary  font-weight-semibold text-truncate">{{ item.fullName }}</span>
              <small>@{{ item.username }}</small>
            </div>
          </div>
        </template>

        <!-- role -->
        <template #[`item.role`]="{item}">
          <div class="d-flex align-center">
            <v-avatar
              size="30"
              :color="resolveUserRoleVariant(item.role)"
              :class="`v-avatar-light-bg ${resolveUserRoleVariant(item.role)}--text me-3`"
            >
              <v-icon
                size="18"
                :color="resolveUserRoleVariant(item.role)"
              >
                {{ resolveUserRoleIcon(item.role) }}
              </v-icon>
            </v-avatar>
            <span class="text-capitalize">{{ item.role }}</span>
          </div>
        </template>

        <!-- plan -->
        <template #[`item.currentPlan`]="{item}">
          <span class="text-capitalize font-weight-semibold text--primary">{{ item.currentPlan }}</span>
        </template>

        <!-- status -->
        <template #[`item.status`]="{item}">
          <v-chip
            small
            :color="resolveUserStatusVariant(item.status)"
            :class="`${resolveUserStatusVariant(item.status)}--text`"
            class="v-chip-light-bg font-weight-semibold text-capitalize"
          >
            {{ item.status }}
          </v-chip>
        </template>

        <!-- actions -->
        <template #item.actions>
          <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in actions"
                :key="i"
              >
                <v-list-item-title>
                  <v-icon
                    size="20"
                    class="mr-2"
                  >
                    {{ item.icon }}
                  </v-icon>
                  <span>{{ item.title }}</span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiSquareEditOutline, mdiDotsVertical, mdiPlus, mdiFileDocumentOutline, mdiDeleteOutline } from '@mdi/js'
import store from '@/store'
import { onUnmounted, ref } from '@vue/composition-api'

// sidebar
import { avatarText } from '@core/utils/filter'
import UserListAddNew from './UserListAddNew.vue'
import userStoreModule from '../userStoreModule'

import useUsersList from './useUsersList'

export default {
  components: {
    UserListAddNew,
  },
  setup() {
    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    const isAddNewUserSidebarActive = ref(false)

    const {
      fetchUsers,
      userListTable,
      tableColumns,
      searchQuery,
      roleFilter,
      planFilter,
      statusFilter,
      totalUserListTable,
      loading,
      options,
      refetchData,

      resolveUserRoleVariant,
      resolveUserRoleIcon,
      resolveUserStatusVariant,
    } = useUsersList()

    // fetch user data
    fetchUsers()

    const actionList = ['Delete', 'Edit', 'View', 'Send']

    const roleOptions = [
      { title: 'Admin', value: 'admin' },
      { title: 'Author', value: 'author' },
      { title: 'Editor', value: 'editor' },
      { title: 'Maintainer', value: 'maintainer' },
      { title: 'Subscriber', value: 'subscriber' },
    ]

    const planOptions = [
      { title: 'Basic', value: 'basic' },
      { title: 'Company', value: 'company' },
      { title: 'Enterprise', value: 'enterprise' },
      { title: 'Team', value: 'team' },
    ]

    const statusOptions = [
      { title: 'Pending', value: 'pending' },
      { title: 'Active', value: 'active' },
      { title: 'Inactive', value: 'inactive' },
    ]

    const actions = [
      { title: 'Details', icon: mdiFileDocumentOutline },
      { title: 'Edit', icon: mdiSquareEditOutline },
      { title: 'Delete', icon: mdiDeleteOutline },
    ]

    return {
      userListTable,
      tableColumns,
      searchQuery,
      roleFilter,
      planFilter,
      statusFilter,
      totalUserListTable,
      actionList,
      roleOptions,
      planOptions,
      statusOptions,
      actions,
      loading,
      options,
      isAddNewUserSidebarActive,
      refetchData,
      avatarText,
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      resolveUserStatusVariant,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
        mdiPlus,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.user-list {
  .user-actions {
    max-width: 120px;
  }
  .user-search {
    max-width: 170px;
  }
}
</style>
