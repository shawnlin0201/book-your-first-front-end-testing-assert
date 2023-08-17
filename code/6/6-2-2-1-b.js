it('initialState counter count with 0', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [
        createTestingPinia({
          initialState: {
            counter: {
              count: 0
            }
          }
        })
      ]
    }
  })
  expect(wrapper.find('[data-test="count"]').text()).toBe('0')
})

it('initialState counter count with 100', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [
        createTestingPinia({
          initialState: {
            counter: {
              count: 100
            }
          }
        })
      ]
    }
  })
  expect(wrapper.find('[data-test="count"]').text()).toBe('100')
})
