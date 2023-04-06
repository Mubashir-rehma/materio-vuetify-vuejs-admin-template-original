import appAndPages from './app-and-pages'
import charts from './charts'
import dashboard from './dashboard'
import forms from './forms'
import others from './others'
import uiElements from './ui-elements'
import wizardExamples from './wizard-examples'
import type { VerticalNavItems } from '@/@layouts/types'

export default [...dashboard, ...appAndPages, ...wizardExamples, ...uiElements, ...forms, ...charts, ...others] as VerticalNavItems
