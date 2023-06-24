import { fibonacci } from '../3-1-2-a'

it('傳入任一正整數 n，應該回傳費氏數列的第 n 個數字', () => {
  expect(fibonacci(1)).toBe(1)
  expect(fibonacci(2)).toBe(1)
  expect(fibonacci(3)).toBe(3) // 失敗，測試拋出應該為二
  expect(fibonacci(4)).toBe(3) // 不會執行，因為此測試案例已經失敗
  expect(fibonacci(5)).toBe(5) // 不會執行，因為此測試案例已經失敗
  expect(fibonacci(6)).toBe(8) // 不會執行，因為此測試案例已經失敗
})