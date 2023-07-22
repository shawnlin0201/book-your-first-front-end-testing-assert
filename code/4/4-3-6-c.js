it('當元素使用 v-focus 指令後，載入頁面完成時應該為當下的聚焦元素', 
  () => {
  const wrapper = mount(component, {
    attachTo: dom,
    global: {
      directives: {
        Focus: vFocus
      }
    }
  })

  console.log(dom.innerHTML)
  // <div data-v-app=""><input data-test="target"></div>

  expect(wrapper.find('[data-test="target"]').element)
    .toBe(document.activeElement)
})