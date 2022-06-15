import './jwt'
import mock from './mock'
import './pages/knowledge-base'

// forwards the matched request over network
mock.onAny().passThrough()
