import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import { defineComponent } from 'vue'

const component = defineComponent({
  name: 'BaseComponent',
  template: `
      <div>{{ text }}, {{ text2 }}!</div>
    `,
  setup() {
    const text = ref('Hello')
    const text2 = ref('Setup')
    return {
      text,
      text2
    }
  }
})

it('預設內容', async () => {
  const wrapper = mount(component)

  expect(wrapper.text()).toBe('Hello, Setup!')
  // passed
})
it('在一開始掛載元件時塞入 setup 屬性', async () => {
  const wrapper = mount(component, {
    setup() {
      return {
        // text: 'Hello', 如果不設定 text，將會使其變成 not defined
        text2: 'Vue Test Utils'
      }
    }
  })

  expect(wrapper.text()).not.toBe('Hello, Vue Test Utils!')
  expect(wrapper.text()).toBe(', Vue Test Utils!')
  // passed
})
