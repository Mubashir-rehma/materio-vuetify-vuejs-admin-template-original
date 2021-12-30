module.exports = {
  title: 'Master',
  description: 'This is desc',
  themeConfig: {
    nav: [
      { text: 'Beginner Guide', link: '/beginner-guide/' },
      { text: 'Advanced Guide', link: '/advanced-guide/' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'Articles', link: '/articles/' },
      {
        text: 'Demo',
        link: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/',
      },
      { text: 'Purchase', link: 'https://1.envato.market/vuexy_admin' },
    ],
    sidebar: {
      '/beginner-guide/': [
        ['', 'Welcome'],
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '/beginner-guide/installation',
            '/beginner-guide/folder-structure',
            '/beginner-guide/how-to-create-a-new-page',
            '/beginner-guide/styles',
            '/beginner-guide/navigation-menu',
            '/beginner-guide/layouts.md',
            '/beginner-guide/authentication.md',
            '/beginner-guide/access-control.md',
            '/beginner-guide/splash-screen.md',
          ],
        },
        {
          title: 'Support',
          collapsable: false,
          children: ['/beginner-guide/getting-support', '/beginner-guide/github-access'],
        },
      ],
    },
  },
}
