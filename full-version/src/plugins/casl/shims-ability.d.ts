import type { AppAbility } from './AppAbility';

// TODO: Decide where to place this file

declare module 'vue' {
  interface ComponentCustomProperties {
    $ability: AppAbility
    $can(this: this, ...args: Parameters<this['$ability']['can']>): boolean
  }
}
