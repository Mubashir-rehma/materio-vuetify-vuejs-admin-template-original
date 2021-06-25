import {
  mdiFileDocumentOutline,
  mdiAccountOutline,
  mdiPackageVariantClosed,
  mdiMessageTextOutline,
} from '@mdi/js'

export default [
  {
    title: 'Apps',
    icon: mdiPackageVariantClosed,
    children: [
      {
        title: 'Invoice',
        icon: mdiFileDocumentOutline,
        children: [
          {
            title: 'Invoice List',
            to: 'apps-invoice-list',
          },
        ],
      },
      {
        title: 'Chat',
        icon: mdiMessageTextOutline,
        to: 'apps-chat',
      },
      {
        title: 'User',
        icon: mdiAccountOutline,
        children: [
          {
            title: 'User List',
            to: 'apps-user-list',
          },
          {
            title: 'User View',
            to: { name: 'apps-user-view', params: { id: 21 } },
          },
        ],
      },
    ],
  },
]
