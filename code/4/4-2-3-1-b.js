import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const BaseButton = defineComponent({
  name: 'BaseButton',
  template: `
        <div @click="onClick">
          {{ count }}
        </div>
    `,
  data: () => ({
    count: 0,
  }),
  methods: {
    onClick() {
      this.count++
    },
  }
})

it('雙擊後 count 數並不影響', async () => {
    const wrapper = mount(BaseButton)
    
    await wrapper.trigger('dblclick')
    expect(wrapper.text()).toBe('0') // passed

    await wrapper.trigger('dblclick')
    await wrapper.trigger('dblclick')
    expect(wrapper.text()).toBe('0') // passed
})