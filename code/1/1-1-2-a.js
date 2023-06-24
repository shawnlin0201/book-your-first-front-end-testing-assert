// 引入測試工具
import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
// 引入測試檔案
import HelloWorld from '../HelloWorld.vue'

// 測試案例
it('renders correct content', () => {
  // 準備測試內容
  const wrapper = mount(HelloWorld, {
    props: { msg: 'Hello Vitest' } 
  })
  // 預期測試結果
  expect(wrapper.text()).toContain('Hello Vitest')
})
