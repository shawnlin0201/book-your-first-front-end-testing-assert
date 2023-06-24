// 引入受測函式
import add from '../add'

// 測試情境（Test Suite）
describe('add', () => {
  // 測試案例（Test Case）
  it('1 + 2 should be 3', () => {
    // 斷言（Assertion）
    expect(add(1, 2)).toBe(3)
  })
})