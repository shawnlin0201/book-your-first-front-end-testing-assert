const getCurrentDate = () => {
  var date = new Date()
  var offset = new Date().getTimezoneOffset()
  date = new Date(date.getTime() - offset * 60 * 1000)

  return date.toISOString().split('T')[0]
}

describe('受測物依賴外部的資訊', () => {
  it('getCurrentDate 應該返回 yyyy-mm-dd 格式的當天日期', () => {
    const actual = getCurrentDate() // 本身會根據當前時間返回 yyyy-mm-dd 格式的日期
    const expected = '2023-07-17'

    expect(actual).toBe(expected)
    // passed (如果執行測試當天是 2023-07-17)
    // failed (除了 2023-07-17 當天以外的日期執行這段測試時都會錯誤)
  })
})
