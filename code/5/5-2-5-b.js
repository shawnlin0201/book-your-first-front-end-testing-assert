import { vi, beforeEach } from 'vitest'

const getCurrentDate = () => {
  var date = new Date()
  var offset = new Date().getTimezoneOffset()
  date = new Date(date.getTime() - offset * 60 * 1000)

  return date.toISOString().split('T')[0]
}

describe('受測物依賴外部的資訊', () => {
  beforeEach(() => {
    vi.useFakeTimers() // 每個測試案例節過前，將測試環境中的時間改為模擬的時間
  })
  afterEach(() => {
    vi.useRealTimers() // 每個測試案例節過後，將測試環境中的時間改回真實的時間
  })
  it('getCurrentDate 應該返回 yyyy-mm-dd 格式的當天日期', () => {
    vi.setSystemTime(new Date(1990, 0, 1)) // 模擬當前時間為 1990 年 1 月 1 日

    const actual = getCurrentDate()
    const expected = '1990-01-01'

    expect(actual).toBe(expected)
    // passed 不論在哪天執行這段測試都會通過了
  })
})
