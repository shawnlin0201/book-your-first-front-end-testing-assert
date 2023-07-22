import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const component = defineComponent({
  name: 'BaseComponent',
  template: `
      <div>{{ text }}</div>
    `,
  data: () => ({
    text: 'Hello, data!'
  }),
})

it('預設內容', async () => {
  const wrapper = mount(component)
  
  expect(wrapper.text())
    .toBe('Hello, data!')
  // passed
})
it('在一開始掛載元件時塞入 data 屬性', async () => {
  const wrapper = mount(component, {
    data() {
      return {
        text: 'Hello, Vue Test Utils!'
      }
    }
  })
  
  expect(wrapper.text())
    .toBe('Hello, Vue Test Utils!')
  // passed
})
