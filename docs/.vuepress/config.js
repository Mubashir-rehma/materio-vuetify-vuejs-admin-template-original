module.exports = {
  base: process.env.NODE_ENV === 'production' ? '/demo/materio-vuetify-vuejs-admin-template/documentation/' : '/',
  title: 'Materio',
  port: 7777,
  // head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'Articles', link: '/articles/' },
      { text: 'Demo', link: 'https://themeselection.com/demo/materio-vuetify-vuejs-admin-template/demo-1/' },
      { text: 'Purchase', link: 'https://1.envato.market/vuexy_admin' },
    ],
    sidebar: {
      '/guide/': [
        ['', 'Welcome'],
        {
          title: 'Getting Started',
          collapsable: false,
          children: ['/guide/getting-started/support', '/guide/getting-started/github-access'],
        },
        {
          title: 'Development',
          collapsable: false,
          children: [
            '/guide/development/installation',
            '/guide/development/folder-structure',
            '/guide/development/theme-configuration',
            '/guide/development/template-styles',
            '/guide/development/routing',
            '/guide/development/navigation-menus',
            '/guide/development/vuex-store',
            '/guide/development/authentication',
            '/guide/development/access-control',
          ],
        },
        {
          title: 'Layout',
          collapsable: false,
          children: [
            '/guide/layout/layout-types',
            '/guide/layout/modifying-and-extending-layouts',
            '/guide/layout/core-layouts',
          ],
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            '/guide/components/card',
            '/guide/components/menu',
            '/guide/components/picker',
            '/guide/components/stepper',
          ],
        },
        {
          title: 'Custom Components',
          collapsable: false,
          children: ['/guide/custom-components/app-card-actions'],
        },
      ],
    },
  },
  plugins: [
    [
      '@vuepress/medium-zoom',
      {
        selector: 'img.medium-zoom',
        options: {
          background: '#0e0e0ecc',
          margin: 50,
        },
      },
    ],
  ],
}
