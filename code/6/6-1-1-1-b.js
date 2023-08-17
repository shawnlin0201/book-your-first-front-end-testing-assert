import { mount } from '@vue/test-utils'

it('未登入狀態應該導至登入頁', async () => {
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
  expect(mockRouter.push).toHaveBeenCalledWith('/login')
})

it('已登入狀態應該導至文章編輯頁面', async () => {
  const mockRoute = {
    params: {
      id: 9527
    }
  }
  const mockRouter = {
    push: vi.fn()
  }

  const wrapper = mount(Component, {
    props: {
      isAuthenticated: true
    },
    global: {
      mocks: {
        $route: mockRoute,
        $router: mockRouter
      }
    }
  })

  await wrapper.find('[data-test="button"]').trigger('click')

  expect(mockRouter.push).toHaveBeenCalledTimes(1)
  expect(mockRouter.push).toHaveBeenCalledWith('/posts/9527/edit')
})
