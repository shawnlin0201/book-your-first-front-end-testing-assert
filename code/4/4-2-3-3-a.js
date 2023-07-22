import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const BaseInput = defineComponent({
  name: 'BaseInput',
  template: `
        <input v-model="text" data-test="input" />
        <p data-test="content">{{ text }}</p>
    `,
  data: () => ({
    text: 0
  })
})

it('模擬 input 輸入', async () => {
  const wrapper = mount(BaseInput)
  await wrapper.find('[data-test="input"]').setValue('輸入的內容')
  expect(wrapper.find('[data-test="content"]').text()).toBe('輸入的內容')
})
