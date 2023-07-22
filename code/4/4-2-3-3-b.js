import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const BaseInput = defineComponent({
  name: 'BaseInput',
  template: `
        <input v-model="text" data-test="input" type="date" />
        <p data-test="content">{{ text }}</p>
    `,
  data: () => ({
    text: 0,
  }),
})

it('模擬 input 輸入', async () => {
    const wrapper = mount(BaseInput)    
    await wrapper
        .find('[data-test="input"]')
        .setValue('2077') // 應該要是 yyyy-mm-dd 等日期格式
    expect(wrapper.find('[data-test="content"]').text())
        .toBe('2077')
    // failed，因為 setValue 資料格式錯誤，所以 text 值反而變成空字串
})