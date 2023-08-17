import { vi, beforeEach } from 'vitest'
import { getCurrentDate } from './utils'

describe('getCurrentDate', () => {
  // use fake timers before each test
  beforeEach(() => {
    vi.useFakeTimers()
  })
  it('should return yyyy-mm-dd format
