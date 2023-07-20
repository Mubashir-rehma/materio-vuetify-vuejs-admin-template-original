import { setupWorker } from 'msw'

// Handlers
import { handlerAppsKanban } from '@/plugins/fake-api/handlers/apps/kanban'

const worker = setupWorker(
  ...handlerAppsKanban,
)

worker.start({
  onUnhandledRequest: 'bypass',
})

export default function () {
  // This doesn't require app registration
}
