
it('傳入 isShow 為 true 時，應該要能顯示元件', async () => {
  const wrapper = mount(component, {
    props: {
      isShow: true,
      ...dummyProps
    }
  })
  const modal = await wrapper.find('[data-test="modal"]')
  expect(modal.isVisible()).toBe(true)
})
it('傳入 isShow 為 false 時，應該要能顯示元件', async () => {
  const wrapper = mount(component, {
    props: {
      isShow: false,
      ...dummyProps
    }
  })
  const modal = await wrapper.find('[data-test="modal"]')
  expect(modal.isVisible()).toBe(false)
})
