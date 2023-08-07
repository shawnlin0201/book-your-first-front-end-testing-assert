it('should mockImplementation', () => {
  const mockFn = vi.fn(() => 'original')

  expect(mockFn()).toBe('original')

  mockFn.mockImplementation(() => 'mock')

  expect(mockFn()).toBe('mock') // 改變成替換的值 'mock'
  expect(mockFn()).toBe('mock') // 接下來都會返回 'mock'

  mockFn.mockRestore() // 複習一下：恢復模擬替身實作的方法

  expect(mockFn()).toBe('original') // 恢復到原先模擬替身的實作
})
