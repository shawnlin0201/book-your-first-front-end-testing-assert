it('should run all timers', () => {
  vi.useFakeTimers()
  const mockFn = vi.fn()

  setTimeout(mockFn, 1000)
  vi.runAllTimers()

  expect(mockFn).toHaveBeenCalled()
})
