import store from '@/store'
// eslint-disable-next-line object-curly-newline
import { mdiAccountOutline, mdiCogOutline, mdiDatabaseOutline, mdiDnsOutline, mdiPencilOutline } from '@mdi/js'
import { ref, watch } from '@vue/composition-api'

export default function useUsersList() {
  const userListTable = ref([])

  const tableColumns = [
    { text: 'USER', value: 'fullName' },
    { text: 'EMAIL', value: 'email' },
    { text: 'ROLE', value: 'role' },
    { text: 'PLAN', value: 'currentPlan' },
    { text: 'STATUS', value: 'status' },
    { text: 'Actions', value: 'actions', align: 'center' },
  ]

  const searchQuery = ref('')
  const roleFilter = ref(null)
  const planFilter = ref(null)
  const statusFilter = ref(null)
  const totalUserListTable = ref(0)
  const loading = ref(false)
  const options = ref({})

  // fetch data
  const fetchUsers = () => {
    store
      .dispatch('app-user/fetchUsers', {
        q: searchQuery.value,
        options: options.value,
        status: statusFilter.value,
        role: roleFilter.value,
        plan: planFilter.value,
      })
      .then(response => {
        const { filteredData, total } = response.data

        userListTable.value = filteredData
        totalUserListTable.value = total
      })
      .catch(error => {
        console.log(error)
      })
  }

  const refetchData = () => {
    fetchUsers()
  }

  watch([searchQuery, roleFilter, planFilter, statusFilter, options], () => {
    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 1000)

    refetchData()
  })

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*
  const resolveUserRoleVariant = role => {
    if (role === 'subscriber') return 'primary'
    if (role === 'author') return 'warning'
    if (role === 'maintainer') return 'success'
    if (role === 'editor') return 'info'
    if (role === 'admin') return 'error'

    return 'primary'
  }

  const resolveUserRoleIcon = role => {
    if (role === 'subscriber') return mdiAccountOutline
    if (role === 'author') return mdiCogOutline
    if (role === 'maintainer') return mdiDatabaseOutline
    if (role === 'editor') return mdiPencilOutline
    if (role === 'admin') return mdiDnsOutline

    return 'UserIcon'
  }

  const resolveUserStatusVariant = status => {
    if (status === 'pending') return 'warning'
    if (status === 'active') return 'success'
    if (status === 'inactive') return 'secondary'

    return 'primary'
  }

  return {
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
    fetchUsers,
    resolveUserRoleVariant,
    resolveUserRoleIcon,
    resolveUserStatusVariant,
  }
}
