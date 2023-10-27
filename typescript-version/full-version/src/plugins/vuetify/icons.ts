import type { IconAliases } from 'vuetify'

const aliases: IconAliases = {
  info: 'ri-error-warning-line',
  success: 'ri-checkbox-circle-line',
  warning: 'ri-alert-line',
  error: 'ri-error-warning-line',
  calendar: 'ri-calendar-2-line',
  collapse: 'ri-arrow-up-s-line',
  complete: 'ri-check-line',
  cancel: 'ri-close-line',
  close: 'ri-close-line',
  delete: 'ri-close-line',
  clear: 'ri-close-line',
  prev: 'ri-arrow-left-s-line',
  next: 'ri-arrow-right-s-line',
  checkboxOn: 'custom-checkbox-checked',
  checkboxOff: 'custom-checkbox-unchecked',
  checkboxIndeterminate: 'custom-checkbox-indeterminate',
  delimiter: 'ri-circle-line',
  sort: 'ri-arrow-up-line',
  expand: 'ri-arrow-down-s-line',
  menu: 'ri-menu-line',
  subgroup: 'ri-arrow-down-s-fill',
  dropdown: 'ri-arrow-down-s-line',
  radioOn: 'custom-radio-checked',
  radioOff: 'custom-radio-unchecked',
  edit: 'ri-pencil-line',
  ratingEmpty: 'custom-star-empty',
  ratingFull: 'custom-star-fill',
  ratingHalf: 'custom-star-half',
  loading: 'ri-refresh-line',
  first: 'ri-skip-left-line',
  last: 'ri-skip-right-line',
  unfold: 'ri-split-cells-vertical',
  file: 'ri-attachment-2',
  plus: 'ri-add-line',
  minus: 'ri-subtract-line',
  sortAsc: 'ri-arrow-up-line',
  sortDesc: 'ri-arrow-down-line',
}

export const iconify = {
  component: (props: any) => h(
    props.tag,
    {
      ...props,
      class: [props.class, props.icon],

      // Remove used props from DOM rendering
      tag: undefined,
      icon: undefined,
    },
  ),
}

export const icons = {
  defaultSet: 'iconify',
  aliases,
  sets: {
    iconify,
  },
}
