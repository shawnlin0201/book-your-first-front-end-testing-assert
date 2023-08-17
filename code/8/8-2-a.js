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

  expect(wrapper.html()).toMatchInlineSnapshot(`
  ...幾百行的 HTML 略...
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

  expect(wrapper.html()).toMatchInlineSnapshot(`
  ...幾百行的 HTML 略...
`)
})
