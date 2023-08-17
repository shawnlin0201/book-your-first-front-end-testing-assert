beforeEach(async () => {
  // 共同的準備階段
  router.push('/')
  await router.isReady()
})

it('初始狀態應該停留在首頁畫面', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  })

  // 選取特定的識別元素
  const page = wrapper.find('[data-test="title"]')
  expect(page.html()).toMatchInlineSnapshot(`
    "<div data-test=\\"title\\">首頁</div>"
  `)
})
it('點擊關於按鈕後應該導入關於頁', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  })

  await wrapper.find('[data-test="about_button"]').trigger('click')
  await flushPromises()

  // 選取特定的識別元素
  const page = wrapper.find('[data-test="title"]')
  expect(page.html()).toMatchInlineSnapshot(`
  "<div data-test=\\"title\\">關於我</div>"
`)
})
