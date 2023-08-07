it('透過 vi.fn 替換實作與返回的內容', () => {
  const doSomeThing = vi.fn(() => 4) // 返回 4

  // 不論傳入什麼都會返回 4
  expect(doSomeThing()).toBe(4)
  expect(doSomeThing(1, 2)).toBe(4)
  expect(doSomeThing(3, 4, 5)).toBe(4)
})
