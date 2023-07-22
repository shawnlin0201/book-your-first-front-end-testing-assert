it('按下 enter 後 count 數應該增加', async () => {
  const wrapper = mount(BaseButton)
  await wrapper.trigger('keydown', { key: 'enter'})
  expect(wrapper.text()).toBe('1')
})