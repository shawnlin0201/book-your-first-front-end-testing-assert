beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2022-10-13'))
})
afterEach(() => {
  vi.useRealTimers()
})
it('透過 getMockedSystemTime 取得當下模擬時間', () => {
  expect(vi.getMockedSystemTime()).toEqual(new Date('2022-10-13'))
})

it('透過 getMockedSystemTime 取得當下真實時間', () => {
  // 假設當下時間為 2023-08-04
  expect(vi.getRealSystemTime()).not.toEqual(new Date('2023-08-04'))
})
