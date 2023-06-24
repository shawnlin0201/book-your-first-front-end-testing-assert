import { describe, it, expect } from 'vitest'

const add = (a, b) => a + b

describe('Add Function', () => {
  it('1 + 1 = 2', () => {
    expect(add(1, 1)).toBe(2)
  })
  it('1 + 2 = 3', () => {
    expect(add(1, 2)).toBe(3)
  })
})