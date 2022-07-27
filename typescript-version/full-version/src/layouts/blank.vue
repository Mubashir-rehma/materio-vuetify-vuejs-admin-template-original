<script lang="ts">
import { useDynamicVhCssProperty } from '@layouts'

export default defineComponent({
  setup() {
    // ℹ️ This is useful for calculating vh based CSS value correctly on mobile devices
    useDynamicVhCssProperty()

    const routerView = resolveComponent('router-view')

    return () => h('div', { class: 'layout-wrapper layout-blank' }, h(routerView))
  },
})
</script>

<style>
.layout-wrapper.layout-blank {
  flex-direction: column;
}
</style>
