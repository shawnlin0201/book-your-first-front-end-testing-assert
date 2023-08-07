import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { defineStore } from 'pinia'
import { ref, defineComponent } from 'vue'

const useCounter = defineStore('counter', () => {
  const count = ref(0)
  const increment = () => count.value++

  return {
    count,
    increment
  }
})

const App = defineComponent({
  name: 'HomePage',
  template: `
      <div>
        <button data-test="add_button" @click="counter.increment">add</button>
        <p data-test="count">{{ counter.count }}</p>
      </div>
    `,
  setup() {
    const counter = useCounter()
    return {
      counter
    }
  }
})

it('should increment', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [
        createTestingPinia({
          stubActions: false
        })
      ]
    }
  })
  await wrapper.find('[data-test="add_button"]').trigger('click')

  expect(wrapper.find('[data-test="count"]').text()).toBe('1')
})
