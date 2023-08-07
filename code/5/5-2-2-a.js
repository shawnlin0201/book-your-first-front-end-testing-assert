import { defineComponent } from 'vue'
import { mount } from '@vue/test-utils'

const BaseButton = defineComponent({
  name: 'BaseButton',
  template: `
        <button>
          <slot />
        </button>
    `
})

const component = defineComponent({
  name: 'MainView',
  template: `
        <div data-test="target">
          <base-button>確認</base-button>
        </div>
    `,
  components: {
    BaseButton
  }
})

it('確認 MainView 元件未受到任何更動', () => {
  const wrapper = mount(component, {
    global: {
      stubs: ['BaseButton']
    }
  })

  expect(wrapper.find('[data-test="target"]').html()).toMatchInlineSnapshot(`
    "<div data-test=\\"target\\">
      <base-button-stub></base-button-stub>
    </div>"
  `)
})
