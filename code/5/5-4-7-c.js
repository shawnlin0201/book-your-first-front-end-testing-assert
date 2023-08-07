it('should advance timers by time', () => {
  vi.useFakeTimers()
  const mockFn = vi.fn()

  setTimeout(mockFn, 1000)

  vi.advanceTimersByTime(999) // 執行到該行時累計時間已經過 999 毫秒
  expect(mockFn).not.toHaveBeenCalled()
  vi.advanceTimersByTime(1) // 執行到該行時累計時間已經過 1000 毫秒
  expect(mockFn).toHaveBeenCalled()
})
