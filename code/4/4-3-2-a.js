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
it('在一開始掛載元件時傳入 props 屬性', async () => {
  const wrapper = mount(component, {
    props: {
      text: 'Hello, Vue Test Utils!'
    }
  })

  expect(wrapper.text()).toBe('Hello, Vue Test Utils!')
  // passed
})
