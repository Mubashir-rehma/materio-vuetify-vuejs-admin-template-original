module.exports = {
  title: 'Materio',
  description: 'This is desc',
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#9155FD" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'Articles', link: '/articles/' },
      { text: 'Code Examples', link: '/code-examples/fetching-nav-items-from-api' },
      {
        text: 'Other',
        ariaLabel: 'Other Menu',
        items: [
          { text: '@core', link: '/core/' },
          { text: '@layouts', link: '/layouts/' },
          { text: 'Contribution', link: '/contribution/' },
        ],
      },
      {
        text: 'Vue 2 Docs',
        link: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template-vue2/documentation/',
      },
      {
        text: 'Demo',
        link: 'https://themeselection.com/demo/materio-vuetify-vuejs-admin-template/landing',
      },
      { text: 'Purchase', link: 'https://themeselection.com/products/materio-vuetify-vuejs-admin-template' },
    ],
    sidebar: {
      '/guide/': [
        ['', 'Welcome'],
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '/guide/installation',
            '/guide/vscode-setup',
            '/guide/folder-structure',
            '/guide/getting-started/colors-and-themes',
            '/guide/getting-started/theme-configuration',
            '/guide/how-to-create-a-new-page',
            '/guide/styles',
            '/guide/navigation-menu',
            '/guide/authentication',
            '/guide/access-control',
            '/guide/splash-screen',
            '/guide/getting-started/demo-configs',
          ],
        },
        {
          title: 'Layout',
          collapsable: false,
          children: [
            '/guide/layouts/layouts-plugin',
            '/guide/layouts/layout-types',
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            '/guide/components/dialog',
          ]
        },
        {
          title: 'Plugins',
          collapsable: false,
          children: [
            '/guide/plugins/axios',
            '/guide/plugins/perfect-scrollbar',
          ],
        },
        {
          title: 'Support',
          collapsable: false,
          children: ['/guide/getting-support', '/guide/github-access'],
        },
      ],
      '/core/': [
        ['', 'Introduction'],
        {
          title: 'Components',
          collapsable: false,
          children: [
            ['/core/components/theme-switcher', 'Theme Switcher'],
            // ['/layouts/components/navbar-notifications', 'Navbar notifications'],
          ]
        }
      ],
      '/layouts/': [
        ['', 'Introduction'],
        {
          title: 'Components',
          collapsable: false,
          children: [
            ['/layouts/components/navbar-i18n', 'Navbar I18n'],
            ['/layouts/components/navbar-notifications', 'Navbar notifications'],
          ]
        }
      ],
      '/contribution/': [
        ['', 'Welcome'],
        ['/contribution/themeconfig', 'themeConfig'],
      ],
      '/code-examples/': [
        {
          title: 'Layout',
          collapsable: false,
          children: [
            '/code-examples/layout/customize-navbar',
            '/code-examples/layout/customize-footer',
            '/code-examples/fetching-nav-items-from-api',
          ]
        }
      ]
    },
  },
}
