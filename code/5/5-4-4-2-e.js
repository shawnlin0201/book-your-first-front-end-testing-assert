it('should mockImplementationOnce', () => {
  const mockFn = vi.fn(() => 'original')

  expect(mockFn()).toBe('original')

  mockFn.mockImplementationOnce(() => 'mock')

  expect(mockFn()).toBe('mock') // 改變成替換的值 'mock' 一次
  expect(mockFn()).toBe('original') // 接下會回復到原先的值
})
