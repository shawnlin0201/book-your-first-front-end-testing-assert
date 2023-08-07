it('should mockReturnValueOnce', () => {
  const mockFn = vi.fn()

  mockFn.mockReturnValueOnce('mock')
  expect(mockFn()).toBe('mock') // 只改變一次輸出值
  expect(mockFn()).toBeUndefined() // 回覆到原先的輸出
})
