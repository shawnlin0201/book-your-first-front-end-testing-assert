import { mount } from '@vue/test-utils'

it('find target element', () => {
  const wrapper = mount({
    template: `
      <div>
        <p>特定範圍的內容</p>
      </div>
    `
  })
  /* 取得元件 HTML 資訊 */
  console.log(wrapper.html())
  // <div>
  //   <p>特定範圍的內容</p>
  // </div>

  /* 取得元件尋找特定範圍後再取得 HTML 資訊 */
  console.log(wrapper.find('p').html())
  // <p>第一段內容</p>
})
