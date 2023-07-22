import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const component = defineComponent({
  name: 'BaseComponent',
  template: `
        <select data-test="target" v-model="result">
            <option value="橘橘">橘橘</option>
            <option value="黑黑">黑黑</option>
        </select>
        <p data-test="result">{{ result }}</p>
    `,
  data: () => ({
    result: ''
  })
})

it('模擬 select 選擇行為', async () => {
  const wrapper = mount(component)
  await wrapper.find('[data-test="target"]').setValue('橘橘')
  expect(wrapper.find('[data-test="result"]').text()).toEqual('橘橘')
  await wrapper.find('[data-test="target"]').setValue('黑黑')
  expect(wrapper.find('[data-test="result"]').text()).toEqual('黑黑')
})
