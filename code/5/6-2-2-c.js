/* 社交型測試 */
it('點擊按鈕後應該目標元素應顯示正確的數值', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [
        createTestingPinia({
          // 若要採用社交型測試則必須設置 stubActions 屬性為 false
          stubActions: false
        })
      ]
    }
  })
  const counter = useCounter()
  await wrapper.find('[data-test="add_button"]').trigger('click')

  // 社交型測試風格的斷言方式
  expect(wrapper.find('[data-test="count"]').text()).toBe('1')
  // 孤立型測試風格的斷言方式
  expect(counter.increment).toHaveBeenCalled()
})

/* 孤立型型測試 */
it('點擊按鈕後應該會觸發 store 中的 increment 方法', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [createTestingPinia()]
    }
  })
  const counter = useCounter()
  await wrapper.find('[data-test="add_button"]').trigger('click')

  // 孤立型測試風格的斷言方式
  expect(counter.increment).toHaveBeenCalled()
})
