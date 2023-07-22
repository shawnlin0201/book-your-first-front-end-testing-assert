import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const component = defineComponent({
  name: 'BaseComponent',
  template: `
      <div>{{ text }}</div>
    `,
  props: {
    text: {
      type: String,
      default: 'Hello, Props!'
    }
  }
})

it('預設 Props', async () => {
  const wrapper = mount(component)

  expect(wrapper.text()).toBe('Hello, Props!')
  // passed
})
it('掛載元件後才傳入 props', async () => {
  const wrapper = mount(component)

  await wrapper.setProps({
    text: 'Hello, Vue Test Utils!'
  })

  expect(wrapper.text()).toBe('Hello, Vue Test Utils!')
  // passed
})
