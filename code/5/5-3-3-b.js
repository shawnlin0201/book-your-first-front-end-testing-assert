const StubComponent = defineComponent({
  name: 'StubComponent',
  template: `
        <p>stub component</p>
    `
})

it('透過 global stubs 強迫指定元件渲染成特定樣子', () => {
  const wrapper = shallowMount(component, {
    global: {
      stubs: {
        ChildComponent: StubComponent
      }
    }
  })

  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<div>
      <p>stub component</p>
    </div>"
  `)
})
