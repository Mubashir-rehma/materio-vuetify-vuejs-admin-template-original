import { useDisplay } from 'vuetify'

export const useResponsiveLeftSidebar = ({ sidebarWidth }: { sidebarWidth: number }) => {
  const { mdAndDown, lgAndUp, name: currentBreakpoint } = useDisplay()

  const isLeftSidebarOpen = ref(true)

  const setInitialValue = () => {
    isLeftSidebarOpen.value = !mdAndDown.value
  }

  // Set the initial value of sidebar
  setInitialValue()

  watch(
    currentBreakpoint,
    () => {
      // Reset left sidebar
      if (mdAndDown.value)
        isLeftSidebarOpen.value = false
      if (lgAndUp.value)
        isLeftSidebarOpen.value = true
    },
  )

  // const contentStyles = computed(() => ({
  //   'margin-inline-start': isLeftSidebarOpen.value && lgAndUp.value ? `${sidebarWidth}px` : '',
  // }))

  return {
    isLeftSidebarOpen,

    // contentStyles,
  }
}
