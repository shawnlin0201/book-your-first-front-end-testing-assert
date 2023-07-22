import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const component = defineComponent({
  name: 'BaseComponent',
  template: `
        <input
            data-test="radio_1"
            type="radio"
            v-model="radioResult"
            value="1"
        />
        <input
            data-test="radio_2"
            type="radio"
            v-model="radioResult"
            value="2"
        />
        <p data-test="result">{{ radioResult }}</p>
    `,
  data: () => ({
    radioResult: 0
  })
})

it('模擬 radio 勾選行為', async () => {
  const wrapper = mount(component)
  
  await wrapper.find('[data-test="radio_1"]')
    .setValue(true)
  expect(wrapper.find('[data-test="result"]').text())
    .toEqual('1') // passed
  
  await wrapper.find('[data-test="radio_2"]')
    .setValue(true)
  expect(wrapper.find('[data-test="result"]').text())
    .toEqual('2') // passed
})
