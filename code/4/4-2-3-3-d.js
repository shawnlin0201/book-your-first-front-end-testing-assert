import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const component = defineComponent({
  name: 'BaseComponent',
  template: `
        <input
            data-test="checkbox_1"
            type="checkbox"
            v-model="checkboxResult"
            value="1"
        />
        <input
            data-test="checkbox_2"
            type="checkbox"
            v-model="checkboxResult"
            value="2"
        />
        <p data-test="result">
          {{ checkboxResult.join(',') }}
        </p>
    `,
  data: () => ({
    checkboxResult: []
  })
})

it('模擬 checkbox 勾選行為', async () => {
  const wrapper = mount(component)
  
  await wrapper.find('[data-test="checkbox_1"]')
    .setValue(true)
  expect(wrapper.find('[data-test="result"]').text())
    .toEqual('1') // passed
  
  await wrapper.find('[data-test="checkbox_2"]')
    .setValue(true)
  expect(wrapper.find('[data-test="result"]').text())
    .toEqual('1,2') // passed
})
