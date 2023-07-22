// DOM 環境
const dom = document.body
// Vue Custom Directive
const vFocus = {
  mounted(el) {
    el.focus()
  }
}
// 測試目標
const component = defineComponent({
  name: 'BaseComponent',
  template: `
      <input data-test="target" v-focus />
    `
})
