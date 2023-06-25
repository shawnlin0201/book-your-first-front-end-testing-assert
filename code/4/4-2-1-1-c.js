import { mount } from '@vue/test-utils'

const wrapper = mount({
  template: `
    <div>
      <p>特定範圍的內容</p>
    </div>
  `
})
it('find target element', () => {
  console.log(wrapper.find('span'))
  // {}
  
  console.log(wrapper.find('span').html())
  // Error: Cannot call html on an empty Wrapper
})

it('get target element', () => {
    console.log(wrapper.get('span'))
    // Error: Cannot call html on an empty Wrapper
})
