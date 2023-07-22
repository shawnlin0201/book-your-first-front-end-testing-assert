import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const BaseButton = defineComponent({
  name: 'BaseButton',
  template: `
        <div @click="onClick">{{ count }}</div>
    `,
  data: () => ({
    count: 0
  }),
  methods: {
    onClick() {
      this.count++
    }
  }
})

it('未點擊應顯示為 0', async () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.text()).toBe('0')
})
it('點擊後 count 數應該增加', async () => {
    const wrapper = mount(BaseButton)
    
    await wrapper.trigger('click')
    expect(wrapper.text()).toBe('1')

    await wrapper.trigger('click')
    await wrapper.trigger('click')
    expect(wrapper.text()).toBe('3')
})