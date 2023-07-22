import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const BaseTag = defineComponent({
  name: 'BaseTag',
  template: `
      <p>{{ text }}</p>
    `,
  props: {
    text: {
      type: String,
      default: ''
    }
  }
})

const component = defineComponent({
  name: 'BaseComponent',
  template: `
      <BaseTag :text="text"/>
    `,
  components: {
    BaseTag
  },
  data: () => ({
    text: 'Hello, Tag!'
  }),
})

it('檢查傳入目標的 props 內容是否正確', async () => {
  const wrapper = mount(component)
  const target = wrapper.getComponent({name: 'BaseTag'})

  expect(target.props()).toEqual({
    text: 'Hello, Tag!'
  })
  expect(target.props('text')).toBe('Hello, Tag!')
  // passed
})
