import { mount } from '@vue/test-utils'

it('未登入狀態應該導至 404 頁面', async () => {
  const mockRouter = {
    push: vi.fn()
  }

  const wrapper = mount(Component, {
    global: {
      mocks: {
        $router: mockRouter
      }
    }
  })

  await wrapper.find('[data-test="button"]').trigger('click')

  expect(mockRouter.push).toHaveBeenCalledTimes(1)
  expect(mockRouter.push).toHaveBeenCalledWith('/404')
})

it('已登入狀態應該導至會員頁面', async () => {
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
