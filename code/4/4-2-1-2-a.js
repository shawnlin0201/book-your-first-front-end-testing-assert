import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const BaseButton = defineComponent({
  name: 'BaseButton',
  template: `
    <button><slot></slot></button>
  `
})

const BaseModal = defineComponent({
  name: 'BaseModal',
  components: {
    BaseButton
  },
  template: `
        <div>
            <BaseButton>確認</BaseButton>
        </div>
    `
})

it('使用 Component Name 載入', () => {
  const wrapper = mount(BaseModal)
  console.log(wrapper.findComponent({ name: 'BaseButton' }).html())
  // <BaseButton>確認</BaseButton>
})

it('直接引入元件', () => {
  const wrapper = mount(BaseModal)
  console.log(wrapper.findComponent(BaseButton).html())
  // <BaseButton>確認</BaseButton>
})
