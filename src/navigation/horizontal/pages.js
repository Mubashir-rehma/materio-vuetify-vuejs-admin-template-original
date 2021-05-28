import { mdiFileOutline, mdiLockOutline } from '@mdi/js'

export default [
  {
    title: 'Pages',
    icon: mdiFileOutline,
    children: [
      {
        title: 'Authentication',
        icon: mdiLockOutline,
        children: [
          {
            title: 'Login v1',
            to: 'auth-login-v1',
            target: '_blank',
          },
          {
            title: 'Login v2',
            to: 'auth-login-v2',
            target: '_blank',
          },
          {
            title: 'Register V1',
            to: 'auth-register-v1',
            target: '_blank',
          },
          {
            title: 'Register V2',
            to: 'auth-register-v2',
            target: '_blank',
          },
          {
            title: 'Forgot Password V1',
            to: 'auth-forgot-password-v1',
            target: '_blank',
          },
          {
            title: 'Forgot Password V2',
            to: 'auth-forgot-password-v2',
            target: '_blank',
          },
          {
            title: 'Reset Password V1',
            to: 'auth-reset-password-v1',
            target: '_blank',
          },
          {
            title: 'Reset Password V2',
            to: 'auth-reset-password-v2',
            target: '_blank',
          },
        ],
      },
      {
        title: 'Miscellaneous',
        icon: mdiFileOutline,
        children: [
          {
            title: 'Under Maintenance',
            to: 'misc-under-maintenance',
            target: '_blank',
          },
          {
            title: 'Error',
            to: 'misc-error',
            target: '_blank',
          },
          {
            title: 'Coming Soon',
            to: 'misc-coming-soon',
            target: '_blank',
          },
          {
            title: 'Not Authorized',
            to: 'misc-not-authorized',
            target: '_blank',
          },
        ],
      },
      {
        title: 'Knowledge Base',
        to: 'page-knowledge-base',
      },
      {
        title: 'Account Settings',
        to: 'page-account-settings',
      },

      // {
      //   title: 'Account Settings',
      //   to: 'pages-account-setting',
      //   icon: 'SettingsIcon',
      // },
      // {
      //   title: 'Profile',
      //   to: 'pages-profile',
      //   icon: 'UserIcon',
      // },
      // {
      //   title: 'Faq',
      //   to: 'pages-faq',
      //   icon: 'HelpCircleIcon',
      // },
      // {
      //   title: 'Knowledge Base',
      //   to: 'pages-knowledge-base',
      //   icon: 'AlertCircleIcon',
      // },
      // {
      //   title: 'Pricing',
      //   to: 'pages-pricing',
      //   icon: 'DollarSignIcon',
      // },
      // {
      //   title: 'Blog',
      //   icon: 'ClipboardIcon',
      //   children: [
      //     {
      //       title: 'List',
      //       to: 'pages-blog-list',
      //     },
      //     {
      //       title: 'Detail',
      //       to: { name: 'pages-blog-detail', params: { id: 1 } },
      //     },
      //     {
      //       title: 'Edit',
      //       to: { name: 'pages-blog-edit', params: { id: 1 } },
      //     },
      //   ],
      // },
      // {
      //   title: 'Mail Templates',
      //   icon: 'MailIcon',
      //   children: [
      //     {
      //       title: 'Welcome',
      //       href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html',
      //     },
      //     {
      //       title: 'Reset Password',
      //       href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html',
      //     },
      //     {
      //       title: 'Verify Email',
      //       href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html',
      //     },
      //     {
      //       title: 'Deactivate Account',
      //       href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html',
      //     },
      //     {
      //       title: 'Invoice',
      //       href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html',
      //     },
      //     {
      //       title: 'Promotional',
      //       href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html',
      //     },
      //   ],
      // },
      // {
      //   title: 'Miscellaneous',
      //   icon: 'FileIcon',
      //   children: [
      //     {
      //       title: 'Coming Soon',
      //       to: 'misc-coming-soon',
      //       target: '_blank',
      //     },
      //     {
      //       title: 'Not Authorized',
      //       to: 'misc-not-authorized',
      //       target: '_blank',
      //     },
      //     {
      //       title: 'Under Maintenance',
      //       to: 'misc-under-maintenance',
      //       target: '_blank',
      //     },
      //     {
      //       title: 'Error',
      //       to: 'misc-error',
      //       target: '_blank',
      //     },
      //   ],
      // },
    ],
  },
]
