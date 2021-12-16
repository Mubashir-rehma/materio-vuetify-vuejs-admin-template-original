<script lang="ts">

// TODO: Remove this import once this pr is merged: https://github.com/antfu/unplugin-auto-import/pull/94
import { resolveComponent } from 'vue'

export default defineComponent({
  render() {
    const routerView = resolveComponent('router-view')

    return h('div', { class: 'layout-wrapper layout-blank' }, h(routerView))
  },
})
</script>

<style>
.layout-wrapper.layout-blank {
  flex-direction: column;
}
</style>
