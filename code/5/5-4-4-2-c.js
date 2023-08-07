it('should restore mock.calls & mock.results', () => {
  const mockFn = vi.fn(() => 'mock')

  mockFn(1, 2, 3) // first call

  expect(mockFn.mock.calls).toEqual([[1, 2, 3]])
  expect(mockFn.mock.results).toEqual([
    {
      type: 'return',
      value: 'mock'
    }
  ])
  expect(mockFn()).toBe('mock')

  mockFn.mockRestore()

  expect(mockFn.mock.calls).toEqual([])
  expect(mockFn.mock.results).toEqual([])
  expect(mockFn()).toBe('mock')
})
