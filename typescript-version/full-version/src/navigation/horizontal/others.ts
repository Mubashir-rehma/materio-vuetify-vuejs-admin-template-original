export default [
  {
    title: 'Others',
    icon: 'i-mdi-dots-horizontal',
    children: [
      {
        title: 'Access Control',
        icon: 'i-mdi-shield-outline',
        to: 'access-control',
        action: 'read',
        subject: 'Auth',
      },
      {
        title: 'Nav Levels',
        icon: 'i-mdi-menu',
        children: [
          {
            title: 'Level 2.1',
            to: null,
          },
          {
            title: 'Level 2.2',
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
    ],
  },
]