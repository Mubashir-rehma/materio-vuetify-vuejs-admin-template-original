<script lang="ts">
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
