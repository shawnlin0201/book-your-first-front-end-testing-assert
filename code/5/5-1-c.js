import { vi, beforeEach } from 'vitest'

const getCurrentDate = () => {
  var date = new Date()
  var offset = new Date().getTimezoneOffset()
  date = new Date(date.getTime() - offset * 60 * 1000)

  return date.toISOString().split('T')[0]
}

describe('受測物依賴外部的資訊', () => {
  beforeEach(() => {
    vi.useFakeTimers() // 準備模擬日期的方法
  })
  it('getCurrentDate 應該返回 yyyy-mm-dd 格式的當天日期', () => {
    vi.setSystemTime(new Date(1990, 0, 1)) // 模擬當前時間為 1990 年 1 月 1 日

    const actual = getCurrentDate()
    const expected = '1990-01-01'

    expect(actual).toBe(expected)
    // passed 不論在哪天執行這段測試都會通過了
  })
  it('getCurrentDate 應該返回 yyyy-mm-dd 格式的當天日期', () => {
    vi.setSystemTime(new Date(2023, 6, 17)) // 模擬當前時間為 2023 年 7 月 17 日

    const actual = getCurrentDate()
    const expected = '2023-07-17'

    expect(actual).toBe(expected)
    // passed 不論在哪天執行這段測試都會通過了
  })
})
