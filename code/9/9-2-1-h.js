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
  it('should return correct text if today is 2023-08-18', () => {
    vi.setSystemTime(new Date('2023-08-18'))
    const date = getCurrentDate()
    expect(date).toBe('2023-08-18')
    
