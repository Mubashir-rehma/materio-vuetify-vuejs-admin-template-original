module.exports = {
  title: 'Master',
  description: 'This is desc',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'Articles', link: '/articles/' },
      {
        text: 'Demo',
        link: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/',
      },
      { text: 'Purchase', link: 'https://1.envato.market/vuexy_admin' },
    ],
    sidebar: {
      '/guide/': [
        ['', 'Welcome'],
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '/guide/installation',
            '/guide/folder-structure',
            '/guide/how-to-create-a-new-page',
            '/guide/styles',
            '/guide/navigation-menu',
            '/guide/layouts.md',
            '/guide/authentication.md',
            '/guide/access-control.md',
            '/guide/splash-screen.md',
          ],
        },
        {
          title: 'Plugins',
          collapsable: false,
          children: ['/guide/plugins/perfect-scrollbar'],
        },
        {
          title: 'Support',
          collapsable: false,
          children: ['/guide/getting-support', '/guide/github-access'],
        },
      ],
    },
  },
}