/* @unocss-include */
import type { HorizontalNavItems } from '@layouts/types'

export default [
  {
    title: 'Home', to: 'index', icon: 'i-mdi-home-outline', action: 'read', subject: 'Auth',
  },
  {
    title: 'Dashboards',
    icon: 'i-mdi-view-dashboard-outline',
    children: [
      {
        title: 'Analytics', to: 'dashboards-analytics', icon: 'i-mdi-analytics', action: 'read', subject: 'Admin',
      },
      {
        title: 'CRM', to: 'dashboards-crm', icon: 'i-mdi-monitor-dashboard', action: 'read', subject: 'Auth',
      },
    ],
  },
  {
    title: 'Apps & Pages',
    icon: 'i-mdi-package-variant',

    children: [
      { title: 'Calendar', to: 'calendar', icon: 'i-mdi-calendar-blank', action: 'read', subject: 'Auth' },
      {
        title: 'User',
        icon: 'i-mdi-account-outline',
        children: [
          { title: 'List', to: 'user-list' },
          { title: 'Detail', to: 'user-detail' },
          { title: 'Add', to: 'user-add' },
        ],
      },
      { title: 'Email', to: 'email', icon: 'i-mdi-email-outline' },
      {
        title: 'Invoice',
        icon: 'i-mdi-currency-usd',
        children: [
          { title: 'List', to: 'invoice-list' },
          { title: 'Detail', to: 'invoice-detail' },
          { title: 'Add', to: 'invoice-add' },
        ],
      },
    ],
  },
  {
    title: 'User Interface',
    icon: 'i-mdi-home',
    children: [
      {
        title: 'Components',
        icon: 'i-mdi-home',
        children: [
          { title: 'Alert', to: 'components-alert' },
          { title: 'Avatar', to: 'components-avatar' },
          { title: 'Button', to: 'components-button' },
          { title: 'Badge', to: 'components-badge' },
          { title: 'Chip', to: 'components-chip' },
          { title: 'Dialog', to: 'components-dialog' },
        ],
      },
    ],
  },
  {
    title: 'Other',
    icon: 'i-mdi-home',
    children: [
      {
        title: 'Nav Levels',
        icon: 'i-mdi-menu',
        children: [
          {
            title: 'Level 2.1',
            to: null,
          },
          {
            title: 'Level 3',
            children: [
              {
                title: 'Level 3.1',
                to: null,
              },
              {
                title: 'Level 3.2',
                to: null,
              },
            ],
          },
        ],
      },
      {
        title: 'Typography', icon: 'i-mdi-netflix', to: 'typography',
      },
    ],
  },
] as HorizontalNavItems
