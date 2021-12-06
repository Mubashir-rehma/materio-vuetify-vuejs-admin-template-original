import { defineNuxtModule } from '@nuxt/kit'
import { join } from 'path'

export default defineNuxtModule({
  hooks: {
    'components:dirs': function(dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: join(__dirname, 'components'),
        prefix: '',
      })
    },
  },
})
