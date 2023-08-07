it('透過 shallowMount 方法渲染元件', () => {
  const wrapper = shallowMount(component)

  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<div>
      <p>父層元件</p>
      <child-component-stub content=\\"被影響的子層元件\\"></child-component-stub>
      <child-component-stub content=\\"子層元件\\"></child-component-stub>
    </div>"
  `)

  expect(wrapper.findComponent('child-component-stub').attributes('content')).toBe(
    '被影響的子層元件'
  )
})
