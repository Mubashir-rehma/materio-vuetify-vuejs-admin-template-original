/* eslint-disable import/extensions */
import './data/table/datatable'
import './jwt/index'
import mock from './mock'

/* eslint-enable import/extensions */

mock.onAny().passThrough() // forwards the matched request over network
