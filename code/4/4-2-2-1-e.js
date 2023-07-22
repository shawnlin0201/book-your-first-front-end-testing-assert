import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const BaseCard = defineComponent({
  name: 'App',
  template: `
        <p class="text-md">Hello, Vue!</p>
    `
})
const App = defineComponent({
  name: 'App',
  components: {
    BaseCard
  },
  template: `
        <div>
            <BaseCard />
            <BaseCard />
            <BaseCard />
        </div>
    `
})

const wrapper = mount(App)
console.log(wrapper.html())
/*
<div>
  <p class="text-md">Hello, Vue!</p>
  <p class="text-md">Hello, Vue!</p>
  <p class="text-md">Hello, Vue!</p>
</div>
*/
console.log(wrapper.text())
// Hello, Vue!Hello, Vue!Hello, Vue!