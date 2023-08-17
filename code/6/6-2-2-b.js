it('快速建立一個測試用的 Pinia', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [createTestingPinia()]
    }
  })
  const counter = useCounter()
  counter.increment()
  expect(counter.count).toBe(1)
})
