// eslint-disable-next-line object-curly-newline
import { mdiArchiveOutline, mdiLayersTripleOutline } from '@mdi/js'

export default [
  {
    title: 'User Interface',
    icon: mdiLayersTripleOutline,
    children: [
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
            title: 'Treeview',
            to: 'components-treeview',
          },
        ],
      },
    ],
  },
]
