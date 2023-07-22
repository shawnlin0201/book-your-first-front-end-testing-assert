import { mount } from '@vue/test-utils'
import { expect } from 'vitest'
import { defineComponent } from 'vue'

const component = defineComponent({
  name: 'BaseComponent',
  template: `
      <div>
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    `
})

it('未傳入內容', async () => {
  const wrapper = mount(component)

  expect(wrapper.html()).toBe('<div></div>')
})
it('當 slot 傳入內容時', async () => {
  const wrapper = mount(component, {
    slots: {
      header: '貓咪諺語：',
      body: '十隻橘貓九隻胖，',
      footer: '剩下一隻超級胖',
    }
  })

  expect(wrapper.html()).toMatchInlineSnapshot(
    '"<div>貓咪諺語：十隻橘貓九隻胖，剩下一隻超級胖</div>"'
  )
})
