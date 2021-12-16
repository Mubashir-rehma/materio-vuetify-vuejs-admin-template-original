import type { AbilityClass } from '@casl/ability'
import { Ability } from '@casl/ability'

type Actions = 'create' | 'read' | 'update' | 'delete'

type Subjects = 'Auth' | 'Admin' | 'AclDemo'

export type AppAbility = Ability<[Actions, Subjects]>
export const AppAbility = Ability as AbilityClass<AppAbility>
