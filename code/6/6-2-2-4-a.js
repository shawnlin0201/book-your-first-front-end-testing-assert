import { myPlugin } from './stores/plugins'
const wrapper = mount(component, {
  global: {
    plugins: [
      createTestingPinia({
        plugins: [myPlugin]
      })
    ]
  }
})
