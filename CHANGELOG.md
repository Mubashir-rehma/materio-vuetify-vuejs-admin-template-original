<!-- Available h3 headings: Added, Fixed, Updated, Removed, Deprecated -->

# Changelog

All notable changes to this template will be documented in this file

## v3.1.0 (2024-07-25)

### Added

- Added Kanban app
  
### Updated

- Updated all the libraries to the latest version

### Fixed
  
- Fixed Apps & Front-pages bugs

## v3.0.0 (2024-01-01)

### Added

- Migration guide in docs for major and technical changes (Highly recommended to read)
- `unplugin-vue-router` for typed pages
- eCommerce App
  - Dashboard
  - Products
    - Product List
    - Add Product
    - Category List
  - Order
    - Order List
    - Order Details
  - Customer
    - Customer List
    - Customer Details
  - Manage Reviews
  - Referrals
  - Settings
- Academy
  - Dashboard
  - My Courses
  - Courses Details
- Logistics
  - Dashboard
  - Fleet (Added MapBox library)
- Front Pages
  - Landing Page
  - Pricing Page
  - Payment Page
  - Checkout Page
  - Help Center Page
- Swiper Extension
- TipTap Rich Editor
- More Dialog Examples
- Form Wizard
- Vite Vue DevTool Plugin

### Updated

- Plugins are now registered automatically like Nuxt and moved to `src/plugins` directory
- Styles are moved to `src/assets/styles` directory
- Directory structure updated
- We now use SVG based CSS icons instead of SVG tag for icons
- Theme config now use `pinia` store instead of composable
  - `useThemeConfig` composable is replaced with `useConfigStore`
- Replaced `axios` with native `fetch` API
- Replaced `axios-mock-adapter` with `msw`
- Cookie is used for persistence instead of LocalStorage
- Customizer UI (User-friendly design)
- All libraries updated to latest version
- Utility functions are auto imported similar to Nuxt

### Removed

- `vite-plugin-pages` plugin (Replaced by `unplugin-vue-router`)
- `axios` (Replace by native `fetch` API)
- `axios-mock-adapter` (Replaced by `msw`)
- 500 error page removed

## v2.2.0 (2023-05-16)

### Added

- Added "system" theme (Auto update theme based on your system ✨)
- Added Roles and Permissions app
- Pages  
  - Multi-step register
- Demo pages
  - DataTable
  - Simple table
  - Autocomplete
- New components
  - DataTable
  - Autocomplete
  - Tour
  - Custom input (Radio & Checkbox)
  - IconBtn (virtual component)
  - AppStepper (Wizard)
- Wizard Example
  - Checkout
  - Property listing
  - Create deal
- Dialog examples
  - App dialog
  - Roles and Permissions

### Updated

- Updated all dependencies and devDependencies
- Improved Navbar Notification components
- Updated Simple tables with vuetify datables in all the pages and apps

### Fixed

- Fixed Horizontal Menu popup issue in RTL
- Fixed AppDateTimePicker open below dialog

## v2.1.1 (2022-12-15)

### Added

- Added Locale dropdown active language status

### Updated

- Updated Core style
- Updated font-weight 600 to 500

### Fixed

- Fixed VerticalNav group active background color

## v2.1.0 (2022-12-13)

### Added

- Added Global search
- Added User profile page
- Added Progress component
- Added Help center page (replacement of knowledge base page)
- Added Verify email authentication pages
- Added Two steps authentication pages
- Added E-mail app
- Added Chat app

### Removed

- Removed Knowledge base page

### Updated

- Updated Vuetify to `v3.0.3`
- Used New alias `@images`  for images import
- Used New alias `@styles`  for style import
- Renamed `card-analytics` to `card-widgets`

### Breaking

- Core styles separated into base and template folders.

## v2.0.0 (2022-09-21)

### Added

- Vue 3 version added
- Vuetify 3 support added
- TypeScript version added (Vue 3 only)

## v1.0.4 (2022-07-06)

### Chore

- Added `package-lock.json` and updated the dependencies to mitigate the possible errors

## v1.0.3 (2022-01-05)

### Fixed

- Apps don't get full height with horizontal nav if horizontal nav is hidden
- Vertical nav's active link color is not pure white

### Added

- `lintOnSave` option added in `vue.config.js` file

## v1.0.2 (2021-11-12)

### Fixed

- Updated [@vue/composition-api](https://github.com/vuejs/composition-api) package to v1.3.3 to mitigate composition api error

## v1.0.1 (2021-10-20)

### Updated

- Uses npm package instead of github repo for forked apexcharts

## v1.0.0 (2021-08-09)

### Added

- Initial Release
