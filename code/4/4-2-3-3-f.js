import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const component = defineComponent({
  name: 'BaseComponent',
  template: `
        <select data-test="target" v-model="result" multiple>
            <option value="橘橘">橘橘</option>
            <option value="黑黑">黑黑</option>
        </select>
    `,
  data: () => ({
    result: []
  })
})

it('模擬 select 單/多選行為', async () => {
  const wrapper = mount(component)
  await wrapper.find('[data-test="target"]')
    .setValue('橘橘')
  // wrapper.vm.result = ['橘橘']
  
  await wrapper.find('[data-test="target"]')
    .setValue('黑黑')
  // wrapper.vm.result = ['黑黑']
  
  await wrapper.find('[data-test="target"]')
    .setValue(['橘橘', '黑黑'])
  // wrapper.vm.result = ['橘橘', '黑黑']
})
