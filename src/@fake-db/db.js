import mock from './mock'

/* eslint-disable import/extensions */
import './data/table/datatable'
/* eslint-enable import/extensions */

mock.onAny().passThrough() // forwards the matched request over network
