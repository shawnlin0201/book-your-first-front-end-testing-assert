it('當 slot 傳入內容時', async () => {
  const wrapper = mount(component, {
    slots: {
      title: `
        <template #cat>
          介紹 {{ cat.name }}
        </template>
      `,
      body: `
        <template #cat>
          <div>喜歡吃：{{ cat.love }}</div>
          <div>不喜歡：{{ cat.hate }}</div>
        </template>
      `
    }
  })

  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<details>
      <summary> 介紹 黑黑</summary>
      <div>喜歡吃：魚乾</div>
      <div>不喜歡：黑色的線</div>
    </details>
    <details>
      <summary> 介紹 阿橘</summary>
      <div>喜歡吃：罐罐</div>
      <div>不喜歡：臭臭的東西</div>
    </details>"
  `)
})
