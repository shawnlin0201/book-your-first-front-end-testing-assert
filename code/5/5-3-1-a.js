import { mount, shallowMount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const childComponent = defineComponent({
  name: 'ChildComponent',
  template: `
      <slot>Slot Content</slot>
      <p>{{ content }}</p>
    `,
  props: {
    content: {
      type: String,
      default: '子層元件'
    }
  }
})

const component = defineComponent({
  name: 'ParentComponent',
  template: `
        <div>
          <p>父層元件</p>
          <child-component content="被影響的子層元件"/>
          <child-component />
        </div>
    `,
  components: {
    childComponent
  }
})

it('透過 mount 方法渲染元件', () => {
  const wrapper = mount(component)

  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<div>
      <p>父層元件</p>Slot Content<p>被影響的子層元件</p>Slot Content<p>子層元件</p>
    </div>"
  `)
})
