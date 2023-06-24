import { fibonacci } from '../3-1-2-a'

describe('fibonacci', () => {
  it('第零項應該為 1', () => {
    expect(fibonacci(0)).toBe(0)
  })
  it('第一項應該為 1', () => {
    expect(fibonacci(1)).toBe(1)
  })
  it('第二項應該為 1', () => {
    expect(fibonacci(2)).toBe(1)
  })
  it('第三項應該為 2', () => {
    expect(fibonacci(3)).toBe(2)
  })
  // ... 其他測試案例    
})
