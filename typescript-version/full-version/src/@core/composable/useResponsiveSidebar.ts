import { useDisplay } from 'vuetify'

export const useResponsiveLeftSidebar = ({ sidebarWidth }: { sidebarWidth: number }) => {
  const { smAndDown, mdAndUp, name: currentBreakpoint } = useDisplay()

  const isLeftSidebarOpen = ref(true)

  const setInitialValue = () => {
    isLeftSidebarOpen.value = !smAndDown.value
  }

  // Set the initial value of sidebar
  setInitialValue()

  watch(
    currentBreakpoint,
    () => {
      // Reset left sidebar
      if (smAndDown.value)
        isLeftSidebarOpen.value = false
      if (mdAndUp.value)
        isLeftSidebarOpen.value = true
    },
  )

  // const contentStyles = computed(() => ({
  //   'margin-inline-start': isLeftSidebarOpen.value && mdAndUp.value ? `${sidebarWidth}px` : '',
  // }))

  return {
    isLeftSidebarOpen,

    // contentStyles,
  }
}
