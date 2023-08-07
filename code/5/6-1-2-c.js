import { flushPromises, mount } from '@vue/test-utils'
import { beforeEach } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

beforeEach(async () => {
  router.push('/')
  await router.isReady()
})
it('初始狀態應該停留在首頁畫面', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  })

  const page = wrapper.find('[data-test="container"]')
  expect(page.html()).toMatchInlineSnapshot(`
    "<div data-test=\\"container\\">首頁</div>"
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

  const page = wrapper.find('[data-test="container"]')
  expect(page.html()).toMatchInlineSnapshot(`
    "<div data-test=\\"container\\">關於我</div>"
  `)
})
