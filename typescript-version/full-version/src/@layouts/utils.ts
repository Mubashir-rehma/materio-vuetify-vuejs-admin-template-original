import type { NavGroup, NavLink, NavLinkProps } from '@layouts/types'
import type { PartialDeep } from 'type-fest'
import type { Router } from 'vue-router'

export const mergeConfig = <T>(current: T, updates: PartialDeep<T>): T => {
  for (const key of Object.keys(updates)) {
    if (!Object.prototype.hasOwnProperty.call(current, key) || typeof updates[key] !== 'object')
      current[key] = updates[key]
    else mergeConfig(current[key], updates[key])
  }

  return current
}

export const openGroups = ref<string[]>([])

/**
 * Return nav link props to use
 * @param {Object, String} item navigation routeName or route Object provided in navigation data
 */
export const getComputedNavLinkToProp = computed(() => (link: NavLink) => {
  const props: NavLinkProps = {
    target: link.target,
    rel: link.rel,
  }

  // If route is string => it assumes string is route name => Create route object from route name
  // If route is not string => It assumes it's route object => returns passed route object
  if (link.to) props.to = typeof link.to === 'string' ? { name: link.to } : link.to
  else props.href = link.href

  return props
})

/**
 * Return route name for navigation link
 * If link is string then it will assume it is route-name
 * IF link is object it will resolve the object and will return the link
 * @param {Object, String} link navigation link object/string
 */
export const resolveNavLinkRouteName = (link: NavLink, router: Router) => {
  if (!link.to) return null

  if (typeof link.to === 'string') return link.to

  return router.resolve(link.to).name
}

/**
 * Check if nav-link is active
 * @param {Object} link nav-link object
 */
export const isNavLinkActive = (link: NavLink, router: Router) => {
  // Matched routes array of current route
  const matchedRoutes = router.currentRoute.value.matched

  // Check if provided route matches route's matched route
  const resolveRoutedName = resolveNavLinkRouteName(link, router)

  if (!resolveRoutedName) return false

  // eslint-disable-next-line arrow-body-style
  return matchedRoutes.some(route => {
    return route.name === resolveRoutedName || route.meta.navActiveLink === resolveRoutedName
  })
}

/**
 * Check if nav group is active
 * @param {Array} children Group children
 */
export const isNavGroupActive = (children: (NavLink | NavGroup)[], router: Router): boolean =>
  children.some(child => {
    // If child have children => It's group => Go deeper(recursive)
    if ('children' in child) return isNavGroupActive(child.children, router)

    // else it's link => Check for matched Route
    return isNavLinkActive(child, router)
  })