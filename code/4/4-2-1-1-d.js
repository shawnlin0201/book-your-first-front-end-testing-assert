import { mount } from '@vue/test-utils'

const wrapper = mount({
  template: `<div></div>`
})

it('錯誤地使用 find 方法判斷預期找不到某元素', () => {
  expect(wrapper.find('span')).toBeFalsy()
  // 測試案例 Failed
  // 因為 find 方法找不到元素時會回傳一個 ErrorWrapper
  // 而經由布林值轉換後反而會變成是 true
})
it('正確使用 find 方法判斷預期找不到某元素', () => {
  expect(wrapper.find('span').exists()).toBeFalsy()
})

it('正確使用 get 方法判斷預期找不到某元素', () => {
  expect(() => wrapper.get('span')).toThrowError()
})
