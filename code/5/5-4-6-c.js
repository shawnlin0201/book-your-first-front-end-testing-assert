const formatDateTime = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${month}-${day}`
}

describe('測試 formatDateTimer 方法', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })
  it('should mock system time', () => {
    vi.setSystemTime(new Date('2022-10-13'))
    expect(new Date()).toEqual(new Date('2022-10-13'))
  })

  it('...', () => {
    // 在其他測試案例中，若沒調用 vi.setSystemTime()，則會使用預設的系統時間
  })
})
