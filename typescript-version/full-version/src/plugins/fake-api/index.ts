import { setupWorker } from 'msw'

// Handlers
import { handlerAppBarSearch } from '@/plugins/fake-api/handlers/app-bar-search/index'
import { handlerAppsAcademy } from '@/plugins/fake-api/handlers/apps/academy/index'
import { handlerAppsCalendar } from '@/plugins/fake-api/handlers/apps/calendar/index'
import { handlerAppsChat } from '@/plugins/fake-api/handlers/apps/chat/index'
import { handlerAppsEcommerce } from '@/plugins/fake-api/handlers/apps/ecommerce/index'
import { handlerAppsEmail } from '@/plugins/fake-api/handlers/apps/email/index'
import { handlerAppsInvoice } from '@/plugins/fake-api/handlers/apps/invoice/index'
import { handlerAppsKanban } from '@/plugins/fake-api/handlers/apps/kanban'
import { handlerAppLogistics } from '@/plugins/fake-api/handlers/apps/logistics/index'
import { handlerAppsPermission } from '@/plugins/fake-api/handlers/apps/permission/index'
import { handlerAppsUsers } from '@/plugins/fake-api/handlers/apps/users/index'
import { handlerAuth } from '@/plugins/fake-api/handlers/auth/index'
import { handlerPagesDatatable } from '@/plugins/fake-api/handlers/pages/datatable/index'
import { handlerPagesFaq } from '@/plugins/fake-api/handlers/pages/faq/index'
import { handlerPagesHelpCenter } from '@/plugins/fake-api/handlers/pages/help-center/index'
import { handlerPagesProfile } from '@/plugins/fake-api/handlers/pages/profile/index'

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
