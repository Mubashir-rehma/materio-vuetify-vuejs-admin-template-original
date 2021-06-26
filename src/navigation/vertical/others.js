import { mdiMenu } from '@mdi/js'

export default [
  {
    subheader: 'Others',
  },
  {
    title: 'Menu Levels',
    icon: mdiMenu,
    children: [
      {
        title: 'Menu Level 2.1',
      },
      {
        title: 'Menu Level 2.2',
        children: [
          {
            title: 'Menu Level 3.1',
          },
          {
            title: 'Menu Level 3.2',
          },
        ],
      },
    ],
  },
]
