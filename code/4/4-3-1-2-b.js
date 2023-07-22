import { mount } from '@vue/test-utils'
import { ref, nextTick } from 'vue'
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
it('後續更改 setup 屬性中的資料', async () => {
  const wrapper = mount(component)

  wrapper.vm.text2 = 'Vue Test Utils'
  await nextTick()

  expect(wrapper.text()).toBe('Hello, Vue Test Utils!')
  // 使用此方法不會覆蓋掉其他未設定的部分
  // passed
})