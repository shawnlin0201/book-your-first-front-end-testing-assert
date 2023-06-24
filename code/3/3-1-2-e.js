import { fibonacci } from '../3-1-2-a'

it('傳入任一正整數 n，應該回傳費氏數列的第 n 個數字', () => {
  expect.soft(fibonacci(1)).toBe(1)
  expect.soft(fibonacci(2)).toBe(1)
  expect.soft(fibonacci(3)).toBe(10) // 失敗，測試拋出應該為二
  expect.soft(fibonacci(4)).toBe(10) // 依然會執行，並且會標示出錯誤訊息
  expect.soft(fibonacci(5)).toBe(10) // 依然會執行，並且會標示出錯誤訊息
  expect.soft(fibonacci(6)).toBe(10) // 依然會執行，並且會標示出錯誤訊息
})