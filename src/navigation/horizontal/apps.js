import { mdiFileDocumentOutline, mdiPackageVariantClosed } from '@mdi/js'

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
        title: 'User',
        icon: mdiFileDocumentOutline,
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
