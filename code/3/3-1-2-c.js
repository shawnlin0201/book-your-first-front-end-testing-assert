import { fibonacci } from '../3-1-2-a'

describe('fibonacci', () => {
  it('第零項應該為 1', () => {
    expect(fibonacci(0)).toBe(0)
  })

  it('負數項應該為 0', () => {
    expect(fibonacci(-1)).toBe(0)
    expect(fibonacci(-10)).toBe(0)
  })

  it('傳入任一正整數 n，應該回傳費氏數列的第 n 個數字', () => {
    expect(fibonacci(1)).toBe(1)
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(4)).toBe(3)
    expect(fibonacci(5)).toBe(5)
    expect(fibonacci(6)).toBe(8)
    // ... 其他斷言
  })
})