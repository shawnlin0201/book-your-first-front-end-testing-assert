import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const component = defineComponent({
  name: 'BaseComponent',
  template: `
      <div>{{ text }}, {{ text2 }}!</div>
    `,
  data: () => ({
    text: 'Hello',
    text2: 'data',
  }),
})

it('預設內容', async () => {
  const wrapper = mount(component)
  
  expect(wrapper.text())
    .toBe('Hello, data!')
  // passed
})
it('後續使用 setData 更改 data 屬性中的資料', async () => {
  const wrapper = mount(component)
  
  await wrapper.setData({
    text2: 'Vue Test Utils'
  })

  expect(wrapper.text())
    .toBe('Hello, Vue Test Utils!')
  // passed
})
