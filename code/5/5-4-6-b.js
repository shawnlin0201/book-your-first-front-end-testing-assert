it('should restore system time', () => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2022-10-13'))
  vi.useRealTimers()

  expect(new Date()).not.toEqual(new Date('2022-10-13'))
})
