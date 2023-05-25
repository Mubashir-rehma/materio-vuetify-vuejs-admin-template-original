import { defineConfig } from 'vitepress'

const gtmConfig = {
  headScript: ``,
  bodyNoScript: ``,
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Master",
  description: "Production Ready, Carefully Crafted, Extensive Vuetify Admin Template",
  srcDir: 'src',
  base: process.env.BASE || '/',
  head: [
    ["link", { rel: "icon", href: "https://api.iconify.design/logos:visual-studio-code.svg" }],
    ["meta", { name: "theme-color", content: "#696cff" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap' }],
  ],
  ignoreDeadLinks: 'localhostLinks',
  themeConfig: {
    logo: 'https://api.iconify.design/logos:visual-studio-code.svg',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'Articles', link: '/articles/', activeMatch: '/articles/' },
      { text: 'Code Examples', link: '/code-examples/fetching-nav-items-from-api', activeMatch: '/code-examples/' },
      {
        text: 'Other',
        items: [
          { text: '@core', link: '/core/', activeMatch: '/core/' },
          { text: '@layouts', link: '/layouts/', activeMatch: '/layouts/' },
          { text: 'Contribution', link: '/contribution/' },
        ],
      },
      {
        text: 'Demo',
        link: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1',
      },
      { text: 'Purchase', link: 'https://themeselection.com/item/materio-vuetify-vuejs-admin-template/' },
    ],
    sidebar: {
      '/guide/': [
        { text: 'Welcome', link: '/guide/' },
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Vscode Setup', link: '/guide/vscode-setup' },
            { text: 'Folder Structure', link: '/guide/folder-structure' },
            { text: 'Colors And Themes', link: '/guide/getting-started/colors-and-themes' },
            { text: 'Theme Configuration', link: '/guide/getting-started/theme-configuration' },
            { text: 'How To Create A New Page', link: '/guide/how-to-create-a-new-page' },
            { text: 'Styles', link: '/guide/styles' },
            { text: 'Navigation Menu', link: '/guide/navigation-menu' },
            { text: 'Authentication', link: '/guide/authentication' },
            { text: 'Access Control', link: '/guide/access-control' },
            { text: 'Splash Screen', link: '/guide/splash-screen' },
            { text: 'Demo Configs', link: '/guide/getting-started/demo-configs' },
            { text: 'RTL', link: '/guide/getting-started/rtl' },
            { text: 'Icons', link: '/guide/icons' },
            { text: 'Docker', link: '/guide/docker' },
          ],
        },
        {
          text: 'Layout',
          collapsed: false,
          items: [
            { text: 'Layouts Plugin', link: '/guide/layouts/layouts-plugin' },
            { text: 'Layout Types', link: '/guide/layouts/layout-types' },
          ],
        },
        {
          text: 'Laravel Integration',
          collapsed: false,
          items: [
            { text: 'Folder Structure', link: '/guide/laravel-integration/folder-structure' },
            { text: 'Installation', link: '/guide/laravel-integration/installation' },
            { text: 'Database Connection', link: '/guide/laravel-integration/database-connection' },
            { text: 'Passport Integration', link: '/guide/laravel-integration/laravel-passport-integration' },
            { text: 'Passport Authentication', link: '/guide/laravel-integration/laravel-passport-authentication' },
            { text: 'Sanctum Integration', link: '/guide/laravel-integration/laravel-sanctum-integration' },
            { text: 'Sanctum Authentication', link: '/guide/laravel-integration/laravel-sanctum-authentication' },
            { text: 'Frontend Api Call', link: '/guide/laravel-integration/frontend-api-call' },
            { text: 'Laravel Sail Docker', link: '/guide/laravel-integration/laravel-sail-docker' },
            { text: 'Laravel Deployment', link: '/guide/laravel-integration/laravel-deployment' },
          ],
        },
        {
          text: 'Components',
          collapsed: false,
          items: [
            { text: 'Form Components', link: '/guide/components/form-components' },
            { text: 'Dialog', link: '/guide/components/dialog' },
            { text: 'Tour', link: '/guide/components/tour' },
            { text: 'Stepper', link: '/guide/components/stepper' },
          ],
        },
        {
          text: 'Plugins',
          collapsed: false,
          items: [
            { text: 'Axios', link: '/guide/plugins/axios' },
            { text: 'Perfect Scrollbar', link: '/guide/plugins/perfect-scrollbar' },
          ],
        },
        {
          text: 'Support',
          collapsed: false,
          items: [
            { text: 'Getting Support', link: '/guide/getting-support' },
            { text: 'Github Access', link: '/guide/github-access' },
          ],
        },
      ],
      '/core/': [
        { text: 'Introduction', link: '' },
        {
          text: 'Components',
          collapsed: false,
          items: [
            { text: 'Theme Switcher', link: '/core/components/theme-switcher' },
          ],
        },
      ],
      '/layouts/': [
        { text: 'Introduction', link: '' },
        {
          text: 'Components',
          collapsed: false,
          items: [
            { text: 'Navbar I18n', link: '/layouts/components/navbar-i18n' },
            { text: 'Navbar notifications', link: '/layouts/components/navbar-notifications' },
          ],
        },
      ],
      '/contribution/': [
        { text: 'Welcome', link: '' },
        { text: 'ThemeConfig', link: '/contribution/themeconfig' },
      ],
      'code-examples/': [
        {
          text: 'Layout',
          collapsed: false,
          items: [
            { text: 'Customize Navbar', link: '/code-examples/layout/customize-navbar' },
            { text: 'Customize Footer', link: '/code-examples/layout/customize-footer' },
            { text: 'Fetching Nav Items From Api', link: '/code-examples/fetching-nav-items-from-api' },
          ],
        }
      ],
    },
    footer: {
      copyright: 'COPYRIGHT © 2020-Present ThemeSelection, All rights Reserved',
    }
  },
  markdown: {
    theme: 'dracula',
  },
  transformHtml: async (code, id, ctx) => {
    if (gtmConfig.bodyNoScript && gtmConfig.bodyNoScript)
      return code
        .replace('<head>', `<head>\n${gtmConfig.headScript}`)
        .replace('<body>', `<body>\n${gtmConfig.bodyNoScript}`)
  }
})
