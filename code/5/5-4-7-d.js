it('should advance timers to next timer', () => {
  vi.useFakeTimers()
  let count1 = 0
  let count2 = 0

  const mockFn1 = () => count1++
  const mockFn2 = () => count2++

  setInterval(() => mockFn1(), 1000)
  setInterval(() => mockFn2(), 3000)

  expect(count1).toEqual(0)
  expect(count2).toEqual(0)

  // 直到執行完接下來的一個計時器，需一次推進 1000 毫秒
  vi.advanceTimersToNextTimer()

  // 該計時器經過 1000 毫秒後，執行了 1 次，離下個還差 1000 毫秒
  expect(count1).toEqual(1)
  // 該計時器經過 1000 毫秒後，執行了 0 次，離下個還差 2000 毫秒
  expect(count2).toEqual(0)

  // 直到執行完接下來的一個計時器，需一次推進 1000 毫秒
  vi.advanceTimersToNextTimer()

  // 該計時器又經過 1000 毫秒後，執行了 2 次，離下個還差 1000 毫秒
  expect(count1).toEqual(2)
  // 該計時器又經過 1000 毫秒後，執行了 0 次，離下個還差 1000 毫秒
  expect(count2).toEqual(0)

  vi.advanceTimersToNextTimer()
  expect(count1).toEqual(3)
  expect(count2).toEqual(1)
})
