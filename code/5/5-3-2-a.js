import { shallowMount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const ChildComponent = defineComponent({
  name: 'Child-Component',
  template: `
        <div>
          <slot>預設文字</slot>
        </div>
    `
})
const component = defineComponent({
  name: 'ParentComponent',
  template: `
        <div>
          <child-component>傳入文字</child-component>
        </div>
    `,
  components: {
    ChildComponent
  }
})

it('透過 shallowMount 渲染元件', () => {
  const wrapper = shallowMount(component)

  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<div>
      <child-component-stub></child-component-stub>
    </div>"
  `)
})
