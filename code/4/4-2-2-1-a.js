import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'


const App = defineComponent({
  name: 'App',
  template: `
        <div>
        <a data-test="link" href="https://ithelp.ithome.com.tw/" target="_blank">ithelp</a>
        </div>
    `
})


const wrapper = mount(App)
console.log(wrapper.find('[data-test="link"]').attributes())
/*
{
  'data-test': 'link',
  href: 'https://ithelp.ithome.com.tw/',
  target: '_blank'
}
*/