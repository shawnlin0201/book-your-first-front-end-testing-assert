import { mount } from '@vue/test-utils'
import { defineComponent, nextTick } from 'vue'

const component = defineComponent({
  name: 'BaseComponent',
  template: `
      <div>{{ text }}</div>
    `,
  data: () => ({
    text: ''
  }),
  created() {
    this.text= 'Created!'
  },
  mounted() {
    this.text = 'Mounted!'
  }
})

it('元件本身在 Vue 生命週期的 created 階段設置 data', async () => {
  const wrapper = mount(component)
  
  expect(wrapper.text())
    .toBe('Created!')
  // passed
})
it('元件本身在 Vue 生命週期的 mounted 階段設置 data', async () => {
  const wrapper = mount(component)

  await nextTick()

  expect(wrapper.text())
    .toBe('Mounted!')
  // passed
})
