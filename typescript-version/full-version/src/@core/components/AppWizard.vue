<script setup lang="ts">
interface Props {
  items: { title: string; icon?: string; subtitle?: string }[]
  currentStep?: number
  direction?: string
}

interface Emit {
  (e: 'update:currentStep', value: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const currentStep = ref(props.currentStep || 0)

// check if step is completed or active and return class name accordingly
const completedSteps = computed(() => {
  return (index: number) => index < currentStep.value ? 'wizard-steps-completed' : index === currentStep.value ? 'wizard-steps-active' : ''
})

// return step number with 0 prefix
const stepsNumber = computed(() => {
  return (index: number) => {
    index = index + 1

    return index > 9 ? index : `0${index}`
  }
})

watchEffect(() => {
  // we need to check undefined because if we pass 0 as currentStep it will be falsy
  if (props.currentStep !== undefined && props.currentStep < props.items.length && props.currentStep >= 0)
    currentStep.value = props.currentStep

  emit('update:currentStep', currentStep.value)
})
</script>

<template>
  <VSlideGroup
    v-model="currentStep"
    class="app-wizard"
    :direction="props.direction"
  >
    <VSlideGroupItem
      v-for="(item, index) in props.items"
      :key="item.title"
      :value="index"
    >
      <div
        class="cursor-pointer mx-1"
        :class="completedSteps(index)"
        @click="emit('update:currentStep', index)"
      >
        <!-- SECTION wizard step with icon -->
        <template v-if="item.icon">
          <div class="wizard-icon-step text-high-emphasis d-flex align-center gap-2">
            <!-- 👉 icon and title -->
            <div
              class="d-flex align-center gap-2"
              :class="props.direction !== 'vertical' ? 'flex-column mx-4 mx-md-10 mx-lg-13' : ''"
            >
              <VIcon
                :icon="item.icon"
                size="55"
              />

              <span class="text-base font-weight-medium">{{ item.title }}</span>
            </div>

            <!-- 👉 append chevron -->
            <VIcon
              v-if="props.items.length - 1 !== index && props.direction !== 'vertical'"
              class="flip-in-rtl"
              icon="mdi-chevron-right"
              color="isSelected ? 'text-primary' : 'disabled'"
            />
          </div>
        </template>
        <!-- !SECTION  -->

        <!-- SECTION wizard step without icon -->
        <template v-else>
          <div class="d-flex align-center gap-x-2">
            <div class="d-flex align-center gap-2">
              <div
                class="d-flex align-center justify-center"
                style="block-size: 24px; inline-size: 24px;"
              >
                <!-- 👉 custom circle icon -->
                <template v-if="index >= currentStep">
                  <div class="wizard-step-indicator" />
                </template>

                <!-- 👉 step completed icon -->
                <template v-else>
                  <VIcon
                    icon="mdi-check-circle"
                    class="wizard-step-icon"
                    size="24"
                  />
                </template>
              </div>

              <!-- 👉 Step Number -->
              <h4 class="text-h4">
                {{ stepsNumber(index) }}
              </h4>
            </div>

            <!-- 👉 title and subtitle -->
            <div>
              <h6 class="text-sm font-weight-medium">
                {{ item.title }}
              </h6>

              <template v-if="item.subtitle">
                <span class="text-xs">
                  {{ item.subtitle }}
                </span>
              </template>
            </div>

            <!-- 👉 wizard step line -->
            <template v-if="props.items.length - 1 !== index && props.direction !== 'vertical'">
              <div class="wizard-step-line" />
            </template>
          </div>
        </template>
        <!-- !SECTION  -->
      </div>
    </VSlideGroupItem>
  </VSlideGroup>
</template>

<style lang="scss">
.app-wizard {
  .v-slide-group__content {
    justify-content: center;
    row-gap: 1.5rem;

    .wizard-step-indicator {
      border: 0.3125rem solid rgb(var(--v-theme-primary));
      border-radius: 50%;
      background-color: rgb(var(--v-theme-surface));
      block-size: 1.25rem;
      inline-size: 1.25rem;
      opacity: var(--v-activated-opacity);
    }

    .wizard-step-line {
      border-radius: 0.1875rem;
      background-color: rgb(var(--v-theme-primary));
      block-size: 0.1875rem;
      inline-size: 3.75rem;
      opacity: var(--v-activated-opacity);
    }

    .wizard-steps-completed,
    .wizard-steps-active {
      .wizard-icon-step,
      .wizard-step-icon {
        color: rgb(var(--v-theme-primary)) !important;
      }

       .wizard-step-indicator {
        opacity: 1;
      }
    }

    .wizard-steps-completed{
      .wizard-step-line{
        opacity: 1;
      }
    }

  }
}
</style>
