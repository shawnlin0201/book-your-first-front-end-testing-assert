it('should mockReturnValue', () => {
  const mockFn = vi.fn()

  mockFn.mockReturnValue('mock')
  expect(mockFn()).toBe('mock')

  mockFn.mockRestore()
  expect(mockFn()).toBeUndefined()
})
