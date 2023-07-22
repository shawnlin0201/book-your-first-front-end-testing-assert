import { mount } from '@vue/test-utils'
import { defineComponent, nextTick, onMounted, ref } from 'vue'

const component = defineComponent({
  name: 'BaseComponent',
  template: `
      <div>{{ text }}</div>
    `,
  setup(){
    const text = ref('Created!')
  
    onMounted(() => {
      text.value = 'Mounted!'
    })

    return {
      text
    }
  },
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
