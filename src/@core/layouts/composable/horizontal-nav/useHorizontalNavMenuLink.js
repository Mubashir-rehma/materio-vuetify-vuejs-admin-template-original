import useNav from '@core/layouts/composable/useNav'
import { ref } from '@vue/composition-api'

export default function useHorizontalNavMenuLink(item) {
  const { isNavLinkActive, navLinkProps } = useNav()

  const isActive = ref(false)

  const linkProps = navLinkProps.value(item)

  const updateIsActive = () => {
    isActive.value = isNavLinkActive(item)
  }

  return {
    isActive,
    linkProps,
    updateIsActive,
  }
}
