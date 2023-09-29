import { setupWorker } from 'msw'

// Handlers
import { handlerAppBarSearch } from '@db-types/app-bar-search/index'
import { handlerAppsAcademy } from '@db-types/apps/academy/index'
import { handlerAppsCalendar } from '@db-types/apps/calendar/index'
import { handlerAppsChat } from '@db-types/apps/chat/index'
import { handlerAppsEcommerce } from '@db-types/apps/ecommerce/index'
import { handlerAppsEmail } from '@db-types/apps/email/index'
import { handlerAppsInvoice } from '@db-types/apps/invoice/index'
import { handlerAppsKanban } from '@db-types/apps/kanban'
import { handlerAppLogistics } from '@db-types/apps/logistics/index'
import { handlerAppsPermission } from '@db-types/apps/permission/index'
import { handlerAppsUsers } from '@db-types/apps/users/index'
import { handlerAuth } from '@db-types/auth/index'
import { handlerPagesDatatable } from '@db-types/pages/datatable/index'
import { handlerPagesFaq } from '@db-types/pages/faq/index'
import { handlerPagesHelpCenter } from '@db-types/pages/help-center/index'
import { handlerPagesProfile } from '@db-types/pages/profile/index'

const worker = setupWorker(
  ...handlerAppsKanban,
  ...handlerAppsEcommerce,
  ...handlerAppsAcademy,
  ...handlerAppsInvoice,
  ...handlerAppsUsers,
  ...handlerAppsEmail,
  ...handlerAppsCalendar,
  ...handlerAppsChat,
  ...handlerAppsPermission,
  ...handlerPagesHelpCenter,
  ...handlerPagesProfile,
  ...handlerPagesFaq,
  ...handlerPagesDatatable,
  ...handlerAppBarSearch,
  ...handlerAppLogistics,
  ...handlerAuth,
)

worker.start({
  onUnhandledRequest: 'bypass',
})

export default function () {
  // This doesn't require app registration
}
