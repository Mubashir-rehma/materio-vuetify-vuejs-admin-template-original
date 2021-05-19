import { mdiFileOutline } from '@mdi/js'

export default [
  {
    subheader: 'APP AND PAGES',
  },
  {
    title: 'Pages',
    icon: mdiFileOutline,
    children: [
      {
        title: 'Authentication',
        children: [
          {
            title: 'Login V1',
            to: 'auth-login-v1',
            target: '_blank',
          },
          {
            title: 'Register V1',
            to: 'auth-register-v1',
            target: '_blank',
          },
          {
            title: 'Forgot Password V1',
            to: 'auth-forgot-password-v1',
            target: '_blank',
          },
        ],
      },
    ],
  },
]
