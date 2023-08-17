import { vi, beforeEach } from 'vitest'
import { getCurrentDate } from './utils'

describe('getCurrentDate', () => {
  // use fake timers before each test
  beforeEach(() => {
    vi.useFakeTimers()
  })
  it('should return yyyy-mm-dd format of today', () => {
    const date = getCurrentDate()
    expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })
  


