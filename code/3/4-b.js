import { mount } from '@vue/test-utils'
import component from '../4-a.vue'

it('should show the correct text', () => {
  const wrapper = mount(component, {
    propsData: {
        msg: 'Hello, Vue!'
    }
  })
  expect(wrapper.text()).toBe('Hello, Vue!')
})
