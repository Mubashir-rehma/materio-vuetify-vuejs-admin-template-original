import type { PartialDeep } from 'type-fest'
import type { Email, FetchEmailsPayload } from '@/@fake-db/types'

interface State {
  emails: Email[]
  emailsMeta: {
    draft: number
    inbox: number
    spam: number
  }
}

export const useEmailStore = defineStore('email', {
  // ℹ️ arrow function recommended for full type inference
  state: (): State => ({
    emails: [],
    emailsMeta: {
      draft: 0,
      inbox: 0,
      spam: 0,
    },
  }),
  actions: {
    async fetchEmails(payload: FetchEmailsPayload) {
      const { data, error } = await useApi<any>(createUrl('/apps/email', payload))

      if (error.value) { console.log(error.value) }
      else {
        const { emails, emailsMeta } = data.value as { emails: Email[]; emailsMeta: State['emailsMeta'] }

        this.emails = emails
        this.emailsMeta = emailsMeta
      }
    },

    async updateEmails(ids: Email['id'][], data: PartialDeep<Email>) {
      await $api('apps/email', {
        method: 'POST',
        body: JSON.stringify({ ids, data }),
      })
    },

    async updateEmailLabels(ids: Email['id'][], label: Email['labels'][number]) {
      await $api('/apps/email', {
        method: 'POST',
        body: { ids, label },
      })
    },
  },
})
