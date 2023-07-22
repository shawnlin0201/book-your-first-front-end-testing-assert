import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const App = defineComponent({
  name: 'App',
  template: `
        <p data-test="target" class="text-md">Hello, Vue!</p>
    `
})

const wrapper = mount(App)
console.log(wrapper.find('[data-test="target"]').attributes('class'))
// text-md