it('should mock system time', () => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2023-08-03'))

  expect(new Date()).toEqual(new Date('2023-08-03'))
})
