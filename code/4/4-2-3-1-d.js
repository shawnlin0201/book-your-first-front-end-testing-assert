import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const MenuButton = defineComponent({
  name: 'BaseButton',
  template: `
        <div data-test="button" @click.right="openMenu"></div>
        <ul v-if="isMenuOpen" data-test="menu">
          <li>...</li>
          <li>...</li>
        </ul>
    `,
  data: () => ({
    isMenuOpen: 0,
  }),
  methods: {
    openMenu() {
      this.isMenuOpen = true
    },
  }
})

it('預設 Menu 選單應該不顯示', async () => {
    const wrapper = mount(MenuButton)    
    expect(wrapper.find('[data-test="menu"]').exists()).toBe(false)
})
it('右鍵點擊 MenuButton 後應該開啟 Menu 選單', async () => {
    const wrapper = mount(MenuButton)    
    await wrapper.find('[data-test="button"]').trigger('click.right')
    expect(wrapper.find('[data-test="menu"]').exists()).toBe(true)
})