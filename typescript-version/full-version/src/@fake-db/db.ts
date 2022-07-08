import './jwt'
import mock from './mock'
import './pages/faq'
import './pages/knowledge-base'

// Apps
import './apps/calendar'

// forwards the matched request over network
mock.onAny().passThrough()
