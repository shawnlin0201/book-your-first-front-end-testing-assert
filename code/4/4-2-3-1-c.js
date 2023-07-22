import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const BaseButton = defineComponent({
  name: 'BaseButton',
  template: `
        <div @dblclick="onDBLClick">
          {{ count }}
        </div>
    `,
  data: () => ({
    count: 0,
  }),
  methods: {
    onDBLClick() {
      this.count++
    },
  }
})

it('連下兩個單擊後 count 數並不影響', async () => {
    const wrapper = mount(BaseButton)
    
    await wrapper.trigger('click')
    await wrapper.trigger('click')
    expect(wrapper.text()).toBe('0') // passed
})