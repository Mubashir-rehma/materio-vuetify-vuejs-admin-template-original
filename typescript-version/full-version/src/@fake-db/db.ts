import './jwt'
import mock from './mock'
import './pages/faq'
import './pages/knowledge-base'

// forwards the matched request over network
mock.onAny().passThrough()
