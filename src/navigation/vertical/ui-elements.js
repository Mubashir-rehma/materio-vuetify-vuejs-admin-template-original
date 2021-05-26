import {
  mdiAlphaTBoxOutline,
  mdiArchiveOutline,
  mdiControllerClassicOutline,
  mdiCreditCardOutline,
  mdiHomeOutline,
} from '@mdi/js'

export default [
  {
    subheader: 'USER INTERFACE',
  },
  {
    icon: mdiHomeOutline,
    title: 'home',
    to: 'home',
    action: 'read',
    resource: 'Dashboard',
  },
  {
    icon: mdiAlphaTBoxOutline,
    title: 'Typography',
    to: 'ui-typography',
  },
  {
    icon: mdiControllerClassicOutline,
    title: 'Gamification',
    to: 'ui-gamification',
  },
  {
    title: 'Cards',
    icon: mdiCreditCardOutline,
    children: [
      {
        title: 'Basic',
        to: 'card-basic',
      },
      {
        title: 'Statistics',
        to: 'card-statistics',
      },
      {
        title: 'Advance',
        to: 'card-advance',
      },
      {
        title: 'Actions',
        to: 'card-actions',
      },
      {
        title: 'Chart',
        to: 'card-chart',
      },
    ],
  },
  {
    title: 'Components',
    icon: mdiArchiveOutline,
    children: [
      {
        title: 'Alert',
        to: 'components-alert',
      },
      {
        title: 'Avatar',
        to: 'components-avatar',
      },
      {
        title: 'Badge',
        to: 'components-badge',
      },
      {
        title: 'Button',
        to: 'components-button',
      },
      {
        title: 'Menu',
        to: 'components-menu',
      },
      {
        title: 'Expansion Panel',
        to: 'components-expansion-panel',
      },
      {
        title: 'List',
        to: 'components-list',
      },
      {
        title: 'Dialog',
        to: 'components-dialog',
      },
      {
        title: 'Pagination',
        to: 'components-pagination',
      },
      {
        title: 'Tabs',
        to: 'components-tabs',
      },
      {
        title: 'Tooltip',
        to: 'components-tooltip',
      },
      {
        title: 'Chip',
        to: 'components-chip',
      },
      {
        title: 'Snackbar',
        to: 'components-snackbar',
      },
      {
        title: 'Stepper',
        to: 'components-stepper',
      },
      {
        title: 'Treeview',
        to: 'components-treeview',
      },
    ],
  },
]
