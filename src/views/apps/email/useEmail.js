import { mdiAlertOctagonOutline, mdiSquareEditOutline, mdiTrashCanOutline } from '@mdi/js'

export default function useEmail() {
  const resolveLabelColor = label => {
    if (label === 'personal') return 'success'
    if (label === 'company') return 'primary'
    if (label === 'important') return 'warning'
    if (label === 'private') return 'error'

    return 'secondary'
  }

  const moveToFolderMenuListItems = [
    { title: 'Draft', value: 'draft', icon: mdiSquareEditOutline },
    { title: 'Spam', value: 'spam', icon: mdiAlertOctagonOutline },
    { title: 'Trash', value: 'trash', icon: mdiTrashCanOutline },
  ]

  const updateLabelMenuListItems = [
    { title: 'Personal', value: 'personal', color: 'success' },
    { title: 'Company', value: 'company', color: 'primary' },
    { title: 'Important', value: 'important', color: 'warning' },
    { title: 'Private', value: 'private', color: 'error' },
  ]

  return {
    resolveLabelColor,

    // Selected Mail Actions Menu List Item
    moveToFolderMenuListItems,
    updateLabelMenuListItems,
  }
}
