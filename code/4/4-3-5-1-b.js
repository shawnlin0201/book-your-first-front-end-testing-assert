it('當 slot 傳入內容時', async () => {
  const wrapper = mount(component, {
    slots: {
      // 方法一
      default: '<div>Hello, Slot!</div>',
      // 方法二
      default: h('div', 'Hello, Slot!'),
      // 方法三
      default: { template: '<div>Hello, Slot!</div>' },
      // 方法四
      default: Component,
    }
  })

  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<div>
      <p>Hello, Slot!</p>
    </div>"
  `)
})
