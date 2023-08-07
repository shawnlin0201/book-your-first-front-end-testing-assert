it('在使用者登入狀況下應該導向 member 頁面', async () => {
  const mockRouter = {
    push: vi.fn()
  }
  const wrapper = mount(Component, {
    props: {
      isAuthenticated: true
    },
    global: {
      mocks: {
        $router: mockRouter
      }
    }
  })
  await wrapper.find('[data-test="button"]').trigger('click')

  expect(mockRouter.push).toHaveBeenCalledTimes(1)
  expect(mockRouter.push).toHaveBeenCalledWith('/member')
})
