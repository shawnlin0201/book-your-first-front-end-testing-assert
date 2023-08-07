import { mount } from '@vue/test-utils'
import { useRoute, useRouter } from 'vue-router'

vi.mock('vue-router', () => {
  return {
    useRoute: vi.fn(),
    useRouter: vi.fn(() => ({
      push: () => {}
    }))
  }
})

it('未登入狀態應該導至首頁', async () => {
  const push = vi.fn()
  useRouter.mockImplementationOnce(() => ({
    push
  }))

  const wrapper = mount(Component)

  await wrapper.find('[data-test="button"]').trigger('click')

  expect(push).toHaveBeenCalledTimes(1)
  expect(push).toHaveBeenCalledWith('/home')
})

it('已登入狀態應該導至文章編輯頁', async () => {
  useRoute.mockImplementationOnce(() => ({
    params: {
      id: 9527
    }
  }))

  const push = vi.fn()
  useRouter.mockImplementationOnce(() => ({
    push
  }))

  const wrapper = mount(Component, {
    props: {
      isAuthenticated: true
    }
  })

  await wrapper.find('[data-test="button"]').trigger('click')

  expect(push).toHaveBeenCalledTimes(1)
  expect(push).toHaveBeenCalledWith('/posts/9527/edit')
})
