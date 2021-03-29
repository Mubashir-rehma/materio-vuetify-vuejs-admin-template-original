const formTables = [
  {
    path: '/form/autocomplete',
    name: 'form-autocomplete',
    component: () => import('@/views/form/autocomplete/Autocomplete.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/checkbox',
    name: 'form-checkbox',
    component: () => import('@/views/form/checkbox/Checkbox.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/combobox',
    name: 'form-combobox',
    component: () => import('@/views/form/combobox/Combobox.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/file-input',
    name: 'form-file-input',
    component: () => import('@/views/form/file-input/FileInput.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/radio',
    name: 'form-radio',
    component: () => import('@/views/form/radio/Radio.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/range-slider',
    name: 'form-range-slider',
    component: () => import('@/views/form/range-slider/RangeSlider.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/select',
    name: 'form-select',
    component: () => import('@/views/form/select/Select.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/slider',
    name: 'form-slider',
    component: () => import('@/views/form/slider/Slider.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/switch',
    name: 'form-switch',
    component: () => import('@/views/form/switch/Switch.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/textarea',
    name: 'form-textarea',
    component: () => import('@/views/form/textarea/Textarea.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default formTables
