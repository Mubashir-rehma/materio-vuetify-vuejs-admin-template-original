/* @unocss-include */
import type { VerticalNavItems } from '@layouts/types'

export default [
  { heading: 'Dashboards' },
  {
    title: 'Home',
    icon: 'i-mdi-home',
    to: 'index',
    action: 'read',
    subject: 'Auth',
  },
  {
    title: 'Dashboards',
    icon: 'i-mdi-view-dashboard-outline',
    children: [
      {
        title: 'Analytics',
        to: 'dashboards-analytics',
        action: 'read',
        subject: 'Admin',
      },
      {
        title: 'CRM',
        to: 'dashboards-crm',
        action: 'read',
        subject: 'Auth',
      },
    ],
    badgeContent: '2',
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Calendar',
    icon: 'i-mdi-calendar-blank-outline',
    to: 'calendar',
    action: 'read',
    subject: 'Auth',
  },
  {
    title: 'User',
    icon: 'i-mdi-account-outline',
    children: [
      { title: 'List', to: 'user-list' },
      { title: 'Detail', to: 'user-detail' },
      { title: 'Add', to: 'user-add' },
    ],
  },
  {
    title: 'Email',
    icon: 'i-mdi-email-outline',
    to: 'email',
  },
  {
    title: 'Invoice',
    icon: 'i-mdi-currency-usd',

    children: [
      { title: 'List', to: 'invoice-list' },
      { title: 'Detail', to: 'invoice-detail' },
      { title: 'Add', to: 'invoice-add' },
    ],
  },
  { heading: 'UI Elements' },
  {
    title: 'Components',
    icon: 'i-mdi-archive-outline',
    children: [
      { title: 'Alert', to: 'components-alert' },
      { title: 'Avatar', to: 'components-avatar' },
      { title: 'Button', to: 'components-button' },
      { title: 'Badge', to: 'components-badge' },
      { title: 'Chip', to: 'components-chip' },
      { title: 'Pagination', to: 'components-pagination' },
      { title: 'Expansion Panel', to: 'components-expansion-panel' },
      { title: 'List', to: 'components-list' },
      { title: 'Menu', to: 'components-menu' },
    ],
  },
  { heading: 'Forms & Tables' },
  {
    title: 'Forms Elements',
    icon: 'i-mdi-content-copy',
    children: [
      { title: 'Checkbox', to: 'forms-checkbox' },
    ],
  },
  { heading: 'Other' },
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
    title: 'Typography',
    icon: 'i-mdi-netflix',
    to: 'typography',
  },
] as VerticalNavItems
