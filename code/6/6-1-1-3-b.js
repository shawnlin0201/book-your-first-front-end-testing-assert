import { mount } from '@vue/test-utils'

it('未登入狀態應該導至登入頁', async () => {
  const wrapper = mount(Component, {
    global: {
      stubs: ['router-link']
    }
  })

  expect(await wrapper.find('[data-test="button"]').attributes('to')).toBe('/home')
})

it('已登入狀態應該導至文章編輯頁面', async () => {
  const mockRoute = {
    params: {
      id: 9527
    }
  }

  const wrapper = mount(Component, {
    props: {
      isAuthenticated: true
    },
    global: {
      mocks: {
        $route: mockRoute
      },
      stubs: ['router-link']
    }
  })

  expect(await wrapper.find('[data-test="button"]').attributes('to')).toBe('/posts/9527/edit')
})
