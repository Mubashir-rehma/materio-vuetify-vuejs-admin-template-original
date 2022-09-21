/// <reference path="auto-imports.d.ts" />
/// <reference path="components.d.ts" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

import 'vue-router'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-router' {
  interface RouteMeta {
    action?: string
    subject?: string
    layoutWrapperClasses?: string
  }
}
