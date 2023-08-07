it('透過 shallowMount 渲染元件，並且顯示 slot 中的內容', () => {
  const wrapper = shallowMount(component, {
    global: {
      renderStubDefaultSlot: true
    }
  })

  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<div>
      <child-component-stub>傳入文字</child-component-stub>
    </div>"
  `)
})
