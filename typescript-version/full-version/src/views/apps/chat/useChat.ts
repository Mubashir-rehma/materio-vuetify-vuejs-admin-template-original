import type { Chat, ChatContact, ChatStatus } from '@db-types/apps/chat/type'

export type ActiveChat = {
  chat?: Chat
  contact: ChatContact
} | null

export const useChat = () => {
  const resolveAvatarBadgeVariant = (status: ChatStatus) => {
    if (status === 'online')
      return 'success'
    if (status === 'busy')
      return 'error'
    if (status === 'away')
      return 'warning'

    return 'secondary'
  }

  return {
    resolveAvatarBadgeVariant,
  }
}
