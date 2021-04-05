import { mdiArchiveOutline, mdiContentCopy, mdiHome } from '@mdi/js'

export default [
  {
    subheader: 'User Interface',
  },
  {
    icon: mdiHome,
    title: 'home',
    to: 'home',
  },
  {
    title: 'Components',
    icon: mdiArchiveOutline,
    children: [
      {
        title: 'Alert',
        to: 'components-alert',
      },
      {
        title: 'Avatar',
        to: 'components-avatar',
      },
      {
        title: 'Badge',
        to: 'components-badge',
      },
      {
        title: 'Button',
        to: 'components-button',
      },
      {
        title: 'Menu',
        to: 'components-menu',
      },
      {
        title: 'Expansion Panel',
        to: 'components-expansion-panel',
      },
      {
        title: 'List',
        to: 'components-list',
      },
      {
        title: 'Dialog',
        to: 'components-dialog',
      },
      {
        title: 'Pagination',
        to: 'components-pagination',
      },
      {
        title: 'Tabs',
        to: 'components-tabs',
      },
      {
        title: 'Tooltip',
        to: 'components-tooltip',
      },
      {
        title: 'Chip',
        to: 'components-chip',
      },
      {
        title: 'Snackbar',
        to: 'components-snackbar',
      },
      {
        title: 'Treeview',
        to: 'components-treeview',
      },
    ],
  },
  {
    title: 'Form',
    icon: mdiContentCopy,
    children: [
      {
        title: 'Autocomplete',
        to: 'form-autocomplete',
      },
      {
        title: 'Checkbox',
        to: 'form-checkbox',
      },
      {
        title: 'Combobox',
        to: 'form-combobox',
      },
      {
        title: 'File Input',
        to: 'form-file-input',
      },
      {
        title: 'Radio',
        to: 'form-radio',
      },
      {
        title: 'Range Slider',
        to: 'form-range-slider',
      },
      {
        title: 'Select',
        to: 'form-select',
      },
      {
        title: 'Slider',
        to: 'form-slider',
      },
      {
        title: 'Switch',
        to: 'form-switch',
      },
      {
        title: 'Textarea',
        to: 'form-textarea',
      },
      {
        title: 'Textfield',
        to: 'form-textfield',
      },
      {
        title: 'Form Layout',
        to: 'form-layout',
      },
      {
        title: 'Form validation',
        to: 'form-validation',
      },
    ],
  },
]
