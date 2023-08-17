const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

beforeEach(async () => {
  router.push('/shopping/cart')
  await router.isReady()
})
describe('在使用者登入的狀況下', () => {
  it('進入購物車頁面，商品應顯示對應數量', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [
          router,
          createTestingPinia({
            initialState: {
              user: {
                isAuthenticated: true
              }
            }
          })
        ]
      }
    })

    expect(wrapper.find('[data-test="count"]').text()).toBe('0')
  })
  it('進入購物車頁面點擊增加商品數量，原先若為 1 則該商品數量應該增加為 2', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [
          router,
          createTestingPinia({
            initialState: {
              user: {
                isAuthenticated: true
              }
            }
          })
        ]
      }
    })

    await wrapper.find('[data-test="add_cart"]').trigger('click')

    expect(wrapper.find('[data-test="count"]').text()).toBe('2')
  })
})
