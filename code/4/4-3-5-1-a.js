import { mount } from '@vue/test-utils'
import { expect } from 'vitest'
import { defineComponent } from 'vue'

const component = defineComponent({
  name: 'BaseComponent',
  template: `
     <div>
       <slot></slot>
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
      default: '<p>Hello, Slot!</p>'
    }
  })

  expect(wrapper.html()).toMatchInlineSnapshot(`
   "<div>
     <p>Hello, Slot!</p>
   </div>"
 `)
})
