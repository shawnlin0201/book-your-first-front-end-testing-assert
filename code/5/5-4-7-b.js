it('should run only pending timers', () => {
  vi.useFakeTimers()
  let count1 = 0
  let count2 = 0

  const mockFn1 = () => count1++
  const mockFn2 = () => count2++

  setInterval(() => mockFn1(), 1000)
  setInterval(() => mockFn2(), 3000)

  expect(count1).toEqual(0)
  expect(count2).toEqual(0)

  // 直到執行完當下等待中的所有計時器，需一次推進 3000 毫秒
  vi.advanceTimersToNextTimer()

  expect(count1).toEqual(3) // 該計時器 3000 毫秒後，執行了 3 次
  expect(count2).toEqual(1) // 該計時器 3000 毫秒後，執行了 1 次
})
