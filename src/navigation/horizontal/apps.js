import { mdiMessageTextOutline, mdiPackageVariantClosed } from '@mdi/js'

export default [
  {
    title: 'Apps',
    icon: mdiPackageVariantClosed,
    children: [
      {
        title: 'Chat',
        icon: mdiMessageTextOutline,
        to: 'apps-chat',
      },
    ],
  },
]
