beforeEach(async () => {
  // 共同的準備階段
  router.push('/')
  await router.isReady()
})
afterEach(() => {
  // 共同的清楚（還原）階段...
})

it('初始狀態應該停留在首頁畫面', async () => {
  // 準備 Arrange
  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  })

  // 操作 Act

  // 斷言 Assert
  const page = wrapper.find('[data-test="container"]')
  expect(page.html()).toMatchInlineSnapshot(`
      "<div data-test=\\"container\\">首頁</div>"
    `)
})
it('點擊關於按鈕後應該導入關於頁', async () => {
  // 準備 Arrange
  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  })

  // 操作 Act
  await wrapper.find('[data-test="about_button"]').trigger('click')
  await flushPromises()

  // 斷言 Assert
  const page = wrapper.find('[data-test="container"]')
  expect(page.html()).toMatchInlineSnapshot(`
      "<div data-test=\\"container\\">關於我</div>"
    `)
})
