// eslint-disable-next-line object-curly-newline
import { getCurrentInstance, reactive, toRefs, watch } from '@vue/composition-api'

export const isObject = obj => typeof obj === 'object' && obj !== null

export const getVuetify = () => {
  const ins = getCurrentInstance()?.proxy

  return ins && ins.$vuetify ? ins.$vuetify : null
}

// Thanks: https://medium.com/better-programming/reactive-vue-routes-with-the-composition-api-18c1abd878d1
export const useRouter = () => {
  const vm = getCurrentInstance().proxy

  const state = reactive({
    route: vm.$route,
  })

  watch(
    () => vm.$route,
    r => {
      state.route = r
    },
  )

  return { ...toRefs(state), router: vm.$router }
}
