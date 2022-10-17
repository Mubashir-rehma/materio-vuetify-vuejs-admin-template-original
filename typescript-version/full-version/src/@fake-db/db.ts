import './apps/user-list'
import './jwt'
import mock from './mock'
import './pages/faq'
import './pages/help-center'
import './pages/knowledge-base'

// Apps
import './apps/calendar'
import './apps/invoice'

// forwards the matched request over network
mock.onAny().passThrough()
