import { destr } from 'destr'
import type { App } from 'vue'

import { createMongoAbility } from '@casl/ability'
import { abilitiesPlugin } from '@casl/vue'
import type { Rule } from './ability'

export default function (app: App) {
  const userAbilityRules = destr(localStorage.getItem('userAbilityRules')) as null | Rule[]
  const initialAbility = createMongoAbility(userAbilityRules ?? [])

  app.use(abilitiesPlugin, initialAbility, {
    useGlobalProperties: true,
  })
}
