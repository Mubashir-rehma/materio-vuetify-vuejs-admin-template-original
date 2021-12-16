import './jwt'
import mock from './mock'

// forwards the matched request over network
mock.onAny().passThrough()
