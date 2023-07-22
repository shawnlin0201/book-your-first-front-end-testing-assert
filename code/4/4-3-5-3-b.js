it('未傳入內容', async () => {
  const wrapper = mount(component)

  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<details>
      <summary>猜猜黑黑喜歡吃什麼</summary>魚乾
    </details>
    <details>
      <summary>猜猜阿橘喜歡吃什麼</summary>罐罐
    </details>"
  `)
})