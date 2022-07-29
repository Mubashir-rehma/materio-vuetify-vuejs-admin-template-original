<script setup lang="ts">
import { avatarText, kFormatter } from '@core/utils/formatters'

interface Props {
  userData: {
    id: number
    fullName: string
    company: string
    role: string
    username: string
    country: string
    contact: string
    email: string
    currentPlan: string
    status: string
    avatar: string
    taskDone: number
    projectDone: number
    taxId: string
    language: string
  }
}

const props = defineProps<Props>()

const standardPlan = {
  plan: 'Standard',
  price: 99,
  benefits: ['10 Users', 'Up to 10GB storage', 'Basic Support'],
}

const isUserInfoEditDialogVisible = ref(false)
const isUpgradePlanDialogVisible = ref(false)

// 👉 Status variant resolver
const resolveUserStatusVariant = (stat: string) => {
  if (stat === 'pending')
    return 'warning'
  if (stat === 'active')
    return 'success'
  if (stat === 'inactive')
    return 'secondary'

  return 'primary'
}

// 👉 Role variant resolver
const resolveUserRoleVariant = (role: string) => {
  if (role === 'subscriber')
    return { color: 'primary', icon: 'mdi-account-outline' }
  if (role === 'author')
    return { color: 'warning', icon: 'mdi-cog-outline' }
  if (role === 'maintainer')
    return { color: 'success', icon: 'mdi-database-outline' }
  if (role === 'editor')
    return { color: 'info', icon: 'mdi-pencil-outline' }
  if (role === 'admin')
    return { color: 'error', icon: 'mdi-dns-outline' }

  return { color: 'primary', icon: 'mdi-account-outline' }
}
</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard v-if="props.userData">
        <VCardText class="text-center pt-15">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            :size="120"
            class="v-avatar-light-bg text-primary"
          >
            <VImg
              v-if="props.userData.avatar"
              :src="props.userData.avatar"
            />
            <span
              v-else
              class="text-5xl font-weight-semibold"
            >
              {{ avatarText(props.userData.fullName) }}
            </span>
          </VAvatar>

          <!-- 👉 User fullName -->
          <h6 class="text-h6 mt-3">
            {{ props.userData.fullName }}
          </h6>

          <!-- 👉 Role chip -->
          <VChip
            label
            :color="resolveUserRoleVariant(props.userData.role).color"
            size="small"
            class="text-capitalize mt-2"
          >
            {{ props.userData.role }}
          </VChip>
        </VCardText>

        <VCardText class="d-flex justify-center flex-wrap mt-3">
          <!-- 👉 Done task -->
          <div class="d-flex align-center me-8 mb-2">
            <VAvatar
              :size="40"
              rounded
              class="v-avatar-light-bg text-primary me-3"
            >
              <VIcon
                size="22"
                icon="mdi-check"
              />
            </VAvatar>

            <div>
              <h3 class="text-h6">
                {{ kFormatter(props.userData.taskDone) }}
              </h3>
              <span>Task Done</span>
            </div>
          </div>

          <!-- 👉 Done Project -->
          <div class="d-flex align-center me-4 mb-2">
            <VAvatar
              :size="40"
              rounded
              class="v-avatar-light-bg text-primary me-3"
            >
              <VIcon
                size="22"
                icon="mdi-briefcase-variant-outline"
              />
            </VAvatar>

            <div>
              <h3 class="text-h6">
                {{ kFormatter(props.userData.projectDone) }}
              </h3>
              <span>Project Done</span>
            </div>
          </div>
        </VCardText>

        <!-- 👉 Details -->
        <VCardText>
          <h6 class="text-h6">
            Details
          </h6>

          <VDivider class="mt-2" />

          <!-- 👉 User Details list -->
          <VList
            density="comfortable"
            class="pb-0"
          >
            <VListItem class="px-0">
              <VListItemTitle>
                <span>Username: </span><span class="text-body-2">@{{ props.userData.username }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle>
                <span>Billing Email: </span><span class="text-body-2">{{ props.userData.email }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle>
                <span>Status: </span>

                <VChip
                  label
                  size="small"
                  :color="resolveUserStatusVariant(props.userData.status)"
                  class="text-capitalize"
                >
                  {{ props.userData.status }}
                </VChip>
              </VListItemTitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle>
                <span>Role: </span>
                <span class="text-capitalize text-sm">{{ props.userData.role }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle>
                <span>Tax ID:</span>
                <span class="text-body-2">
                  {{ props.userData.taxId }}
                </span>
              </VListItemTitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle>
                <span>Contact: </span>
                <span class="text-body-2">{{ props.userData.contact }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle>
                <span>Language: </span>
                <span class="text-body-2">{{ props.userData.language }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle>
                <span>Country:</span>
                <span class="text-body-2">{{ props.userData.country }}</span>
              </VListItemTitle>
            </VListItem>
          </VList>
        </VCardText>

        <!-- 👉 Edit and Suspend button -->
        <VCardText class="d-flex justify-center">
          <VBtn
            variant="elevated"
            class="me-3"
            @click="isUserInfoEditDialogVisible = true"
          >
            Edit
          </VBtn>
          <VBtn
            variant="tonal"
            color="error"
          >
            Suspend
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->

    <!-- SECTION Current Plan -->
    <VCol cols="12">
      <VCard
        flat
        class="current-plan"
      >
        <VCardText class="d-flex">
          <!-- 👉 Standard Chip -->
          <VChip
            label
            color="primary"
            size="small"
          >
            Standard
          </VChip>

          <VSpacer />

          <!-- 👉 Current Price  -->
          <div class="d-flex align-center">
            <sup class="text-primary text-sm font-weight-medium">$</sup>
            <h3 class="text-h3 text-primary font-weight-semibold">
              99
            </h3>
            <sub class="text-body-1 mt-3">/ month</sub>
          </div>
        </VCardText>

        <VCardText>
          <!-- 👉 Price Benefits -->
          <VList density="compact">
            <VListItem
              v-for="benefit in standardPlan.benefits"
              :key="benefit"
              class="px-0"
            >
              <VIcon
                size="10"
                class="me-2"
                icon="mdi-checkbox-blank-circle"
              />
              <span>{{ benefit }}</span>
            </VListItem>
          </VList>

          <!-- 👉 Days -->
          <div>
            <p class="d-flex font-weight-semibold mt-3 mb-2">
              <span>Days</span>
              <VSpacer />
              <span>26 of 30 Days</span>
            </p>

            <!-- 👉 Progress -->
            <VProgressLinear
              :model-value="86"
              height="8"
              rounded
              color="primary"
            />
            <p class="mt-2">
              4 days remaining
            </p>
          </div>

          <!-- 👉 Upgrade Plan -->
          <VBtn
            block
            @click="isUpgradePlanDialogVisible = true"
          >
            Upgrade Plan
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->
  </VRow>

  <!-- 👉 Edit user info dialog -->
  <UserInfoEditDialog
    v-model:isDialogVisible="isUserInfoEditDialogVisible"
    :user-data="props.userData"
  />

  <!-- 👉 Upgrade plan dialog -->
  <UserUpgradePlanDialog v-model:isDialogVisible="isUpgradePlanDialogVisible" />
</template>

<style lang="scss">
.current-plan {
  border: 2px solid rgb(var(--v-theme-primary));
}

.text-capitalize {
  text-transform: capitalize;
}
</style>
