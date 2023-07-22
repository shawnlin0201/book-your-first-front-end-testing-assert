it('ChildComponent 收到 Inject 資料時應顯示預期的內容', async () => {
  const wrapper = mount(ChildComponent, {
    global: {
      provide: {
        count: 1
      }
    }
  })

  expect(wrapper.html()).toBe(`<div>1</div>`)
})
