import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@vue/test-utils'
import { routes } from '@/router'

let router

beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes
  })

  router.push('/')
  await router.isReady()
})

it('點擊 about 連結應該導至 about 頁面', async () => {
  const wrapper = mount(Home, {
    global: {
      plugins: [router]
    }
  })

  const push = vi.spyOn(router, 'push')
  await wrapper.find('[data-test="about"]').trigger('click')

  expect(push).toHaveBeenCalledTimes(1)
  expect(push).toHaveBeenCalledWith('/about')
})
