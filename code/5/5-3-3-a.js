import { shallowMount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const ChildComponent = defineComponent({
  name: 'ChildComponent',
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

it('透過 global stubs 強迫指定元件渲染成特定樣子', () => {
  const wrapper = shallowMount(component, {
    global: {
      stubs: {
        ChildComponent: {
          name: 'StubComponent',
          template: '<p>custom content</p>'
        }
      }
    }
  })

  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<div>
      <p>custom content</p>
    </div>"
  `)
})
